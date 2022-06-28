
export const SET_PRODUTCS=(state,products)=>{
    state.products=products;
}

export const SET_PRODUCT=(state,product)=>{
    state.product =product;
}
export const Add_To_Cart=(state,{product,quantity})=>{
    let productInCart= state.cart.find(item=>{
        return item.product.id===product.id;
    });
    if(productInCart){
        productInCart.quantity+=quantity;
        return;
    }
    state.cart.push({
        product,quantity
    })

}
export const SET_CART=(state,cartItems)=>{
    state.cart=cartItems;
}
export const REMOVE_PRODUCT_FROM_CART=(state,product)=>{
    state.cart=state.cart.filter(item=>{
        return item.prpduct.id !==product.id;

    })
    }
    export const CLEAR_CART_ITEMS=(state)=>{
        state.cart=[];
    }
