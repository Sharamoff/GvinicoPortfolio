import PhotoSwipeLightbox from 'https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe-lightbox.esm.min.js';


const gvpages = document.querySelector('#gvpages');


/*
 * ========================================
 * Settings
 * ========================================
 */

const IMAGE_WIDTH = 1600;


/*
 * ========================================
 * Active PhotoSwipe instance
 * ========================================
 */

let activeLightbox = null;

let resizeTimer;


/*
 * ========================================
 * Get zoom level
 * ========================================
 */

const getInitialZoomLevel = () => {

  return window.innerWidth <= IMAGE_WIDTH
    ? 'fill'
    : 1;

};


/*
 * ========================================
 * Page scroll lock
 * ========================================
 */

let pageScrollY = 0;


const lockPageScroll = () => {

  pageScrollY = window.scrollY;

  document.body.style.position = 'fixed';
  document.body.style.top = `-${pageScrollY}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.width = '100%';

};


const unlockPageScroll = () => {

  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.width = '';

  window.scrollTo(0, pageScrollY);

};


/*
 * ========================================
 * Reset slide position to top
 * ========================================
 */

const resetSlideToTop = (pswp) => {

  if (!pswp || !pswp.currSlide) {
    return;
  }


  const slide = pswp.currSlide;


  if (!slide.bounds) {
    return;
  }


  const bounds = slide.bounds;


  slide.panTo(
    bounds.center.x,
    bounds.center.y - bounds.max.y
  );

};


/*
 * ========================================
 * Apply current responsive zoom
 * ========================================
 */

const updateSlideZoom = (pswp) => {

  if (!pswp || !pswp.currSlide) {
    return;
  }


  const slide = pswp.currSlide;


  if (!slide.zoomLevels) {
    return;
  }


  const zoomMode = getInitialZoomLevel();


  const zoom = zoomMode === 'fill'
    ? slide.zoomLevels.fill
    : slide.zoomLevels.initial;


  if (!zoom) {
    return;
  }


  slide.zoomTo(
    zoom,
    {
      x: pswp.viewportSize.x / 2,
      y: pswp.viewportSize.y / 2
    },
    0
  );


  /*
   * PhotoSwipe recalculates bounds after zoom.
   * Therefore reset the vertical position
   * on the next frame.
   */

  requestAnimationFrame(() => {

    resetSlideToTop(pswp);

  });

};


/*
 * ========================================
 * Window resize
 * ========================================
 */

window.addEventListener('resize', () => {

  clearTimeout(resizeTimer);


  resizeTimer = setTimeout(() => {

    if (!activeLightbox?.pswp) {
      return;
    }


    updateSlideZoom(activeLightbox.pswp);

  }, 100);

});


/*
 * ========================================
 * Initialize galleries
 * ========================================
 */

if (gvpages) {


  /*
   * ========================================
   * Individual galleries
   * ========================================
 */

  gvpages
  .querySelectorAll('.gvpage__screenshots')
  .forEach((gallery) => {


    const lightbox = new PhotoSwipeLightbox({

      gallery: gallery,

      children: 'a[data-pswp-src]',


      /*
       * > 1600px  → 100%
       * <= 1600px → fill
       */

      initialZoomLevel: getInitialZoomLevel(),


      /*
       * Secondary zoom.
       */

      secondaryZoomLevel: 'fit',


      /*
       * Allow fill to become larger
       * than 100% on narrow screens.
       */

      maxZoomLevel: 4,


      /*
       * Wheel / trackpad pans image.
       */

      wheelToZoom: false,


      pswpModule: () =>
        import(
          'https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe.esm.min.js'
          )

    });


    /*
     * --------------------------------
     * Before open
     * --------------------------------
     */

    lightbox.on('beforeOpen', () => {

      activeLightbox = lightbox;

      lockPageScroll();

    });


    /*
     * --------------------------------
     * Initial slide
     * --------------------------------
     */

    lightbox.on('afterInit', () => {

      const pswp = lightbox.pswp;

      if (!pswp) {
        return;
      }


      pswp.on('initialZoomInEnd', () => {

        requestAnimationFrame(() => {

          resetSlideToTop(pswp);

        });

      });

    });


    /*
     * --------------------------------
     * Slide change
     * --------------------------------
     *
     * IMPORTANT:
     * Recalculate zoom for every slide.
     */

    lightbox.on('change', () => {

      const pswp = lightbox.pswp;

      if (!pswp) {
        return;
      }


      /*
       * Wait until the new slide is active
       * and its zoom levels are available.
       */

      requestAnimationFrame(() => {

        updateSlideZoom(pswp);

      });

    });


    /*
     * --------------------------------
     * Close
     * --------------------------------
     */

    lightbox.on('close', () => {

      unlockPageScroll();

      activeLightbox = null;

    });


    lightbox.init();

  });


  /*
   * ========================================
   * "View all in Images"
   * ========================================
 */

  const allLink = gvpages.querySelector('.js-gvpage-all');


  if (allLink) {


    const allLightbox = new PhotoSwipeLightbox({

      /*
       * > 1600px  → 100%
       * <= 1600px → fill
       */

      initialZoomLevel: getInitialZoomLevel(),


      /*
       * Secondary zoom.
       */

      secondaryZoomLevel: 'fit',


      /*
       * Allow fill to become larger
       * than 100% on narrow screens.
       */

      maxZoomLevel: 4,


      /*
       * Wheel / trackpad pans image.
       */

      wheelToZoom: false,


      pswpModule: () =>
        import(
          'https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe.esm.min.js'
          )

    });


    /*
     * --------------------------------
     * Before open
     * --------------------------------
     */

    allLightbox.on('beforeOpen', () => {

      activeLightbox = allLightbox;

      lockPageScroll();

    });


    /*
     * --------------------------------
     * Initial slide
     * --------------------------------
     */

    allLightbox.on('afterInit', () => {

      const pswp = allLightbox.pswp;

      if (!pswp) {
        return;
      }


      pswp.on('initialZoomInEnd', () => {

        requestAnimationFrame(() => {

          resetSlideToTop(pswp);

        });

      });

    });


    /*
     * --------------------------------
     * Slide change
     * --------------------------------
     *
     * Recalculate zoom for every slide.
     */

    allLightbox.on('change', () => {

      const pswp = allLightbox.pswp;

      if (!pswp) {
        return;
      }


      requestAnimationFrame(() => {

        updateSlideZoom(pswp);

      });

    });


    /*
     * --------------------------------
     * Close
     * --------------------------------
     */

    allLightbox.on('close', () => {

      unlockPageScroll();

      activeLightbox = null;

    });


    allLightbox.init();


    /*
     * --------------------------------
     * Open all images
     * --------------------------------
     */

    allLink.addEventListener('click', (event) => {

      event.preventDefault();


      const items = [
        ...gvpages.querySelectorAll(
          '.gvpage__screenshots a[data-pswp-src]'
        )
      ].map((link) => ({

        src: link.dataset.pswpSrc,

        width: Number(link.dataset.pswpWidth),

        height: Number(link.dataset.pswpHeight),

        alt: link.querySelector('img')?.alt || ''

      }));


      if (!items.length) {
        return;
      }


      allLightbox.loadAndOpen(0, {

        dataSource: items

      });

    });

  }

}