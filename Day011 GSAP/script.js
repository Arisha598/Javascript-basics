gsap.from(".page1 .cricle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720
})
gsap.from(".page2 .cricle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720,
    scrollTrigger:{
        trigger:".page2 .cricle",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:true
    }
})
gsap.from(".page3 .cricle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720,
    scrollTrigger:{
        trigger:".page3 .cricle",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:true
    }
})