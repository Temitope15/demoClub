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



