let menuButton = document.querySelector(".menubutton");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let menuslider = document.querySelector(".menuslider");
let a = document.querySelector("a");
let heading1 = document.querySelector(".heading1");
let heading2= document.querySelector(".heading2");
let heading3= document.querySelector(".heading3");
let heading4= document.querySelector(".heading4");
let about = document.querySelector("#aboutlink");
let home= document.querySelector("#home");
let project = document.querySelector(".projects");
let contact = document.querySelector("#contactlink");
let submit = document.querySelector(".submit");
let submitbtn = document.querySelector(".submitbtn");
let nameinput = document.querySelector(".nameinput");
let messageinput = document.querySelector("#messageinput");
let menuclick = true
menuButton.addEventListener("click", function(){
    if (menuclick == true) {
        menuButton.style.gap = `0px`;
        line1.style.rotate = `-45deg`;
        line3.style.rotate = `45deg`;
        line3.style.width = `40px`
        line2.style.display = `none`;
        line1.style.backgroundColor = `#C1A7EE`
        line3.style.backgroundColor = `#C1A7EE`
        menuslider.style.display = `flex`;
        gsap.from(".menuslider h2",{
            duration:0.5,
            x:"500px",
            stagger:0.2,
        })
        menuclick = false;
    } else {
        menuButton.style.gap = `5px`;
        line1.style.rotate = `0deg`;
        line3.style.rotate = `0deg`;
        line3.style.width = `20px`
        line2.style.display = `block`;
        line1.style.backgroundColor = `black`
        line3.style.backgroundColor = `black`
        menuslider.style.display = `none`;
        menuclick = true;
    }
})
submit.addEventListener("click", function(){
    let namevalue = nameinput.value;
    let messagevalue = messageinput.value;
    submit.href = `mailto:shaiksharzil@gmail.com?subject=${namevalue}&body=${messagevalue}`
})
home.addEventListener("mouseover", function(){
    heading1.style.color ="#C1A7EE"
})
home.addEventListener("mouseout", function(){
    heading1.style.color ="black"
})
about.addEventListener("mouseover", function(){
    heading2.style.color ="#C1A7EE"
})
about.addEventListener("mouseout", function(){
    heading2.style.color ="black"
})
project.addEventListener("mouseover", function(){
    heading3.style.color ="#C1A7EE"
})
project.addEventListener("mouseout", function(){
    heading3.style.color ="black"
})
contact.addEventListener("mouseover", function(){
    heading4.style.color ="#C1A7EE"
})
contact.addEventListener("mouseout", function(){
    heading4.style.color ="black"
})
heading1.addEventListener("mouseover", function(){
    heading1.style.color ="#C1A7EE"
})
heading1.addEventListener("mouseout", function(){
    heading1.style.color ="black"
})
heading2.addEventListener("mouseover", function(){
    heading2.style.color ="#C1A7EE"
})
heading2.addEventListener("mouseout", function(){
    heading2.style.color ="black"
})
heading3.addEventListener("mouseover", function(){
    heading3.style.color ="#C1A7EE"
})
heading3.addEventListener("mouseout", function(){
    heading3.style.color ="black"
})
heading4.addEventListener("mouseover", function(){
    heading4.style.color ="#C1A7EE"
})
heading4.addEventListener("mouseout", function(){
    heading4.style.color ="black"
})
gsap.to("nav", {
    backgroundColor:"transparent",
    height:"70px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:5
    }
})
let load = gsap.timeline();
load.to(".load",{
    duration:1,
    delay:2,
    scale:0
})
load.from("nav",{
    opacity:0,
    duration:0.5,
    y:-50,
})
load.from("nav h2",{
    y:-50,
    duration:0.5,
    stagger:0.2,
    opacity:0,
})  
load.from(".main img",{
    x: 20,
    opacity:0,
    duration: 0.5,
})
load.from(".main h1, .main p, .main i, .main button", {
    x: -50,
    duration:0.5,
    stagger:0.2,
    opacity:0,
})
if (window.innerWidth >= 600) {
gsap.from(".main2 h1, .about h2, .about h3",{
    y: 100,
    duration:0.5,
    opacity: 0,
    scrollTrigger:{
        trigger:".main2",
        scroller:"body",
        start:"top 100%",
        end: "top 50%",
        scrub:5
    }
});
gsap.from(".skill2 div", {
    duration: 0.5,
    x: 500,
    opacity: 0,
    stagger:0.2,
    scrollTrigger: {
        trigger: ".skill",
        scroller: "body",
        start: "top 100%",
        end: "top 50%",
        scrub: 5,
    },
});
gsap.from(".skill1 div", {
    duration: 0.5,
    x: -500,
    opacity: 0,
    stagger:0.2,
    scrollTrigger: {
        trigger: ".skill",
        scroller: "body",
        start: "top 100%",
        end: "top 50%",
        scrub: 5,
    },
});
gsap.from(".main3 h1, .main3 .project",{
    duration:0.5,
    y:100,
    opacity: 0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".main3",
        scroller:"body",
        start:"top 100%",
        end: "top 50%",
        scrub:5
    }
});
gsap.from(".contact h1",{
    duration:0.5,
    y:100,
    opacity: 0,
    scrollTrigger:{
        trigger:".contact",
        scroller:"body",
        start:"top 100%",
        end: "top 50%",
        scrub:5
    }
});
gsap.from(".contactbox",{
    duration:0.5,
    x:-100,
    opacity: 0,
    scrollTrigger:{
        trigger:".contact",
        scroller:"body",
        start:"top 100%",
        end: "top 50%",
        scrub:5
    }
});
gsap.from(".contact input, .contact textarea, .contact button",{
    duration:0.5,
    x:100,
    opacity: 0,
    scrollTrigger:{
        trigger:".contact",
        scroller:"body",
        start:"top 100%",
        end: "top 50%",
        scrub:5
    }
});
}
