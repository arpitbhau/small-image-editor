// JAI SHREE RAM

function lenis() {
  document.addEventListener("DOMContentLoaded", () => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
}

lenis()

Shery.mouseFollower();
