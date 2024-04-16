const { defineStore } = Pinia;
import productsStore from "./productsStore.js";

export default defineStore("cart", {
    state: () => ({
        cart: [],
    }),
    actions: {
        addToCart(productId, qty = 1) {
        console.log(productId, qty);
        this.cart.push({
            id: new Date().getTime(),
            productId,
            qty,
        });
        },
        removeCartItem(id){
            const index = this.cart.findIndex((item)=>item.id===id);
            this.cart.splice(index,1);
        }
    },
    getters: {
        cartList: ({ cart }) => {
        //購物車的品項資訊,需要整合產品資訊
        //必須計算小計金額
        //必須提供總金額
        const { products } = productsStore();
        // console.log(products);
        // console.log(cart);
        const carts = cart.map((item) => {
            // console.log(item);
            //單一產品取出
            const product = products.find(
            (product) => product.id === item.productId
            );
            console.log("相同id的產品", product);
            return{
                ...item,
                product,
                subtotal:product.price*item.qty
            }
        });
        const total = carts.reduce((a,b)=>a+b.subtotal,0);
        console.log(total);
        console.log(carts);
        return {
            carts,//列表
            total,
        };
        },
    },
});
