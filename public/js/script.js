const purchaseBtn = document.querySelectorAll('.item-btn')
const burgerToggle = document.querySelector('.ham-burger');
const cartBtn = document.querySelector('.bi-bag');
const cartOffScreen = document.querySelector('.shopping-section')
const bagContainer = document.querySelector('.cart-content');
const menuDropDown = document.querySelector('.nav-bar');


// 
const bagProducts = [
  {
    name: 'macbook',
    category: 'laptop',
    price: 899,
    Image: './public/assets/images/pexels-tuurt-macbook-jpg.jpg',
  },
  {
    name:'android',
    category:'smartwatch',
    price: 399,
    Image: './public/assets/images/rachit-tank-2cFZ_FB08U-smart-watch.jpg'
  },
  {
    name:'iphone',
    category: 'smartphone',
    price: 699,
    Image: './public/assets/images/E9965BCB-3B0C-414F-9F91-smartphone.jpg'
  },
  {
    name: 'headset',
    category: 'accessory',
    price: 250,
    Image: '/public/assets/images/pexels-cottonbro-headphones-jpg.jpg'
  },
  {
    name: 'ipad',
    category: 'tablet',
    price: 499,
    Image: './public/assets/images/pexels-joshsorenson-tablet.png'
  },
]


// this function sends the product to the cart when the purchase btn is clicked

function sendProductToBag(bagProduct,i){
  const product = bagProducts[i]
  const output = document.querySelector('.item-output');
  let displayQuantity = Number(output.innerText) + 1;

  if (displayQuantity > 10) {
    displayQuantity = 0;
  }

  output.innerText = displayQuantity
}

// this function sends the product to the cart when the purchase btn is clicked



bagProducts.forEach(function(item){

  // these code is for creating the card product 
  const cardProduct = document.createElement('article');
  cardProduct.classList.add('product-item')

  const cardImg = document.createElement('img');
  cardImg.classList.add('card-img')
  cardImg.alt = 'card image'
  cardImg.src = item.Image;

  // these code is for creating the card product 



  // these codes are for the bag item contents

  const productContent = document.createElement('div');
  productContent.classList.add('product-content-container');

  const productName = document.createElement('h3');
  productName.textContent = item.name;

  const subTitle = document.createElement('p');
  subTitle.textContent = item.category;

  const cardPrice = document.createElement('span');
  cardPrice.textContent = `$${item.price}`

  // these codes are for the bag item contents



  // these codes create the quantity button

  const quantityContent = document.createElement('div');
  quantityContent.classList.add('quantity-btn-content');

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-button')
  removeBtn.innerHTML = '<i class="bi bi-dash-square"></i>';

  const quantityOutput = document.createElement('span');
  quantityOutput.classList.add('item-output');
  quantityOutput.innerHTML = '0';

  const addtBtn = document.createElement('button');
  addtBtn.classList.add('insert-btn');
  addtBtn.innerHTML = '<i class="bi bi-plus-square"></i>'


// this eventlistener code is for when the user wants to remove a product from the bag

  removeBtn.addEventListener('click', function(){
    
    const output = document.querySelector('.item-output');
    let displayQuantity = Number(output.innerText) - 1;
    
    if (displayQuantity < 0) {
      displayQuantity = 0;
    }

    output.innerText = displayQuantity;

    if (displayQuantity === 0) {
      cardProduct.remove(cardImg, productContent, quantityContent)
    }
  })

  // this eventlistener code is for when the user wants to remove a product from the bag


  
 // this eventlistener code is for when the user wants to add a product to the bag

  addtBtn.addEventListener('click', function(){
    const output = document.querySelector('.item-output');
    let displayQuantity = Number(output.innerText) + 1

    if (displayQuantity > 10 ) {
      displayQuantity = 0;
    }

    output.innerText = displayQuantity

    
  })

   // this eventlistener code is for when the user wants to add a product to the bag

  // these codes create the quantity button






  cardProduct.append(cardImg, productContent, quantityContent)
  productContent.append(productName, subTitle, cardPrice)
  quantityContent.append(removeBtn, quantityOutput, addtBtn)
  bagContainer.append(cardProduct)
})





   

 

   





 


    


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



for (let i = 0; i < purchaseBtn.length; i++) {
  purchaseBtn[i].addEventListener('click', function(){
    sendProductToBag(bagProducts[i],[i])
  })
}


 

 


// burgerToggle.addEventListener('click', function(){
//   hamBurgerMenu()
// })

cartBtn.addEventListener('click', function(){
  cartDisplay()
})