// WOW

if (window.innerWidth <= 576) {
  document.querySelectorAll('.wow--mobile').forEach(el => {
    el.classList.remove('wow', 'animated');
    el.removeAttribute('data-wow-delay');
    el.removeAttribute('data-wow-duration');
    el.style.visibility = 'visible';
  });
}
new WOW().init();



// GSAP

gsap.registerPlugin(ScrollTrigger, Draggable);



document.addEventListener("DOMContentLoaded", () => {

  const mm = gsap.matchMedia();

  // LENIS

  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
    smooth: true,
    direction: 'vertical'
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);


  // DESKTOP

  mm.add("(min-width: 577px)", () => {

    gsap.set([
      ".gvlogo-biglogo img",
      ".gvillustration__l .g1",
      ".gvillustration__l .g2-l",
      ".gvillustration__l .g2-r",
      ".gvillustration__l .g4-l",
      ".gvillustration__r .g4-r",
      ".gvillustration__r .g3-l",
      ".gvillustration__r .g3-r",
      ".gvillustration__r .g0",
      ".gvillustration__r .blockill-stains",
      ".map-animation",
      ".gvschemes__s",
      ".gvschemes__s img",
      ".darr-scroll--first",
      ".darr-scroll--sec"
    ], {
      opacity: 0
    });

    gsap.set(".gvlogo-biglogo img", {
      scale: 0.5,
    });
    gsap.set(".gvillustration__l .g1", {
      y: 50
    });
    gsap.set(".gvillustration__l .g2-l", {
      y: 50
    });
    gsap.set(".gvillustration__l .g2-r", {
      y: 50
    });
    gsap.set(".gvillustration__l .g4-l", {
      y: 50
    });
    gsap.set(".gvillustration__r .g4-r", {
      y: 600
    });
    gsap.set(".gvillustration__r .g3-l", {
      y: 600
    });
    gsap.set(".gvillustration__r .g3-r", {
      y: 600
    });
    gsap.set(".gvillustration__r .g0", {
      y: 600
    });
    gsap.set(".gvillustration__r .blockill-stains", {
      x: 1000
    });
    gsap.set(".map-animation", {
      y: 100
    });
    gsap.set(".gvschemes__s img", {
      y: 100
    });
    gsap.set(".darr-scroll--first", {
      y: 300
    });
    gsap.set(".darr-scroll--sec", {
      y: 300
    });


    // ========================================================
    // LOGO
    // ========================================================

    const TL_Logo = gsap.timeline({
      defaults: {
        ease: "power2.out"
      },
      scrollTrigger: {
        trigger: "#gvlogo",
        start: "top top",
        end: () => "+=" + window.innerHeight,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });
    TL_Logo.to(".gvlogo-biglogo img", {
      opacity: 1,
      scale: 1,
      rotation: 360,
      duration: 5,
      ease: "power2.inOut"
    }, "+=1");


    // ========================================================
    // ILLUSTRATION
    // ========================================================

    const TL_Illustration = gsap.timeline({
      scrollTrigger: {
        trigger: "#gvillustration",
        start: "top top",
        end: () => "+=" + window.innerHeight,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });
    TL_Illustration.to(".gvillustration__l .g1", {
      y: 0,
      opacity: 1,
      duration: 1
    })
    TL_Illustration.to(".gvillustration__l .g2-l", {
      y: 0,
      opacity: 1,
      duration: 1
    }, "-=0.5")
    TL_Illustration.to(".gvillustration__l .g2-r", {
      y: 0,
      opacity: 1,
      duration: 1
    }, "-=0.5")
    TL_Illustration.to(".gvillustration__l .g4-l", {
      y: 0,
      opacity: 1,
      duration: 1
    }, "-=0.5")
    TL_Illustration.to(".gvillustration__r .g4-r", {
      y: 0,
      opacity: 1,
      duration: 1
    }, "-=1")
    TL_Illustration.to(".gvillustration__r .g3-l", {
      y: 0,
      opacity: 1,
      duration: 1
    }, "-=0.5")
    TL_Illustration.to(".gvillustration__r .g3-r", {
      y: 0,
      opacity: 1,
      duration: 1
    })
    TL_Illustration.to(".gvillustration__r .g0", {
      y: 0,
      opacity: 1,
      duration: 1
    }, "-=0.1")
    TL_Illustration.to(".gvillustration__r .blockill-stains", {
      x: 0,
      opacity: 1,
      duration: 3
    }, "-=0.5");


    // ========================================================
    // MAP
    // ========================================================

    const TL_Map = gsap.timeline({
      scrollTrigger: {
        trigger: "#gvmap",
        start: "top top",
        end: () => "+=" + window.innerHeight,
        pin: true,
        pinSpacing: true,
        scrub: 3,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });
    TL_Map.to(".map-animation", {
      y: 0,
      opacity: 1,
      duration: 3,
      ease: "power2.out"
    });


    // ========================================================
    // SCHEMES
    // ========================================================

    const TL_Schemes = gsap.timeline({
      scrollTrigger: {
        trigger: "#gvschemes",
        start: "top top",
        end: () => "+=" + window.innerHeight,
        pin: true,
        pinSpacing: true,
        scrub: 3,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });
    TL_Schemes.to(".gvschemes__s", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    });

    gsap.utils.toArray(".gvschemes__s img").forEach((img) => {
      TL_Schemes.to(img, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.1");
    });
    TL_Schemes.to({}, {
      duration: 5
    });

    // SOCIAL MEDIA CAROUSEL

    const slidesData = [
      { src: "img/sm21.webp", alt: "" },
      { src: "img/sm22.webp", alt: "" },
      { src: "img/sm23.webp", alt: "" },
      { src: "img/sm01.webp", alt: "" },
      { src: "img/sm02.webp", alt: "" },
      { src: "img/sm03.webp", alt: "" },
      { src: "img/sm04.webp", alt: "" },
      { src: "img/sm05.webp", alt: "" },
      { src: "img/sm06.webp", alt: "" },
      { src: "img/sm07.webp", alt: "" },
      { src: "img/sm08.webp", alt: "" },
      { src: "img/sm09.webp", alt: "" },
      { src: "img/sm10.webp", alt: "" },
      { src: "img/sm11.webp", alt: "" },
      { src: "img/sm12.webp", alt: "" },
      { src: "img/sm13.webp", alt: "" },
      { src: "img/sm14.webp", alt: "" },
      { src: "img/sm15.webp", alt: "" },
      { src: "img/sm16.webp", alt: "" },
      { src: "img/sm17.webp", alt: "" },
      { src: "img/sm18.webp", alt: "" },
      { src: "img/sm19.webp", alt: "" },
      { src: "img/sm20.webp", alt: "" },
      { src: "img/sm21.webp", alt: "" },
      { src: "img/sm22.webp", alt: "" },
      { src: "img/sm23.webp", alt: "" },
      { src: "img/sm01.webp", alt: "" },
      { src: "img/sm02.webp", alt: "" },
      { src: "img/sm03.webp", alt: "" }
    ];

    const carouselContainer =
        document.querySelector(".socialmedia-animation");
    const saElements =
        carouselContainer
            ? carouselContainer.querySelectorAll(".sa")
            : [];

    let currentIndex = 3;

    function updateClasses() {
      if (!saElements.length) return;
      saElements.forEach((el) => {
        el.className = "sa";
      });
      if (saElements[currentIndex]) {
        saElements[currentIndex].classList.add("sa--active");
      }
      if (saElements[currentIndex - 1]) {
        saElements[currentIndex - 1].classList.add("sa--l");
      }
      if (saElements[currentIndex - 2]) {
        saElements[currentIndex - 2].classList.add("sa--ll");
      }
      if (saElements[currentIndex - 3]) {
        saElements[currentIndex - 3].classList.add("sa--lll");
      }
      if (saElements[currentIndex + 1]) {
        saElements[currentIndex + 1].classList.add("sa--l");
      }
      if (saElements[currentIndex + 2]) {
        saElements[currentIndex + 2].classList.add("sa--ll");
      }
      if (saElements[currentIndex + 3]) {
        saElements[currentIndex + 3].classList.add("sa--lll");
      }

      saElements.forEach((el, i) => {
        el.style.display =
            Math.abs(i - currentIndex) <= 3
                ? "block"
                : "none";
      });

    }

    updateClasses();

    // Social Media ScrollTrigger

    const socialState = {
      index: 3
    };

    const TL_SocialMedia = gsap.timeline({
      scrollTrigger: {
        trigger: "#gvsocialmedia",
        start: "top top",
        end: () => "+=" + (window.innerHeight * 4),
        pin: true,
        pinSpacing: true,
        scrub: 2,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });
    TL_SocialMedia.to({}, {
      duration: 1
    });

    // Carousel

    for (let i = 4; i <= 25; i++) {
      TL_SocialMedia.to(socialState, {
        index: i,
        duration: 1,
        ease: "none",
        onUpdate: () => {
          const newIndex =
              Math.round(socialState.index);
          if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            updateClasses();
          }
        }
      });

    }

    TL_SocialMedia.to({}, {
      duration: 2
    });


    // ========================================================
    // COMING SOON
    // ========================================================

    const TL_Comingsoon = gsap.timeline({
      scrollTrigger: {
        trigger: "#gvcomingsoon",
        start: "top top",
        end: () => "+=" + window.innerHeight,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });
    TL_Comingsoon.to(".darr-scroll--first", {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    });


    // ========================================================
    // GVCOM
    // ========================================================

    const TL_Gvcom = gsap.timeline({
      scrollTrigger: {
        trigger: "#gvcom",
        start: "top top",
        end: () => "+=" + window.innerHeight,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });
    TL_Gvcom.to(".darr-scroll--sec", {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    });


    // ========================================================
    // END OF DESKTOP
    // ========================================================

  });



  // SOCIAL MEDIA — MOBILE

  const isMobile = window.innerWidth <= 576;

  if (isMobile) {
    let touchStartX = 0;
    let touchEndX = 0;

    const carouselContainer =
        document.querySelector(".socialmedia-animation");

    const saElements =
        carouselContainer
            ? carouselContainer.querySelectorAll(".sa")
            : [];

    let currentIndex = 3;

    function updateMobileClasses() {
      if (!saElements.length) return;
      saElements.forEach((el) => {
        el.className = "sa";
        el.style.display = "none";
      });
      if (saElements[currentIndex]) {
        saElements[currentIndex].classList.add("sa--active");
        saElements[currentIndex].style.display = "block";
      }
    }

    updateMobileClasses();

    if (carouselContainer) {
      carouselContainer.addEventListener(
          "touchstart",
          (e) => {
            touchStartX = e.touches[0].clientX;
          },
          { passive: true }
      );
      carouselContainer.addEventListener(
          "touchmove",
          (e) => {
            touchEndX = e.touches[0].clientX;
          },
          { passive: true }
      );
      carouselContainer.addEventListener(
          "touchend",
          () => {
            const threshold = 30;
            const deltaX =
                touchEndX - touchStartX;
            if (Math.abs(deltaX) <= threshold) {
              return;
            }
            if (deltaX < 0) {
              currentIndex =
                  Math.min(
                      currentIndex + 1,
                      saElements.length - 1
                  );
            } else {
              currentIndex =
                  Math.max(
                      currentIndex - 1,
                      0
                  );
            }
            updateMobileClasses();
          }
      );
    }

  }


  // MOBILE GSAP

  mm.add("(max-width: 576px)", () => {

    gsap.set([
      ".gvlogo-biglogo img",
      ".gvillustration__l .g1",
      ".gvillustration__l .g2-l",
      ".gvillustration__l .g2-r",
      ".gvillustration__l .g4-l",
      ".gvillustration__r .g4-r",
      ".gvillustration__r .g3-l",
      ".gvillustration__r .g3-r",
      ".gvillustration__r .g0",
      ".gvillustration__r .blockill-stains",
      ".map-animation",
      ".gvschemes__s",
      ".gvschemes__s img",
      ".darr-scroll--first",
      ".darr-scroll--sec"
    ], {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      clearProps: "all"
    });

  });



  // LENIS + SCROLLTRIGGER SYNC

  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      if (arguments.length) {
        lenis.scrollTo(value, {
          immediate: true
        });
      }
      return lenis.scroll;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: "transform"
  });


  // ----------------------------------------------------------
  // Refresh AFTER all ScrollTriggers are created
  // ----------------------------------------------------------

  ScrollTrigger.addEventListener(
      "refresh",
      () => lenis.resize()
  );
  ScrollTrigger.refresh();

});