<template>
    <div class="wrap">
        <header>todos</header>
        <div class="container">
            <div class="box">
                <div class="title">
                    <input type="checkbox" class="i" :checked="checked" @change="$store.dispatch('checkAll',!checked)">
                    <input type="text" placeholder="What needs to be done?" @keyup.enter="add">
                    
                </div>
                <div class="con">
                   <todo v-for="(item,index) in list" :key="index" :todo="item"></todo>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import todo from '../components/list'
export default {
    created(){
        this.$store.dispatch('getData')
    },
    components:{
        todo
    },
    methods:{
        add(e){
            let val=e.target.value.trim()
            this.$store.dispatch('add',val)
            e.target.value=""
        }
    },
    computed:{
        list(){
            return this.$store.state.list
        },
        checked(){
            return this.list.every(item=>item.flag)
        }
    }
}
</script>

<style lang="scss">
 *{
     margin: 0;
     padding: 0;
     list-style: none;
     box-sizing: border-box;
     outline: none;
     text-decoration: none;
 }
 body,html,#app,.wrap{
     width: 100%;
     height: 100%;
     background: #f4f4f4;
 }
 .wrap{
     display: flex;
     flex-flow: column wrap;
     header{
         height: 200px;
         width: 100%;
         line-height: 250px;
         font-size: 100px;
         text-align: center;
         color:#efd6d7;
     }
     .container{
         width: 100%;
         display: flex;
         justify-content: center;
         .box{
             width: 500px;
             height: auto;
             background: #fff;
             .title{
                 height: 50px;
                 width: 100%;
                 position: relative;
                 box-shadow: 0 0 3px #ccc;
                 input{
                    height: 50px;
                    width: 100%;
                    background: #fff;
                    border:0;
                    padding-left: 50px;
                    font-size: 20px;
                }
                ::placeholder{
                    color:#e2e2e2;
                }
                .i{
                    position: absolute;
                    left: 17px;
                    top:18px;
                    width: 15px;
                    height: 15px;
                }
             }
             .con{
                 width: 100%;
             }
         }
     }
 }
</style>
