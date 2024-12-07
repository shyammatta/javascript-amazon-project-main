import { cart ,calculateCartQuantity} from "../../data/cart.js";
import { products,getproduct } from "../../data/products.js";
import { getdeliveryOption } from "../../data/deliveryoptions.js";


export function renderpaymentsummary(){
    console.log('payment');
    let totalproductPrice=0;
    let shippingPrice=0;
    cart.forEach((cartItem) =>
     {
        const product=getproduct(cartItem.productId);
        totalproductPrice += product.priceCents *  cartItem.quantity;

        const getoption=getdeliveryOption(cartItem.deliveryOptionId);
        shippingPrice+=getoption.priceCents;

        
        

        
    });
    console.log(cart)
    console.log(totalproductPrice);
    console.log(shippingPrice);
    const totalBeforeTax=totalproductPrice+shippingPrice;
    console.log(totalBeforeTax);
    const taxrs=totalBeforeTax * 0.1;
    console.log(taxrs);
    const total_order=totalBeforeTax+taxrs;
    console.log(total_order);

    const paymentSummeryHTML=
    `<div class="payment-summary-title">
    Order Summary
  </div>

  <div class="payment-summary-row">
    <div>Items (${calculateCartQuantity()}):</div>
    <div class="payment-summary-money">${totalproductPrice}</div>
  </div>

  <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">${shippingPrice}</div>
  </div>

  <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">${totalBeforeTax}</div>
  </div>

  <div class="payment-summary-row">
    <div>Estimated tax (10%):</div>
    <div class="payment-summary-money">${(taxrs).toFixed(2)}</div>
  </div>

  <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">${total_order.toFixed()}</div>
  </div>

  <button class="place-order-button button-primary">
    Place your order
  </button>`

  document.querySelector('.js-pament-summary').innerHTML=paymentSummeryHTML;
}
