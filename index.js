
const menuBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const dropdownContent = document.getElementById('menu-links')
const dropdownParent = document.getElementsByClassName('dropdown')[0]

//members
const MEMBERS = [
   {
      memberName: "Lawrence Akinsunmade",
      memberpics: "./assets/Blessed_brothers/lawrence_akinsunmade.jpg",
      position: "President",
      email: "sunmadeonline@gmail.com",
      tel: "+18045025865",
   },
   {
      memberName: "Adeduwon Adeyemi",
      memberpics: "./assets/Blessed_brothers/adeduwon_adeyemi.jpg",
   },
   {
      memberName: "Adeleye Adejayan",
      memberpics: "./assets/Blessed_brothers/adeleye_adejayan.jpg",
   },
   {
      memberName: "Babatope Ojo",
      memberpics: "./assets/Blessed_brothers/babatope_ojo.jpg",
   },
   {
      memberName: "Bayo Akinrolabu",
      memberpics: "./assets/Blessed_brothers/bayo_akinrolabu.jpg",
   },
   {
      memberName: "Ebenezer Akinyemiju",
      memberpics: "./assets/Blessed_brothers/ebenezer_akinyemiju.jpg",
   },
   {
      memberName: "Idowu Akinbobola",
      memberpics: "./assets/Blessed_brothers/idowu_akinbobola.jpg",
   },
   {
      memberName: "Dada Akinsuroju",
      memberpics: "./assets/Blessed_brothers/dada_akinsuroju.jpg",
   },
   {
      memberName: "Ebenezer Akinyemiju",
      memberpics: "./assets/Blessed_brothers/ebenezer_akinyemiju.jpg",
   },
   {
      memberName: "Idowu Akinbobola",
      memberpics: "./assets/Blessed_brothers/idowu_akinbobola.jpg",
   },
   {
      memberName: "Kehinde Akinseye",
      memberpics: "./assets/Blessed_brothers/kehinde_akinseye.jpg",
      position: "FINANCIAL SECRETARY",
      email: "kehindeakinseye@rocketmail.com",
      tel: "+13174061877",
   },
   {
      memberName: "Roland Akinyosoye",
      memberpics: "./assets/Blessed_brothers/roland_akinyosoye.jpg",
      position: "PRO",
      email: "rowlandindcarea@yahoo.com",
      tel: "+13014185433",
   },
   {
      memberName: "Sina Aderinwoye",
      memberpics: "./assets/Blessed_brothers/sina_aderinwoye.jpg",
   },
   {
      memberName: "Victor Abayomi",
      memberpics: "./assets/Blessed_brothers/victor_abayomi.jpg",
      position: "GENERAL SECRETARY",
      email: "yomvic@yahoo.com",
      tel: "+13176030578",
   },
   {
      memberName: "Victor Adenusi",
      memberpics: "./assets/Blessed_brothers/victor_adenusi.jpg",
   },

]
//leaders
const LEADERS = MEMBERS.filter(member => member.position && member.email && member.tel)

// logic : when the menu is displayed, onclick, hide menu, show close, show dropdown-content, else go back to initial stage

const openDropdown = () => {
   if (menuBtn) {
      menuBtn.style.display = 'none'
      closeBtn.style.display = 'block'
      dropdownContent.style.display = 'block'

   }
}
const closeDropdown = () => {
   menuBtn.style.display = 'block'
   closeBtn.style.display = 'none'
   dropdownContent.style.display = 'none'
}
dropdownParent.addEventListener('click', () => {
   const isDropdownVisible = dropdownContent.style.display === 'block'
   if (isDropdownVisible) {
      closeDropdown()
   } else {
      openDropdown()
   }
})
/**
 * Data section
 * - navLinks
 * - core values
 * - members
 * - leaders
 * - gallery
 */

//navLinks
const links = [
   { text: "Home", link: "#" },
   { text: "About", link: "#about" },
   { text: "Services", link: "#services" },
   { text: "Contact us", link: "#contact" }
];
const linkParent = document.getElementById("navLinks")
links.forEach(link => {
   const linkText = document.createElement('li')
   const anchor = document.createElement('a')
   anchor.href = link.link
   anchor.textContent = link.text
   linkText.appendChild(anchor)
   linkParent.appendChild(linkText)
})

//core values
const values = ["Integrity", "Discipline", "Innovation", "Loyalty", "Accountability"]
const valueContainer = document.getElementById("value-card-parent")
values.forEach(value => {
   const valueCard = document.createElement('div')
   valueCard.classList.add('value-card')
   valueCard.textContent = value
   valueContainer.appendChild(valueCard)
})

//leaders
const leaderContainer = document.getElementById('leaders_container')
LEADERS.forEach(leader => {
   const leaderCard = document.createElement('div')
   leaderCard.classList.add('team', 'card','service-item')
//leader position card (img + position)
   const position = document.createElement('div')
   position.classList.add('position')
//leader img
   const leaderImg = document.createElement('img')
   leaderImg.src = leader.memberpics
   // leader info section
   const leaderInfo = document.createElement('div')
   leaderInfo.classList.add('team-info')
   const leaderName = document.createElement('h4')
   leaderName.textContent = leader.memberName
   const leaderPosition = document.createElement('p')
   leaderPosition.textContent = leader.position

   leaderInfo.appendChild(leaderName)
   leaderInfo.appendChild(leaderPosition)

   position.appendChild(leaderImg)
   position.appendChild(leaderInfo)

   //socials section
   const socialLinks = document.createElement('div')
   socialLinks.classList.add('socials')
   //anchor tags
   //email
   const email = document.createElement('a')
   email.href = `mailto:${leader.email}`
   const icon1 = document.createElement('i')
   icon1.classList.add('material-icons')
   icon1.textContent = 'email'
   email.textContent = leader.email
   email.appendChild(icon1)
   //tel
   const tel = document.createElement('a')
   tel.href = `tel:${leader.tel}`
   const icon2 = document.createElement('i')
   icon2.classList.add('material-icons')
   icon1.textContent = 'call'
   tel.textContent = leader.tel
   tel.appendChild(icon2)

   socialLinks.appendChild(email)
   socialLinks.appendChild(tel)
   //bringing everything together
   leaderCard.appendChild(position)
   leaderCard.appendChild(socialLinks)
   leaderContainer.appendChild(leaderCard)
   console.log(leader.memberName)
})

//members

const slider = document.getElementById('slider')


MEMBERS.forEach((member, index) => {
   const slide = document.createElement('div')
   slide.classList.add('slider-item')

   const slideImg = document.createElement('img')

   slideImg.src = member.memberpics
   slideImg.alt = `member ${index + 1}`

   const memberName = document.createElement('div')
   memberName.classList.add('name-card')
   memberName.textContent = member.memberName

   slide.appendChild(slideImg)
   slide.appendChild(memberName)
   slider.appendChild(slide)

})

// for  the changing of color and  text
const topColor = document.querySelector('.top');
const heroText = document.querySelector('.hero-text-p');
const spanText = document.querySelector('.p-span');

// header color and texts data
const colors = ["#0B0129", "#0B131D"];
const foreText = ["You dream it,", "Your needs,"];
const lastText = ["we provide it!", "our priority!"];

let index = 0;

// a function to change the contents

function changeContent() {
   topColor.style.transition = "backgroundColor 0.8s ease-in-out";
   topColor.style.backgroundColor = colors[index];

   heroText.textContent = foreText[index];
   spanText.textContent = lastText[index];

   index = (index + 1) % colors.length;
}

setInterval(changeContent, 3000)

//vertical animation about us section

const aboutContainer = document.querySelector('.about-container');;

function animateOnScroll() {
   const windowHeight = window.innerHeight;
   const aboutTop = aboutContainer.getBoundingClientRect().top;

   if (aboutTop < windowHeight) {
      aboutContainer.classList.add("animate");
   }
}
window.addEventListener("scroll", animateOnScroll);

//horizontal animation
const serviceItems = document.querySelectorAll(".service-item")

function horizontalAnimateOnScroll() {
   const cardHeight = window.innerHeight

   serviceItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < cardHeight) {
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
   if (slideIndex > slides.length) { slideIndex = 1 }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " active";
   setTimeout(showSlides, 3000); // Change image every 3 seconds
}


// the email via mailto section
document.getElementById('emailLink').addEventListener("click", function () {
   var emailBody = encodeURIComponent(document.getElementById('emailBody').value);
   var mailtoLink = "mailto:blessedbrothers21@yahoo.com?subject=Request%20for%20clarity&body=" + emailBody;
   window.location.href = mailtoLink;
})
