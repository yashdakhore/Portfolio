var tl = gsap.timeline()

tl.from(".mail-section h1", {
    x: -150,      // smaller slide distance for just the h1
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
})
tl.from(".right-nav a", {
    y:100,
    duration:.5,
    delay:1,
    stagger:.5,
    opacity:0,
    clearProps: "all"
})
gsap.from(".main-text h1", {
    y:500,
    duration:.5,
    delay:1,
    stagger:.5,
    opacity:0,
    clearProps: "all"
})