const burgerToggle = document.querySelector('.ham-burger');
const menuDropDown = document.querySelector('.nav-bar');

function hamBurgerMenu() {
  if (burgerToggle.classList.toggle('active')) {
    menuDropDown.style.display = 'flex'
  } else {
    menuDropDown.style.display = 'none'
  }
}


burgerToggle.addEventListener('click', function(){
  hamBurgerMenu()
})