new hoverEffect({
  parent: document.querySelector(".one .prjone"),
  intensity: 0.1,
  image1: "images/p2.webp",
  image2: "images/p7.webp",
  displacementImage: "heightMap.png",
});

new hoverEffect({
  parent: document.querySelector(".tw .prjone "),
  intensity: 0.1,
  image1:  "images/p3.webp",
  image2:  "images/p5.webp",
  displacementImage: "heightMap.png",
  hover: true
});


const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});
































