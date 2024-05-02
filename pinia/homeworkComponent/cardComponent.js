import cartStore from "../store/cartStore.js";
const { mapActions } = Pinia;
export default{
    props:['product'],
    data(){
        return{
            num:1
        }
    },
    template:`
    <div class="card">
        <img
            :src="product.imageUrl"
            alt=""
            class="card-img-top"
        />
        <div class="card-body">
            <h6 class="card-title">
                {{product.title}}
                <span class="float-end">NT$ {{product.price}}</span>
            </h6>
            <a href="#" class="btn btn-outline-primary w-100" @click.prevent="addToCart(product.id,num)">加入購物車</a>
        </div>
    </div>
    `,
    methods: {
        ...mapActions(cartStore,['addToCart'])
    },

}