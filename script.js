let elem_preloader = document.getElementById("preloader");
let video_loader = document.getElementById("preloader-video");
console.log("Testing... Ok");


 setTimeout(function() {
  elem_preloader.classList.remove("preloader");
  video_loader.classList.remove("preloader-video")
 }, 5280);

 gsap.registerPlugin(ScrollTrigger);

 document.addEventListener("DOMContentLoaded", function () {
  const cards = [
    { id: "#card-1", endTranslateX: -2000, rotate: 45 },
    { id: "#card-2", endTranslateX: -1000, rotate: -30 },
    { id: "#card-3", endTranslateX: -2000, rotate: 45 },
    { id: "#card-4", endTranslateX: -1500, rotate: -30 },
  ];

  ScrollTrigger.create({
    trigger: ".wrapper-404",
    start: "top top",
    end: "+=900vh", 
    scrub: 1,
    pin: true,
    onUpdate: (self) => {
      gsap.to(".wrapper-404", {
        x: `${-350 * self.progress}vw`,
        duration: 0.5,
        ease: "power3.out",
      });
    },
  });

  cards.forEach((card) => {
    ScrollTrigger.create({
      trigger: "card.id",
      start: "top top",
      end: "+=1200vh",
      scrub: 1,
      onUpdate: (self) => {
        gsap.to(card.id, {
          x: `${card.endTranslateX * self.progress}px`,
          rotate: `${card.rotate * self.progress * 2}`,
          duration: 0.5,
          ease: "power3.out",
        })
      }
    })
  })
 });

 
 const body = document.body,
 scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
 height = scrollWrap.getBoundingClientRect().height - 1,
 speed = 0.1;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
 offset += (window.pageYOffset - offset) * speed;

 var scroll = "translateY(-" + offset + "px) translateZ(0)";
 scrollWrap.style.transform = scroll;

 callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();
const content = document.getElementById("section");
let currentPos = window.pageYOffset;

const callDistort = function () {
 const newPos = window.pageYOffset;
 const diff = newPos - currentPos;
 const speed = diff * 0.35;

 content.style.transform = "skewY(" + speed + "deg)";
 currentPos = newPos;
 requestAnimationFrame(callDistort);
};

callDistort();