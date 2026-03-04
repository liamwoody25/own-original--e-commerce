const purchaseBtn = document.querySelectorAll('.item-btn')
const burgerToggle = document.querySelector('.ham-burger');
const menuDropDown = document.querySelector('.nav-bar');

function sendProductToCart(i) {
 let output = document.querySelectorAll('#bag-output')[0];
 let result = Number(output.innerText) + 1;

 if (result > 10) {
  result = 0
 }

  output.innerText = result


  
}

// function hamBurgerMenu() {
//   if (burgerToggle.classList.toggle('active')) {
//     menuDropDown.style.display = 'flex'
//   } else {
//     menuDropDown.style.display = 'none'
//   }
// }



for (let i = 0 ; i < purchaseBtn.length ; i++ ) {
    purchaseBtn[i].addEventListener('click', function(){
    sendProductToCart(i)
  })
}


// burgerToggle.addEventListener('click', function(){
//   hamBurgerMenu()
// })