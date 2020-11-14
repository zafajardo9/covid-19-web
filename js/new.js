const header = document.querySelector(".header");
// const video = header.querySelector("video");
const video = document.getElementById("intro");
const text = header.querySelector("h1");


//END
const highlight = document.querySelector(".highlight");
// const end = highlight.querySelector("h1");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: header,
    triggerHook: 0
}).setPin(header)
.addTo(controller);

//Vid to animate
scene.on("enter", function() {
    video.play();

})
on("leave", function() {
    video.pause();
});

// const cards = document.getElementsByClassName("card");

//GSAP
const headerText = document.getElementsByClassName("headerText")
gsap.to(headerText, {
   x: "500%",
});
// let accel = 0.1;
// let scrollpos = 0;
// let delay = 0;
// scene.on("update", e => {
//     scrollpos = e.scrollPos;
//     console.log(scrollPos);
// })