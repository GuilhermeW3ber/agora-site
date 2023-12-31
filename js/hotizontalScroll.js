const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");
const title= document.querySelector(".wrapper-title");

var windowX=window. screen.width;
if (windowX>=700){
  let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      end: "+=2500",
      markers: false,
      // anticipatePin: 1,
    }
  });

  console.log(1 / (sections.length - 1))

  //Progress bar animation

  gsap.to(mask, {
    width: "100%",
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top left",
      scrub: 1,
    }
  });
}
// whizz around the sections
// sections.forEach((section) => {
//   // grab the scoped text
//   let text = section.querySelectorAll(".anim");
  
//   // bump out if there's no items to animate
//   if(text.length === 0)  return 
  
//   // do a little stagger
//   gsap.from(text, {
//     y: -130,
//     opacity: 0,
//     duration: 2,
//     ease: "elastic",
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: section,
//       containerAnimation: scrollTween,
//       start: "left center",
//       markers: false
//     }
//   });
// });
