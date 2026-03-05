const purchaseBtn = document.querySelectorAll('.item-btn')
const burgerToggle = document.querySelector('.ham-burger');
const cartBtn = document.querySelector('.bi-bag');
const cartOffScreen = document.querySelector('.shopping-section')
const menuDropDown = document.querySelector('.nav-bar');


// this function sends the product to the cart when the purchase btn is clicked
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

function cartDisplay() {
  if (cartBtn.classList.toggle('active')) {
    cartOffScreen.classList.toggle('active')
  } else {
    cartOffScreen.classList.toggle('active')
  }
}



for (let i = 0 ; i < purchaseBtn.length ; i++ ) {
    purchaseBtn[i].addEventListener('click', function(){
    sendProductToCart(i)
  })
}


// burgerToggle.addEventListener('click', function(){
//   hamBurgerMenu()
// })

cartBtn.addEventListener('click', function(){
  cartDisplay()
})