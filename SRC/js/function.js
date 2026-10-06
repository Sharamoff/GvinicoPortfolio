const keepFancyboxScrollInside = (event) => {
  if (event.cancelable) event.preventDefault();
  event.stopPropagation();
};

const isMobileFancybox = () => window.matchMedia('(max-width: 576px)').matches;

// Keep page scrolling separate from Fancybox interactions.
Fancybox.bind('#gvpages [data-fancybox]', {
  contentClick: () => (isMobileFancybox() ? 'toggleCover' : 'toggleZoom'),
  Images: {
    Panzoom: {
      // Fancybox treats 1 as the native-size maximum. On mobile, limit that
      // maximum to `cover`, so pinch zoom also stops at the viewport width.
      maxScale: (panzoom) =>
        isMobileFancybox() ? panzoom.coverScale / panzoom.fullScale : 1
    }
  },
  Carousel: {
    preload: 0
  },
  on: {
    initLayout: (fancybox) => {
      fancybox.container.addEventListener('wheel', keepFancyboxScrollInside, {
        passive: false
      });
      fancybox.container.addEventListener('touchmove', keepFancyboxScrollInside, {
        passive: false
      });
    }
  }
});
