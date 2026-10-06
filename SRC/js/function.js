const keepFancyboxScrollInside = (event) => {
  if (event.cancelable) event.preventDefault();
  event.stopPropagation();
};

const isMobileFancybox = () => window.matchMedia('(max-width: 576px)').matches;

Fancybox.bind('#gvpages [data-fancybox]', {
  contentClick: () => (isMobileFancybox() ? 'toggleCover' : 'toggleZoom'),
  Images: {
    Panzoom: {
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
