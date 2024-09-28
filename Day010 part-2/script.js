
var t1=gsap.timeline()
t1.from(".navbar h2",{
    y:-50,
    opacity:0,
    delay:0.6,
    duration:1,
    stagger:0.3
})
t1.from(".main h1",{
    x:-500,
    opacity:0,
    // delay:0.6,
    duration:0.7,
    stagger:0.4
})
t1.from("img",{
    x:200,
    opacity:0,
    stagger:0.3
})