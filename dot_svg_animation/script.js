let tl = gsap.timeline({
  defaults: { ease: Expo.easeOut, opacity: 1 },
});

tl.to(".test_dot", {
  delay: 0.5,
  width: 620,
  duration: 0.7,
  // xPerc
  // transformOrigin: "left",
  // 반 선
});
tl.to(".svg_text_1", {
  // delay: 0.1,
  opacity: 0,
  duration: 0.5,
});

tl.to(".svg_text_2", {
  delay: 0.1,
  opaicty: 1,
  duration: 0.4,
  // 선이 되고 opacity: 1
});

tl.to(".svg_text_2", {
  delay: 0.7,
  // opaicty: 0.1,
  color: "transparent",
  duration: 0.3,
  // 선이 되고 opacity:0??
});

tl.to(".test_dot", {
  delay: 0.1,
  width: 1720,
  duration: 0.4,
  // transformOrigin: "left",
  // 선으로
});

tl.to(".test_dot", {
  delay: 0.2,
  height: 800,
  y: -400,
  duration: 0.5,
  // transformOrigin: "50% 50%",
  // 네모
});

tl.to(".test_dot", {
  delay: 0.2,
  width: 800,
  height: 800,
  // x: 400,
  // x: -50%,
  xPercent: 57.5,
  rx: 400,
  duration: 0.6,
  // transform: "translate(-50%, -50%)",
  // transformOrigin: "50% 50%",
  // 원
});

tl.to(".svg_text_3", {
  delay: 0,
  opacity: 1,
});

tl.to(".test_dot", {
  delay: 0.8,
  width: 800,
  height: 800,
  // x: 500,
  rx: 400,
  fill: "transparent",
  stroke: "black",
  duration: 0.7,
  // transformOrigin: "50% 50%",
  // 원 선으로
});
