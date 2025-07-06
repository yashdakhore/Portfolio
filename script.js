var tl = gsap.timeline()

tl.from(".mail-section h1",{
    x:-500,
    delay:1,
    duration:.5,
    opacity:0,
})
tl.from(".right-nav a", {
    y:100,
    duration:.5,
    delay:1,
    stagger:.5,
    opacity:0,
})
gsap.from(".main-text h1", {
    y:500,
    duration:.5,
    delay:1,
    stagger:.5,
    opacity:0,
})