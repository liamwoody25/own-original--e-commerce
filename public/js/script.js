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
    name: 'headphones',
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
function sendProductToCart(i) {
 let output = document.querySelector('#bag-output');
 let result = Number(output.innerText) + 1;

 if (result > 10) {
  result = 0
 }

  output.innerText = result

  



  

    bagContainer.innerHTML= ''

  bagProducts.forEach(function(product){

    // this code is to create the product for the bag
      const cardProduct = document.createElement('article');
      cardProduct.classList.add('product-item');

      const cardImg = document.createElement('img');
      cardImg.classList.add('product-img');
      cardImg.src = product.Image;

    // this code is to create the product for the bag


    // these codes are for the bag item contents

      const productContent = document.createElement('div');
      productContent.classList.add('product-content-container');

      const productName = document.createElement('h3');
      productName.textContent = product.name;

      const subTitle = document.createElement('p');
      subTitle.textContent = product.category;

      const cardPrice = document.createElement('span');
      cardPrice.textContent = `$${product.price}`;

    // these codes are for the bag item contents
   

   

   

    cardProduct.append(cardImg, productContent)
    productContent.append(productName, subTitle, cardPrice);
    bagContainer.append(cardProduct)
  })
  }



function removeProductFromBag() {
  let output = document.querySelector('#bag-output');
  let result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0
  }

  
  output.innerText = result
}

function updateBag(){
 
  
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