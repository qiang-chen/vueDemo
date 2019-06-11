<template>
    <div class="car-wrap">
        <div v-for="(item,i) in buyList" :key="i" class="buy-item">
            <span class="check" :class="{'active':item.status}" @click="chooseFun(item.id)"></span>
            <dl>
                <dt>
                    <img :src="item.url" alt="">
                </dt>
                <dd>
                    <h2>{{item.title}}</h2>
                    <span>价格{{item.price}}</span>
                </dd>
            </dl>
            <div>
                <span @click="addNum({id:item.id,str:'-'})">-</span>
                <span>{{item.num}}</span>
                <span @click="addNum({id:item.id,str:'+'})">+</span>
            </div>
        </div>
        <div v-if="buyList.length">
            <span class="check" :class="{'active':allCheck}" @click="checkAllFun"></span>全选
            <span>总价格：{{totalMoney}}</span>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
export default {
    data(){
        return {
            allCheck:false  //全选全不选的状态
        }
    },
    computed:{
        ...mapState(['buyList']),
        ...mapGetters(['totalMoney'])
    },
    created(){
         this.allCheck = this.buyList.every(item => item.status);
    },
    methods:{
        ...mapMutations(['choose','addNum','checkAll']),
        chooseFun(id){
            this.choose(id);
            this.allCheck = this.buyList.every(item => item.status);
        },
        checkAllFun(){
            this.allCheck = !this.allCheck;
            this.checkAll(this.allCheck);
        }
    }
}
</script>

<style lang="scss">
    .car-wrap{
        width:100%;
        .buy-item{
            width:100%;
            display: flex;
            align-items: center;
            
            dl{
                display: flex;
                flex:1;
                align-items: center;
                dt{
                    width:80px;
                    img{
                        width:100%;
                    }
                }
            }
        }
        .check{
            width:20px;
            height: 20px;
            border-radius: 50%;
            background: gray;
            display: block;
            &.active{
                background: orange;
            }
        }
    }
</style>

