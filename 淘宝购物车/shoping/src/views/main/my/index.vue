<template>
    <div>
        <h5>购买商品数目:{{sum}}</h5>
        <h5>总价格:{{price}}</h5>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
    computed: {
        ...mapState({
            buyList:state=>state.shop.buyList
        }),
        price(){
            let price=0;
            this.buyList.forEach(item=>{
                price+=item.num*item.price;
            })
            return price;
        },
        sum(){
            let sum=0;
            this.buyList.forEach(item=>{
                sum+=item.num;
            })
            return sum
        }
    }
}
</script>

<style lang="scss">
    h5{
        width: 100%;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
        font-size: .5rem;
    }
</style>