const menuBtn = document.querySelector('.top-menu i')
const sideBar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.side-logo i')
const searchMobileBtn = document.querySelector('.top-icon-mobile span')
const searchMobile = document.querySelector('.top-icon-mobile')
const title = document.querySelector('.top-menu span')

menuBtn.addEventListener('click',function(){
    sideBar.classList.toggle('enter')
})
closeBtn.addEventListener('click',function(){
    sideBar.classList.remove('enter')
})
searchMobileBtn.addEventListener('click',function(){
  title.classList.toggle('top-menu-display')
  searchMobile.classList.toggle('slide')
})

// trigger search function on enter key press
var input = document.querySelector(".top-icon input");
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
   return alert("hello")
  }
});
var input = document.querySelector(".top-icon-mobile input");
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
   return alert("hello")
  }
});

// swiper js for testimonial section
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 32,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".cards", {
    effect: "cards",
    grabCursor: true,
  });
