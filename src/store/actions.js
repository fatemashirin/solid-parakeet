import Product from '../apis/Product';
import Cart from "../apis/Cart";
export const getProducts=({commit})=>{
    Product.all().then(response =>{
        commit('SET_PRODUTCS',response.data);
    });
}
export const getProduct=({commit},productId)=>{
    Product.show(productId).then(response=>{
        commit('SET_PRODUCT',response.data);
        });
    }
    export const addProductToCart=({commit}, {product, quantity})=>{
        commit('Add_To_Cart',{product,quantity});
        Cart.store({
product_id: product.id,
quantity
        });
    }
    export const getCartItems=({commit})=>{
        Cart.all().then(response => {
            commit('SET_CART',response.data);
        });
    }
    export const removeProductFromCart=({commit},product)=>{
        commit('REMOVE_PRODUCT_FROM_CART',product);
        Cart.delete(product.id);
    }
    export const clearCartItems=({commit})=>{
        commit('CLEAR_CART_ITEMS');
        Cart.deleteAll();
    }

