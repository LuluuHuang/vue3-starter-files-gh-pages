import productsStore from "../store/productsStore.js";
import cartStore from "../store/cartStore.js";
import cardComponent from "./cardComponent.js";
const { mapState,mapActions } = Pinia;

export default {
    data() {
        return {
        };
    },
    template: `
        <div class="row row-cols-3 my-4 g-4">
            <div class="col" v-for="product in sortProducts" :key="product.id">
                <card-Component :product="product"></card-Component>
            </div>
        </div>
    `,
    computed:{
        ...mapState(productsStore,['sortProducts']),
    },
    methods: {
        ...mapActions(cartStore,['addToCart'])
    },
    components:{
        cardComponent
    }
};
