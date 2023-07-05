const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl=gsap.timeline()


tl.to("#page1",{
    y:"100vh",
    scale:0.5,
    duration:0.2
})

tl.to("#page1", {
    y:"10vh",
    duration:1
})

tl.to("#page1", {
    y:"0vh",
    rotate:1080,
    scale:1,
    duration:1.5,
    delay:1
})