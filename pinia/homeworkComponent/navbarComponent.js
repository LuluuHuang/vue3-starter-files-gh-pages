const {mapState}=Pinia;
import cartStore from "../store/cartStore.js";
export default {
    template: `
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">餅乾店</span>
                <butto type="button" class="btn">
                購物車
                <span class="badge rounded-pill bg-danger">{{cart.length}}</span>
                </butto>
            </div>
        </nav>
    `,
    computed:{
        ...mapState(cartStore,['cart'])
    }
};
