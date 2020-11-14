// new fullpage('#fullpage', {
//     autoScrolling: true,
//     navigation: true
// })
gsap.registerPlugin(ScrollTrigger);
gsap.from('.headerText', {opacity: 0, duration: 2, y: 50, ease: 'Power2.easeInOut'});


gsap.from('.preventTips', {
    scrollTrigger: {
        trigger: ".preventTips",
        // start: "top bottom",
        toggleActions: "restart pause pause reset"
    },
    x: -500,
    duration: 2,
    opacity: 0
})

gsap.from('.hightlightPic', {
    scrollTrigger: {
        trigger: ".preventTips",
        start: "top top",
        toggleActions: "restart pause pause reset",
        // markers: true
    },
    x: -500,
    opacity: 0,
    duration: 3
})

