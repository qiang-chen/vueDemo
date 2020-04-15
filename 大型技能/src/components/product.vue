<template>
    <div class="week-wrap">
        <dl v-for="(item,i) in products" :key="item.id">
            <dt>
                <img :src="item.url" alt="">
            </dt>
            <dd>
                <h2>{{item.title}}</h2>
                <p>{{item.content}}</p>
                <span>价格：{{item.price}}</span>
                <span @click="add(item)">添加购物车</span>
            </dd>
        </dl>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    computed:{
        ...mapState(['products'])
    },
    methods:{
        ...mapMutations(['addProduct']),
        add(obj){
            this.addProduct(obj)
            // this.$store.commit('addProduct')
        }
    }
}
</script>

<style lang="scss">
    .week-wrap{
        width:100%;
        overflow-x: scroll;
        display: flex;
        dt{
            width:80px;
            img{
                width:80px;
            }
        }
    }
</style>
