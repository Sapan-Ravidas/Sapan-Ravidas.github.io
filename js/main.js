
gsap.registerPlugin(ScrollTrigger);
var t1 = gsap.timeline();

t1.from('.content', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
})
t1.from('.stagger1', {
    opacity: 0,
    y: -50,
    stagerr: .3,
    ease: Power4.easeOut,
    duration: 2
}, "-=1.5")
t1.from('.hero-design', {
    opacity: 0,
    y: 50,
    ease: Power4.easeOut,
    duration: 1
}, "-=2")

// gsap.to(".eclipse", {y: (i) => 6 * i, repeat: -1, yoyo: true, duration: 1});


gsap.from('.square-animation', {
    stagger: 0.2,
    scale: 0.1,
    duration: 2,
    ease: Back.easeOut.config(1.5)
})

gsap.from('.transition2', {
    ScrollTrigger: {
        trigger: '.transition2',
        start: "top center"
    },
    y: 50,
    opacity: 0,
    duration: 1.5,
    stagger: .3
})

gsap.from(".transition3", {
    scrollTrigger: {
        trigger: ".transition3",
        start: "top center"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .6
})

