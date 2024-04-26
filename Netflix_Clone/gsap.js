var tl = gsap.timeline();

tl.from("header", {
  scale: 4,
  delay: 0.5,
  y: 400,
  backgroundColor: "#C11119",
});
tl.to("header", {
    y: 650

});
tl.to("header", {
  delay: 0.5,
  y: 0
});
tl.from(".logo", {
    opacity: 0,
    x: -50,
    delay: 0.2, 
    scale: 3
});

tl.from(".select-menu", {
    opacity: 0,
    delay: 0.2,
    y: -50,
    scale: 2
});

tl.from("nav button", {
    opacity: 0,
    x: 50
});

tl.from(".main-text h1", {
    opacity: 0,
    stagger: 1
});

tl.from(".main-text h2", {
    opacity: 0,
    x: 100,
    stagger: 2,
    delay: 0.3
});

tl.from(".main-text h3", {
  opacity: 0,
  x: -100,
  delay: 0.3
});

tl.from(".main_form input",{
    scale: 2,
    opacity: 0
});

tl.from(".main_form label", {
  opacity: 0,
  delay: 0.2
});

tl.to(".main_form label", {
    opacity: 1
});

tl.from(".main_form button", {
    opacity: 0,
    delay: 0.4
});