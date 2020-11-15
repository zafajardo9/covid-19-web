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
        toggleActions: "restart pause pause play"
    },
    x: -500,
    duration: 2,
    opacity: 0
})

gsap.from('.hightlightPic', {
    scrollTrigger: {
        trigger: ".hightlightPic",
        toggleActions: "restart pause restart play",
        // markers: true
    },
    x: -500,
    opacity: 0,
    duration: 2
})

gsap.from('.firstInfo', {
    scrollTrigger: {
        trigger: ".firstInfo",
        toggleActions: "restart pause pause play",
        // markers: true
    },
    x: -500,
    opacity: 0,
    duration: 2
})
gsap.from('.secondInfo', {
    scrollTrigger: {
        trigger: ".firstInfo",
        toggleActions: "restart pause pause play",
        // markers: true
    },
    y: 500,
    opacity: 0,
    duration: 2
})

gsap.from('.thirdInfo', {
    scrollTrigger: {
        trigger: ".firstInfo",
        toggleActions: "restart pause pause play",
        // markers: true
    },
    x: 500,
    opacity: 0,
    duration: 2
})

gsap.from('.infoSVG', {
    scrollTrigger: {
        trigger: ".firstInfo",
        toggleActions: "restart pause pause play",
        // markers: true
    },
    y: 500,
    opacity: 0,
    duration: 2
})









