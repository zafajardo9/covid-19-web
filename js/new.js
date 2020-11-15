//SCROLLING IN NAVBAR
//NUMBER ONE
/* 
const nav = document.querySelector(".nav");
const div = document.querySelector(".container");
const sectionOneOptions = {};
const sectionObserver = new IntersectionObserver(function(entries, sectionObserver) {
    entries.forEach(entry => {
        console.log(entry);
        if(!entry.isIntersecting){
            nav.classList.remove('nav-scrolled');
        }else {
            nav.classList.add('nav-scrolled');
        }
    })
}, sectionOneOptions);

sectionObserver.observe(div);*/
//NUMBER TWO
window.addEventListener('scroll', function() {
    let nav = document.querySelector('nav');
    let windowPosition = window.scrollY > 3;
    nav.classList.toggle('nav-scrolled', windowPosition);
})

//DATE THINGS
const dated = new Date();

const currentYear = "JoemarBuen © " + dated.getFullYear();
document.getElementById("curDate").innerHTML = currentYear;



//GSAP
const headerG = document.querySelector(".header");
// const video = header.querySelector("video");
const video = document.getElementById("intro");
const text = headerG.querySelector("h1");


//END
const highlight = document.querySelector(".highlight");
// const end = highlight.querySelector("h1");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: headerG,
    triggerHook: 0
}).setPin(headerG)
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

