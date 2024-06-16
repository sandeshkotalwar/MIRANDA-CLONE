var tl = gsap.timeline()

tl.to("#page1", {
    y:"100vh",
    scale:0.5,
    duration:0,
})

tl.to("#page1",{
    y:"0vh",
    delay:1,
    duration:2,
    
})
tl.to("#page1",{
    scale:1,
    duration:2,
    
})



