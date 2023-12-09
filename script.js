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
let menuclick = true
menuButton.addEventListener("click", function(){
    if (menuclick == true) {
        menuButton.style.gap = `0px`;
        line1.style.rotate = `-45deg`;
        line3.style.rotate = `45deg`;
        line3.style.width = `40px`
        line2.style.display = `none`;
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
        menuslider.style.display = `none`;
        menuclick = true;
    }
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
load.from("nav",{
    opacity:0,
    duration:0.5,
    y:-50,
    delay:0.5
})
load.from("nav h2",{
    y:-50,
    duration:0.5,
    stagger:0.2,
    opacity:0
})  
load.from(".main img",{
    x: 20,
    opacity:0,
    stagger: 0.2,
    duration: 0.5,
})
load.from(".main h1, .main p, .main i, .main button", {
    x: -50,
    duration:0.5,
    stagger:0.2,
    opacity:0,
})
gsap.from(".main2 h1, .main2 h2, .main2 h3",{
    scale:0,
    delay:1,
    duration:1,
    opacity: 0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".main2",
        scroller:"body",
        start:"top 100%",
        end: "top 50%",
        scrub:5
    }
})
gsap.from(".main3 h1, .main3 .project",{
    scale:0,
    delay:1,
    duration:1,
    opacity: 0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".main3",
        scroller:"body",
        start:"top 100%",
        end: "top 50%",
        scrub:5
    }
})
gsap.from(".contact .contactbox, .contact input, .contact textarea, .contact button",{
    scale:0,
    delay:1,
    duration:1,
    opacity: 0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".contact",
        scroller:"body",
        start:"top 100%",
        end: "top 50%",
        scrub:5
    }
})
if (window.innerWidth <= 600) {
    gsap.from(".skill2 div", {
        scale: 0,
        delay: 1,
        duration: 1,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".skill",
            scroller: "body",
            start: "top 100%",
            end: "top 50%",
            scrub: 5,
        },
    });
    gsap.from(".skill1 div", {
        scale: 0,
        delay: 1,
        duration: 1,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".skill",
            scroller: "body",
            start: "top 100%",
            end: "top 50%",
            scrub: 5,
        },
    });
} else {
    gsap.from(".skill2 div", {
        scale: 0,
        delay: 1,
        duration: 1,
        x: 1000,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".skill",
            scroller: "body",
            start: "top 100%",
            end: "top 50%",
            scrub: 5,
        },
    });
    gsap.from(".skill1 div", {
        scale: 0,
        delay: 1,
        duration: 1,
        x: -1000,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".skill",
            scroller: "body",
            start: "top 100%",
            end: "top 50%",
            scrub: 5,
        },
    });
}