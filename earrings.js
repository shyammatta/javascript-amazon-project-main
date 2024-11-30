
const products=[{
  image:"./images.jpg",
  name:"earrings",
  rating:{
    stars:4,
    count:34
  },
  price:200
},
{
  image:"./images.jpg",
  name:"earrings",
  rating:{
    stars:4,
    count:100
  },
  price:200
},
{
  image:"./images.jpg",
  name:"earrings",
  rating:{
    stars:4,
    count:34
  },
  price:200
},
{
  image:"./images.jpg",
  name:"earrings",
  rating:{
    stars:4,
    count:34
  },
  price:200
},
{
  image:"./images.jpg",
  name:"earrings",
  rating:{
    stars:4,
    count:34
  },
  price:200
},
{
  image:"./images.jpg",
  name:"earrings",
  rating:{
    stars:4,
    count:34
  },
  price:200
},


];
let productsHTML='';
products.forEach((product)=>{
  productsHTML+= `
  <div class="products-container">
    <div class="product-image-container">
        <img src="${product.image}" class="product-image" alt="">

    </div>
    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>
    <div class="product-rating-container">
        <img class="product-rating-stars"
          src="./rating-${product.rating.stars*10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
    </div>
    <div class="product-price">
        ${product.price}
    </div>
    <div></div>
    <button class="add-to-cart">Add to Cart</button>

</div>

  `
});
document.querySelector(".js-products-grid").innerHTML=productsHTML;
