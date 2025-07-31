if (window.innerWidth > 576) {
  document.querySelectorAll('.wow--mobile').forEach(el => {
    el.classList.remove('wow', 'animated');
    el.removeAttribute('data-wow-delay');
    el.removeAttribute('data-wow-duration');
    el.style.visibility = 'visible'; // чтобы элемент не был скрыт
  });
}
new WOW().init();



gsap.registerPlugin(ScrollTrigger, Draggable);



document.addEventListener("DOMContentLoaded", () => {
  
  
  const mm = gsap.matchMedia();
  
  
  mm.add("(min-width: 577px)", () => {
    
    gsap.set([
      
      ".gvlogo__bl img",
      ".gvlogo__br img",
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
    
    ], {
      opacity: 0
    });
    
    gsap.set(".gvlogo__bl img", { x: -150 });
    gsap.set(".gvlogo__br img", { x: 150 });
    gsap.set(".gvlogo-biglogo img", { scale: 0.5 });
    
    gsap.set(".gvillustration__l .g1", { y: 50 });
    gsap.set(".gvillustration__l .g2-l", { y: 50 });
    gsap.set(".gvillustration__l .g2-r", { y: 50 });
    gsap.set(".gvillustration__l .g4-l", { y: 50 });
    gsap.set(".gvillustration__r .g4-r", { y: 600 });
    gsap.set(".gvillustration__r .g3-l", { y: 600 });
    gsap.set(".gvillustration__r .g3-r", { y: 600 });
    gsap.set(".gvillustration__r .g0", { y: 600 });
    gsap.set(".gvillustration__r .blockill-stains", { x: 1000 });
    
    gsap.set(".map-animation", { y: 100 });
    
    gsap.set(".gvschemes__s img", { y: 100 });
    
    
    // Logo
    
    const TL_Logo = gsap.timeline({
      scrollTrigger: {
        trigger: "#gvlogo",
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        toggleActions: "play none none reverse",
      }
    });
    
    TL_Logo.to(".gvlogo__bl img", {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    });
    
    TL_Logo.to(".gvlogo__br img", {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");
    
    TL_Logo.to(".gvlogo-biglogo img", {
      opacity: 1,
      scale: 1,
      rotation: 360,
      duration: 3.0,
      ease: "power2.inOut"
    }, "-=1.0");
    
    // end Logo
    
    
    
    // Illustration
    
    const TL_Illustration = gsap.timeline({
      scrollTrigger: {
        trigger: "#gvillustration",
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        toggleActions: "play none none reverse"
      }
    });
    
    TL_Illustration.to(".gvillustration__l .g1", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    });
    
    TL_Illustration.to(".gvillustration__l .g2-l", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");
    
    TL_Illustration.to(".gvillustration__l .g2-r", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");
    
    TL_Illustration.to(".gvillustration__l .g4-l", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");
    
    TL_Illustration.to(".gvillustration__r .g4-r", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=1.0");
    
    TL_Illustration.to(".gvillustration__r .g3-l", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");
    
    TL_Illustration.to(".gvillustration__r .g3-r", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");
    
    TL_Illustration.to(".gvillustration__r .g0", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.1");
    
    TL_Illustration.to(".gvillustration__r .blockill-stains", {
      x: 0,
      opacity: 1,
      duration: 3,
      ease: "power2.out"
    }, "-=0.5");
    
    // end Illustration
    
    
    
    // Map
    
    const TL_Map = gsap.timeline({
      scrollTrigger: {
        trigger: "#gvmap",
        start: "top top",
        end: "+=100%",
        scrub: 3,
        pin: true,
        pinSpacing: true,
        toggleActions: "play none none reverse"
      }
    });
    
    TL_Map.to(".map-animation", {
      y: 0,
      opacity: 1,
      duration: 3,
      ease: "power2.out"
    });
    
    // end Map
    
    
    
    // Schemes
    
    const TL_Schemes = gsap.timeline({
      scrollTrigger: {
        trigger: "#gvschemes",
        start: "top top",
        end: "+=100%",
        scrub: 3,
        pin: true,
        pinSpacing: true,
        toggleActions: "play none none reverse",
      }
    });
    
    TL_Schemes.to(".gvschemes__s", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    });
    
    gsap.utils.toArray('.gvschemes__s img').forEach((img, index) => {
      TL_Schemes.to(img, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      }, `-=0.1`);
    });
    
    TL_Schemes.to({}, { duration: 10 });
    
    // end Schemes

    
    
    // Socialmedia Carousel
    
    const slidesData = [
      { src: 'img/sm21.webp', alt: '' },
      { src: 'img/sm22.webp', alt: '' },
      { src: 'img/sm23.webp', alt: '' },
      { src: 'img/sm01.webp', alt: '' },
      { src: 'img/sm02.webp', alt: '' },
      { src: 'img/sm03.webp', alt: '' },
      { src: 'img/sm04.webp', alt: '' },
      { src: 'img/sm05.webp', alt: '' },
      { src: 'img/sm06.webp', alt: '' },
      { src: 'img/sm07.webp', alt: '' },
      { src: 'img/sm08.webp', alt: '' },
      { src: 'img/sm09.webp', alt: '' },
      { src: 'img/sm10.webp', alt: '' },
      { src: 'img/sm11.webp', alt: '' },
      { src: 'img/sm12.webp', alt: '' },
      { src: 'img/sm13.webp', alt: '' },
      { src: 'img/sm14.webp', alt: '' },
      { src: 'img/sm15.webp', alt: '' },
      { src: 'img/sm16.webp', alt: '' },
      { src: 'img/sm17.webp', alt: '' },
      { src: 'img/sm18.webp', alt: '' },
      { src: 'img/sm19.webp', alt: '' },
      { src: 'img/sm20.webp', alt: '' },
      { src: 'img/sm21.webp', alt: '' },
      { src: 'img/sm22.webp', alt: '' },
      { src: 'img/sm23.webp', alt: '' },
      { src: 'img/sm01.webp', alt: '' },
      { src: 'img/sm02.webp', alt: '' },
      { src: 'img/sm03.webp', alt: '' },
    ];
    
    const carouselContainer = document.querySelector('.socialmedia-animation');
    const saElements = carouselContainer.querySelectorAll('.sa');
    
    let currentIndex = 3;
    
    function updateClasses() {
      saElements.forEach((el, i) => el.className = 'sa');
      saElements[currentIndex].classList.add('sa--active');
      if (saElements[currentIndex - 1]) saElements[currentIndex - 1].classList.add('sa--l');
      if (saElements[currentIndex - 2]) saElements[currentIndex - 2].classList.add('sa--ll');
      if (saElements[currentIndex - 3]) saElements[currentIndex - 3].classList.add('sa--lll');
      if (saElements[currentIndex + 1]) saElements[currentIndex + 1].classList.add('sa--l');
      if (saElements[currentIndex + 2]) saElements[currentIndex + 2].classList.add('sa--ll');
      if (saElements[currentIndex + 3]) saElements[currentIndex + 3].classList.add('sa--lll');
      saElements.forEach((el, i) => {
        el.style.display = (Math.abs(i - currentIndex) <= 3) ? 'block' : 'none';
      });
    }
    
    function createScrollCarousel() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#gvsocialmedia',
          start: 'top top',
          end: '+=5000',
          scrub: 1,
          pin: true,
          pinSpacing: true,
        }
      });
      
      for (let i = 3; i <= 25; i++) {
        tl.to({}, {
          duration: 1.5,
          onUpdate: () => {
            currentIndex = i;
            updateClasses();
          }
        });
      }
    }
    
    function enableMobileAutoplayAndSwipe() {
      let interval;
      
      function autoAdvance() {
        currentIndex = (currentIndex + 1) % saElements.length;
        updateClasses();
      }
      
      if (window.innerWidth <= 576) {
        interval = setInterval(autoAdvance, 3000);
        
        let touchStartX = 0;
        let touchEndX = 0;
        
        carouselContainer.addEventListener('touchstart', e => {
          touchStartX = e.changedTouches[0].screenX;
        });
        
        carouselContainer.addEventListener('touchend', e => {
          touchEndX = e.changedTouches[0].screenX;
          if (touchEndX < touchStartX - 30) {
            currentIndex = Math.min(currentIndex + 1, saElements.length - 1);
            updateClasses();
          }
          if (touchEndX > touchStartX + 30) {
            currentIndex = Math.max(currentIndex - 1, 0);
            updateClasses();
          }
        });
      }
    }
    
    updateClasses();
    createScrollCarousel();
    enableMobileAutoplayAndSwipe();
    
    // end Socialmedia Carousel
  
    
    
  });
  
  
  mm.add("(max-width: 576px)", () => {
    
    gsap.set([
      ".gvlogo__bl img",
      ".gvlogo__br img",
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
      ".gvschemes__s img"
    ], {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      clearProps: "all"
    });
    
  });
  
  
});