export let cart= JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart=[{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity:2,
        deliveryOptionId:'1',
        
    },
    {
        productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity:1,
        deliveryOptionId:'2'

    }];

}


function saveTostorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){

    let matchitem;
    cart.forEach((item)=>{
    if(item.productId===productId){
    matchitem=item;
  
    }
  
    });
    if(matchitem){
    matchitem.quantity+=1;
    }
    else{
  
    cart.push({
    productId:productId,
    quantity:1,
    deliveryOptionId:'1'
    });
    }
    saveTostorage();
  }

 export function deleteCartItem(productId){
    let mycart=[];
    cart.forEach((item)=>{
        if(item.productId!==productId){
            mycart.push(item);
        }
    });
    
    cart=mycart;
    saveTostorage();

  }
  export function calculateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
  
    return cartQuantity;
}

export  function updateQunatity(productId,newupdatequantity){
      let matchingItem;

    cart.forEach((item)=>{
        if(item.productId===productId){
            matchingItem=item;
            
        }

    });
    matchingItem.quantity=newupdatequantity;
    saveTostorage();


  }
  export function updateDeliveryOption(productId,deliveryOptionId){
    let matchingItem;
    cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
            matchingItem=cartItem;
        }
    });
    matchingItem.deliveryOptionId=deliveryOptionId;
    saveTostorage();
  }
  