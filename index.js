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
const images = document.querySelectorAll('.slider img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const memberName = document.getElementById('memberName');
const nameCard = document.querySelector('.name-card');

let currentIndex = 0;

// Calculate the total width of all images
let totalWidth = 0;
images.forEach((image) => {
    totalWidth += image.width;
});

function scrollSlider() {
    const scrollAmount = -currentIndex * (totalWidth / images.length);
    slider.style.transform = `translateX(${scrollAmount}px)`;
    const currentImage = images[currentIndex];
    memberName.textContent = currentImage.getAttribute('data-name');
}

function showNameCard() {
    nameCard.style.display = 'block';
}

function hideNameCard() {
    nameCard.style.display = 'none';
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    scrollSlider();
    showNameCard();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    scrollSlider();
    showNameCard();
});

slider.addEventListener('mouseenter', showNameCard);
slider.addEventListener('mouseleave', hideNameCard);

// Adjust the scroll speed (in milliseconds)
const scrollInterval = 3000;

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    scrollSlider();
}, scrollInterval);

// Initial setup
scrollSlider();
showNameCard();
// the email via mailto section
document.getElementById('emailLink').addEventListener("click", function(){
   var emailBody = encodeURIComponent(document.getElementById('emailBody').value);
   var mailtoLink = "mailto:blessedbrothers21@yahoo.com?subject=Request%20for%20clarity&body=" + emailBody;
   window.location.href = mailtoLink;
})
