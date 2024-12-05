import { calculateCartQuantity, cart, deleteCartItem, updateDeliveryOption, updateQunatity } from "../data/cart.js";
import deliveryOptions from "../data/deliveryoptions.js";
import { products } from "../data/products.js";

import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';





let cartSummaryhtml=''
cart.forEach((cartItem)=>{
    const productId=cartItem.productId;
    
    let matchingproduct;
    products.forEach((product)=>{
        if(product.id===productId){
            matchingproduct=product;
        }
    });
    //delivery option head
    const deliveryOptionId=cartItem.deliveryOptionId;
    console.log(deliveryOptionId)
    let deliveryOption;
    deliveryOptions.forEach((option) => {
      if(option.id === deliveryOptionId){
        deliveryOption = option;
      }
    });
    console.log(deliveryOption);
    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliveryDays,
      'days'
    );
    const datestring= deliveryDate.format(
      'dddd, MMMM D'
    );
 


    cartSummaryhtml +=`
    <div class="cart-item-container js-cart-item-container-${productId} js-delete-container-${productId}">
            <div class="delivery-date">
              Delivery date: ${datestring}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingproduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                ${matchingproduct.name}
                </div>
                <div class="product-price">
                ${matchingproduct.priceCents}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label js-updatedquantity-${matchingproduct.id}">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingproduct.id}">
                    Update
                  </span>
                  <input type="number" class="quantity-link quantity-input quantity-link quantity-link-${matchingproduct.id}">
                  <span class="save-quantity-link save-link  link-primary" data-product-id="${matchingproduct.id}">save</span>
                  <span class="delete-quantity-link link-primary js-delete-link " data-product-id="${matchingproduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${deliveryOptionsHTML(matchingproduct,
                  cartItem)}
              </div>
            </div>
          </div>
    
    `


});

function deliveryOptionsHTML(matchingproduct,cartItem){
  let html='';
  deliveryOptions.forEach((deliveryOption)=>{
    const today=dayjs();
    const deliveryDate=today.add(
      deliveryOption.deliveryDays,
      'days'
    );
    const datestring= deliveryDate.format(
      'dddd, MMMM D'
    );
    const pricestring=deliveryOption.priceCents
    ===0
    ? 'FREE'
    : `$${deliveryOption.priceCents} -`;

    const isChecked= deliveryOption.id === cartItem.deliveryOptionId;
    

    html+= `<div class="delivery-option js-delivery-option" data-product-id="${matchingproduct.id}"
    data-delivery-option-id="${deliveryOption.id}">
    <input type="radio"
    ${isChecked ? 'checked' : ''}
      class="delivery-option-input"
      name="delivery-option-${matchingproduct.id}">
    <div>
      <div class="delivery-option-date">
      ${datestring}

      </div>
      <div class="delivery-option-price">
        ${pricestring} - Shipping
      </div>
    </div>
  </div>`

  });
  return html;

}

console.log(cartSummaryhtml);
document.querySelector('.js-order-summary').innerHTML=cartSummaryhtml;


//delete from cart
document.querySelectorAll('.js-delete-link')
.forEach((link) => {
    link.addEventListener('click',()=>{
        const productId=link.dataset.productId;

    console.log(productId);
    deleteCartItem(productId);
    const container=document.querySelector(`.js-delete-container-${productId}`);
    container.remove();
    UpdateCartQuantity();
})
  });

  //delivery-option change

  //update code

  document.querySelectorAll('.js-update-link').forEach((link)=>{
    link.addEventListener('click',()=>{
      const productId=link.dataset.productId;
      console.log(productId);
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.classList.add('is-editing-quantity');
    })
  })
  //save link code
    document.querySelectorAll('.save-link').forEach((link)=>{
    link.addEventListener('click',()=>{
      const productId=link.dataset.productId;
      const container = document.querySelector(`.js-cart-item-container-${productId}`);
      container.classList.remove('is-editing-quantity');
    
      const newupdatequantity=parseInt(document.querySelector(`.quantity-link-${productId}`).value);
      console.log(newupdatequantity);
      updateQunatity(productId,newupdatequantity)

      document.querySelector(`.js-updatedquantity-${productId}`).innerHTML=newupdatequantity;
      UpdateCartQuantity();

    });

  });

  UpdateCartQuantity();


function UpdateCartQuantity(){
  const cartquantity=calculateCartQuantity();
      
      console.log(cartquantity);
      document.querySelector('.js-checkout-cart-quantity').innerHTML=`${cartquantity}`;
    }

    document.querySelectorAll('.js-delivery-option')
    .forEach((element)=>{
      element.addEventListener('click', ()=>{
        const {productId,deliveryOptionId} =element.dataset;
        updateDeliveryOption(productId,deliveryOptionId)
        
  
      })
      
  
    })
  
  





