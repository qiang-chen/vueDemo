<template>
    <div class="listcontent">
        <h3>{{name}}</h3>
        <dl v-for="(item,index) in foods" :key="index">
            <dt>
                <img :src="item.image" alt="">
            </dt>
            <dd>
                <h3>{{item.name}}</h3>
                <span>{{item.description}}</span>
                <span>{{item.price}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    props: ['name','foods'],
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {},
    created() {},
    mounted() {}
};
</script>
<style scoped lang="">
dl{
    display: flex;
}
dl dt{
    height: 120px;
    width: 120px
}
dl dt img{
    height: 100%;
    width: 100%;
}
</style>