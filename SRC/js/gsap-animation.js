gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  gsap.set([
    
    ".gvlogo__tl .taskdesc",
    ".gvlogo__tr .taskdesc",
    ".gvlogo__bl img",
    ".gvlogo__br img",
    ".gvlogo-biglogo img",
    
    ".gvillustration__l .taskdesc",
    ".gvillustration__l .g1",
    ".gvillustration__l .g2-l",
    ".gvillustration__l .g2-r",
    ".gvillustration__l .g4-l",
    ".gvillustration__r .taskdesc",
    
    ".gvmap__c .td--problem",
    ".gvmap__c .td--solution",
    ".map-animation",
    
  ], {
    opacity: 0
  });

  gsap.set(".gvlogo__tl .taskdesc", { x: -150 });
  gsap.set(".gvlogo__tr .taskdesc", { x: 150 });
  gsap.set(".gvlogo__bl img", { x: -150 });
  gsap.set(".gvlogo__br img", { x: 150 });
  gsap.set(".gvlogo-biglogo img", { scale: 0.5 });
  
  gsap.set(".gvillustration__l .taskdesc", { x: -150 });
  gsap.set(".gvillustration__l .g1", { y: 50 });
  gsap.set(".gvillustration__l .g2-l", { y: 50 });
  gsap.set(".gvillustration__l .g2-r", { y: 50 });
  gsap.set(".gvillustration__l .g4-l", { y: 50 });
  gsap.set(".gvillustration__r .taskdesc", { x: 150 });
  gsap.set(".gvillustration__r .g4-r", { y: 600 });
  gsap.set(".gvillustration__r .g3-l", { y: 600 });
  gsap.set(".gvillustration__r .g3-r", { y: 600 });
  gsap.set(".gvillustration__r .g0", { y: 600 });
  gsap.set(".gvillustration__r .blockill-stains", { x: 1000 });
  
  gsap.set(".gvmap__c .td--problem", { x: -150 });
  gsap.set(".gvmap__c .td--solution", { x: 150 });
  gsap.set(".map-animation", { y: 100 });
  

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

  TL_Logo.to(".gvlogo__tl .taskdesc", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  });

  TL_Logo.to(".gvlogo__tr .taskdesc", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  }, "-=0.5");

  TL_Logo.to(".gvlogo__bl img", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  }, "-=0.5");

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
  }, "-=2.0");
  
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

  TL_Illustration.to(".gvillustration__l .taskdesc", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  });

  TL_Illustration.to(".gvillustration__l .g1", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  }, "-=1.0");

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

  TL_Illustration.to(".gvillustration__r .taskdesc", {
    x: 0,
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

  TL_Map.to(".gvmap__c .td--problem", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  });

  TL_Map.to(".gvmap__c .td--solution", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  }, "-=0.5");
  
  TL_Map.to(".map-animation", {
    y: 0,
    opacity: 1,
    duration: 3,
    ease: "power2.out"
  }, "-=0.5");

  // end Map


  
  
  
});










