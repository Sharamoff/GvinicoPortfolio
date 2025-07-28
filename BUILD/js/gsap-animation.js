if (window.innerWidth > 576) {
  document.querySelectorAll('.wow--mobile').forEach(el => {
    el.classList.remove('wow', 'animated');
    el.removeAttribute('data-wow-delay');
    el.removeAttribute('data-wow-duration');
    el.style.visibility = 'visible'; // чтобы элемент не был скрыт
  });
}
new WOW().init();



gsap.registerPlugin(ScrollTrigger);



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
    
    
    
    // Socialmedia
    
    const TL_Socialmedia = gsap.timeline({
      scrollTrigger: {
        trigger: "#gvsocialmedia",
        start: "top top",
        end: "+=100%",
        scrub: 3,
        pin: true,
        pinSpacing: true,
        toggleActions: "play none none reverse"
      }
    });
    
    TL_Socialmedia.to(".gvsocialmedia__s", {
      y: 0,
      opacity: 1,
      duration: 3,
      ease: "power2.out"
    });
    
    // end Socialmedia
    
    
    
    
    
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