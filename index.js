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
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// slider section for members
const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function scrollSlider(index) {
    sliderItems.forEach(item => {
        item.style.transform = `translateX(-${index * 100}%)`;
    });
    updateButtonsVisibility();
}

function updateButtonsVisibility() {
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === sliderItems.length - 1 ? 'none' : 'block';
}

prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    scrollSlider(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, sliderItems.length - 1);
    scrollSlider(currentIndex);
});

// Initialize slider
scrollSlider(currentIndex);
updateButtonsVisibility();

// the email via mailto section
document.getElementById('emailLink').addEventListener("click", function(){
   var emailBody = encodeURIComponent(document.getElementById('emailBody').value);
   var mailtoLink = "mailto:blessedbrothers21@yahoo.com?subject=Request%20for%20clarity&body=" + emailBody;
   window.location.href = mailtoLink;
})
