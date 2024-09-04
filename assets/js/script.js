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

function lImgAnimation() {
    Shery.imageEffect(".lImg img" , {style: 6 , debug: true})
}

lImgAnimation()

lenis()


