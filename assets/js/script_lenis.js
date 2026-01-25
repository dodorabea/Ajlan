const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_1 = document.getElementById("vertical");
const timeln = gsap.timeline({ paused: true });


const scroll_1 = ScrollTrigger.create({
  animation: timeln,
  trigger: section_1,
  start: 'top top',
  end: 'bottom center',
  scrub: true
});








