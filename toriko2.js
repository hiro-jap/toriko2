gsap.defaults({ease:"none",duration:4});
gsap.timeline({
    scrollTrigger:{
        trigger:".toriko",
        start:"-100 end",
        // markers:true,
    }
})
.from(".toriko",{xPercent:-100,opacity:0})
.from(".comment1",{xPercent:100,opacity:0})
  .from(".komatu",{xPercent:100,opacity:0})
  .from(".img2",{xPercent:-100,opacity:0})
  .from(".rin",{yPercent:-100,opacity:0});
