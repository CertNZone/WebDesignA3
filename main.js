// Getting elements
const overviewSwiperEl = document.querySelector(".overviewSwiper")
const hardwareSwiperEl = document.querySelector(".hardwareSwiper")
const specsSwiperEl = document.querySelector(".specsSwiper")
const softwareSwiperEl = document.querySelector(".softwareSwiper")
const gallerySwiperEl = document.querySelector(".gallerySwiper")

const overviewBtn = document.querySelector(".overviewBtn")
const hardwareBtn = document.querySelector(".hardwareBtn")
const specsBtn = document.querySelector(".specsBtn")
const softwareBtn = document.querySelector(".softwareBtn")
const galleryBtn = document.querySelector(".galleryBtn")

const content = document.querySelector(".content")

const menu = document.querySelector(".menu")
const smallMenu = document.querySelector(".smallMenu")

const loading = document.querySelector(".loading")


// Initialising swipers
var overviewSwiper = new Swiper(".overviewSwiper", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  mousewheel: true,
});

var hardwareSwiper = new Swiper(".hardwareSwiper", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  mousewheel: true,
});

var specsSwiper = new Swiper(".specsSwiper", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  mousewheel: true,
});

var softwareSwiper = new Swiper(".softwareSwiper", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  mousewheel: true,
});

var gallerySwiper = new Swiper(".gallerySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

let contWidth = content.offsetWidth;
let contMove = contWidth * 2;

// Setup gsap timeline for changing content
var hideTL = gsap.timeline();
hideTL.to(".content", {x: contMove, duration: 1})
      .to(".overviewSwiper", {opacity: 0, duration: 1}, "-=1")
      .to(".hardwareSwiper", {opacity: 0, duration: 1}, "-=1")
      .to(".specsSwiper", {opacity: 0, duration: 1}, "-=1")
      .to(".softwareSwiper", {opacity: 0, duration: 1}, "-=1")
      .to(".gallerySwiper", {opacity: 0, duration: 1}, "-=1")
      .to(".content", {x: 0, duration: 1})

// Event listeners to change content
overviewBtn.addEventListener("click", ()=> {
  hideTL.restart()
  gsap.to(".overviewSwiper", {opacity: 1, duration: 1}, "+=0.5")
  makeUsable(overviewSwiperEl)
})

hardwareBtn.addEventListener("click", ()=> {
  hideTL.restart()
  gsap.to(".hardwareSwiper", {opacity: 1, duration: 1}, "+=0.5")
  makeUsable(hardwareSwiperEl)
})

specsBtn.addEventListener("click", ()=> {
  hideTL.restart()
  gsap.to(".specsSwiper", {opacity: 1, duration: 1}, "+=0.5")
  makeUsable(specsSwiperEl)
})

softwareBtn.addEventListener("click", ()=> {
  hideTL.restart()
  gsap.to(".softwareSwiper", {opacity: 1, duration: 1}, "+=0.5")
  makeUsable(softwareSwiperEl)
})

galleryBtn.addEventListener("click", ()=> {
  hideTL.restart()
  gsap.to(".gallerySwiper", {opacity: 1, duration: 1}, "+=0.5")
  makeUsable(gallerySwiperEl)
})


// Event listener for unhiding menu
smallMenu.addEventListener("click", ()=> {
  menu.classList.toggle("menuPosition")
})

// Function to initialise all content
function intialise() {
  hideTL.restart()
  gsap.to(".overviewSwiper", {opacity: 1, duration: 1})
  makeUsable(overviewSwiperEl)

  gsap.to(".loading", {opacity: 0, duration: 1}, "+=3")

  removeLoading()
}

intialise()

// Brings the relevent content to the top of the conent stack
function makeUsable( zUp ) {
  overviewSwiperEl.classList.remove("top")
  hardwareSwiperEl.classList.remove("top")
  specsSwiperEl.classList.remove("top")
  softwareSwiperEl.classList.remove("top")
  gallerySwiperEl.classList.remove("top")

  zUp.classList.add("top")
}

function removeLoading() {
  setTimeout( function() {
  loading.classList.add("removed")
  }, 6000)  
}

loading.addEventListener("click", ()=> {
  loading.classList.add("removed")
})