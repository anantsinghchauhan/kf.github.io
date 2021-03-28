new hoverEffect({
  parent: document.querySelector(".one .prjone"),
  intensity: 0.1,
  image1: "images/p1.webp",
  image2: "images/p2.webp",
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




new LocomotiveScroll({
  el: document.querySelector("#back"),
  smooth: true,
  multiplier: 1.5,
});
locoScroll.on("scroll", ScrollTrigger.update);



































