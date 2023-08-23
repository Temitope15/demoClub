const menuBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const dropdownContent =  document.getElementById('menu-links')
const dropdownParent = document.getElementsByClassName('dropdown')


// logic : when the menu is displayed, onclick, hide menu, show close, show dropdown-content, else go back to initial stage

const openDropdown = ()=>{
    if(menuBtn){
       menuBtn.style.display = 'none'
       closeBtn.style.display ='block'
       dropdownContent.style.display ='block'
      
    }} 
    const closeDropdown = () => {
        menuBtn.style.display = 'block'
       closeBtn.style.display = 'none'
       dropdownContent.style.display = 'none'
    }



// for  the changing of color and  text
const topColor = document.querySelector('.top');
const heroText =  document.querySelector('.hero-text-p');
const spanText = document.querySelector('.p-span');

// array
const colors = ["#0B0129", "#0B131D"];
const foreText = ["You dream it,", "Your needs,"];
const lastText = ["we provide it!", "our priority!"];

let index = 0;

// create a function to change the contents

function changeContent(){
   topColor.style.transition = "backgroundColor 0.8s ease-in-out";
   topColor.style.backgroundColor =  colors[index];
  
   heroText.textContent = foreText[index];
   spanText.textContent = lastText[index];

   index = (index + 1) % colors.length;
}

setInterval(changeContent, 3000)

//vertical animation about us section

const aboutContainer = document.querySelector('.about-container');;

function animateOnScroll(){
   const windowHeight = window.innerHeight;
   const aboutTop = aboutContainer.getBoundingClientRect().top;

   if (aboutTop < windowHeight){
  aboutContainer.classList.add("animate");
   }
}
window.addEventListener("scroll", animateOnScroll);

//horizontal animation
const serviceItems = document.querySelectorAll(".service-item")

function horizontalAnimateOnScroll(){
   const cardHeight = window.innerHeight

   serviceItems.forEach((item)=>{
      const itemTop = item.getBoundingClientRect().top;
      if(itemTop < cardHeight){
         item.classList.add("animate")
      }
   })
}
window.addEventListener("scroll", horizontalAnimateOnScroll);

// gallery section
// const sliderContainer = document.querySelector(".slider-container");
// const images = document.querySelectorAll(".slider-container img");
// const indicators = document.querySelectorAll(".indicator");
// const imageWidth = images[0].clientWidth;
// let currentIndex = 0;

// function updateSliderPosition() {
//   sliderContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
// }

// function updateIndicators() {
//   indicators.forEach((indicator, index) => {
//     indicator.classList.toggle("active", index === currentIndex);
//   });
// }

// function slideTo(index) {
//   currentIndex = index;
//   updateSliderPosition();
//   updateIndicators();
// }

// function slideNext() {
//   currentIndex = (currentIndex + 1) % images.length;
//   updateSliderPosition();
//   updateIndicators();
// }

// indicators.forEach((indicator, index) => {
//   indicator.addEventListener("click", () => {
//     slideTo(index);
//   });
// });

// setInterval(slideNext, 3000); // Slide every 3 seconds

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}