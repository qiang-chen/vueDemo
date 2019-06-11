<template>
    <div class="list">
        <span>{{name}}</span>
    </div>
</template>

<script>
export default {
    //接受根组件传过来的参数
    props: ['name']
}
</script>

<style lang="scss" scoped>
    .list{
        width: 30%;
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.2rem 0;
        span{
            width: 100%;
            height: 60%;
            border: solid 1px #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0.08rem;
        }
    }
</style>
