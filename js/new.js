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
scene.on("leave", function() {
    video.pause();
});

// const cards = document.getElementsByClassName("card");



//POPUP
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
// asdfasdfasdf
var emailInput = document.getElementById("emailInput");
var emailNews = document.getElementById("emailNews");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  emailNews.innerHTML = emailInput;
}

span.onclick = function() {
  modal.style.display = "none";
  
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}