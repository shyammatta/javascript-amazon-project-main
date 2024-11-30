export const cart=[];

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
    quantity:1
    });
    }
  }
  