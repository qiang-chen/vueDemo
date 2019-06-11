<template>
    <div class="operation">
        <div class="control">
            <span class="ope" @click='control("-")'>-</span>
            <input type="text" :value="num">
        </div>
        <span class="ope" @click='control("+")'>+</span>
    </div>
</template>

<script>
export default {
    props: ['num','id'],
    created () {
        console.log(this.num,this.id)
    },
    methods: {
        control(type){
            let newNum;
            if(type=="-"){
                newNum=this.num-1;
            }else{
                newNum=this.num+1;
            }
            this.$bus.$emit('count',newNum,this.id)
        }
    },
}
</script>

<style lang="scss" scoped>
    .operation{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 0 1rem;
        box-sizing: border-box;
        .control{
            display: flex;
            input{
                width: 0.8rem;
                height: 0.6rem;
                border: 0;
                text-align: center;
                border-radius: .1rem;
                margin: 0 .5rem;
                &::placeholder{
                    text-align: center;
                }

            }
        }
        .ope{
            width: 0.6rem;
            height: 0.6rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: yellow;
            color: #f00;
            border-radius: 50%;

        }
    }
</style>

