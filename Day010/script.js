//Gsap

// gsap.to(".box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"grey"

// }) 

// gsap.from(".box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue"

// }) 

var t1=gsap.timeline()

t1.to(".box1",{
    x:1000,
    duration:2,
    rotate:360,
    backgroundColor:"red"
})
t1.to(".box2",{
    x:1000,
    duration:2,
    rotate:360,
     backgroundColor:"grey"
})
t1.to(".box3",{
    x:1000,
    duration:2,
    rotate:360,
     backgroundColor:"black"
})