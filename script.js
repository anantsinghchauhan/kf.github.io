document.querySelector('#menu-open').addEventListener('click', ()=>{
    document.querySelector('#slidingNavbar').style.left = '0';
});


document.querySelector('#closeBtn').addEventListener('click', function(){
    document.querySelector('#slidingNavbar').style.left = '-100%';
});



let tl = gsap.timeline();

tl.from("nav h1", {
  opacity: 0,
  duration: 1,
  ease: "Power1.easeInOut",
  x: 30,
})
.from('.mtxt .m',{
    opacity: 0,
    ease: "Expo.easeIn",
    y: -2
},'-=.1')
.from('.mtxt .e',{
    opacity: 0,
    ease: "Expo.easeIn",
    y: 2
},'-=.5')
.from('.mtxt .n',{
    opacity: 0,
    ease: "Expo.easeIn",
    y: -2
},'-=.4')
.from('.mtxt .u',{
    opacity: 0,
    ease: "Expo.easeIn",
    y: 2
},'-=.5')
.from('.main h1',{
    opacity:0,
    duration: 1,
    ease: "Power1.easeInOut",
    y: 30,
},'-=1.5')
.from('.hero-img',{
    width: 0,
    duration: 1,
    ease: "Power1.easeInOut ",
},'-=1.5')
.from('.links a', 2 ,{
    ease: 'Expo.easeInOut',
    x: 50,
    opacity: 0
})
