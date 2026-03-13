const purchaseBtn = document.querySelectorAll('.item-btn')
const burgerToggle = document.querySelector('.ham-burger');
const cartBtn = document.querySelector('.bi-bag');
const cartOffScreen = document.querySelector('.shopping-section')
const menuDropDown = document.querySelector('.nav-bar');


// 
const bagProducts = [
  {
    Name: 'macbook',
    category: 'laptop',
    price: 899,
  },
  {
    name:'android',
    category:'smartwatch',
    price: 399,
  },
  {
    name:'iphone',
    category: 'smartphone',
    price: 699,
  },
  {
    name: 'headphones',
    category: 'accessory',
    price: 250,
  },
  {
    name: 'ipad',
    category: 'tablet',
    price: 499,
  }
]


// this function sends the product to the cart when the purchase btn is clicked
function sendProductToCart(i) {
 let output = document.querySelectorAll('#bag-output')[0];
 let result = Number(output.innerText) + 1;

 if (result > 10) {
  result = 0
 }

  output.innerText = result
}



function removeProductFomBag() {
  console.log('this function works')
}

function updateBag(){
  const bagContainer = document.querySelector('.cart-content');

  bagProducts.forEach(function(item){

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.src = './public/assets/images/pexels-morningtrain-laptop.png'
    productImg.alt = 'image of laptop';

    const productContent = document.createElement('div');
    productContent.classList.add('product-content-container');


    const productName = document.createElement('h3');
    productName.textContent = item.name;

    const cardPrice = document.createElement('span');
    cardPrice.textContent = `${item.price}`

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.innerHTML = '<i class="bi bi-x"></i>'

   
  })
  
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
    updateBag(i)
  })
}


// burgerToggle.addEventListener('click', function(){
//   hamBurgerMenu()
// })

cartBtn.addEventListener('click', function(){
  cartDisplay()
})