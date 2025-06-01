// gsap-animation.js

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  gsap.set([
    ".gvlogo__tl .taskdesc",
    ".gvlogo__tr .taskdesc",
    ".gvlogo__bl img",
    ".gvlogo__br img",
    ".gvlogo-biglogo img"
  ], {
    opacity: 0
  });

  gsap.set(".gvlogo__tl .taskdesc", { x: -150 });
  gsap.set(".gvlogo__tr .taskdesc", { x: 150 });
  gsap.set(".gvlogo__bl img", { x: -150 });
  gsap.set(".gvlogo__br img", { x: 150 });
  gsap.set(".gvlogo-biglogo img", { scale: 0.5 });

  // Logo
  
  const TL_Logo = gsap.timeline({
    scrollTrigger: {
      trigger: "#gvlogo",
      start: "top top",
      end: "+=150%",
      scrub: 1,
      pin: true,
      pinSpacing: true,
      toggleActions: "play none none reverse"
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
  
  
  
  
  
  
  // scroll Icon
  
  gsap.set(".i-scroll", {
    yPercent: -50,
    xPercent: -50,
    left: "50%",
    top: "50%",
    opacity: 1
  });
  
  const scrollTimeline = gsap.timeline();
  
  scrollTimeline
    .to(".i-scroll", {
      top: "90%",
      delay: 3,
      duration: 1,
      ease: "power2.inOut"
    })
    .to(".i-scroll", {
      opacity: 0,
      duration: 3,
      delay: 6,
      ease: "power1.inOut"
    });
  
  // end scroll Icon


  
});










