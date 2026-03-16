const purchaseBtn = document.querySelectorAll('.item-btn')
const burgerToggle = document.querySelector('.ham-burger');
const cartBtn = document.querySelector('.bi-bag');
const cartOffScreen = document.querySelector('.shopping-section')
const menuDropDown = document.querySelector('.nav-bar');


// 
const bagProducts = [
  {
    name: 'macbook',
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
  },
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

   bagContainer.innerHTML= ''
  bagProducts.forEach(function(product){
    const productCard = document.createElement('article');
    productCard.classList.add('product-item');

    const productImg = document.createElement('img');
    productImg.classList.add('card-img');
    productImg.src = './public/assets/images';

    const productContent = document.createElement('div');
    productContent.classList.add('product-content-container');

    const productName = document.createElement('h3');
    productName.textContent = product.name;

    const subTitle = document.createElement('p');
    subTitle.textContent = product.category

    const cardPrice = document.createElement('span');
    cardPrice.textContent = `${product.price}`;

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.innerHTML = '<i class="bi bi-x"></i>'


    productCard.append(productImg, productContent )
    productContent.append(productName, subTitle, cardPrice, removeButton)
    bagContainer.append(productCard)

   
  })
  
}



//     const removeButton = document.createElement('button');
//     removeButton.classList.add('remove-button');
//     removeButton.innerHTML = '<i class="bi bi-x"></i>'






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