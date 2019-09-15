<template>
    <div>
        <div class="page">
            <p>发现</p>
        </div>
        <my-footer></my-footer>
    </div>
</template>
<script>
// import myFooter from '../components/footer';
export default {
    props: {},
    components: {
        // myFooter
    },
    data() {
        return {};
    },
    computed: {},
    methods: {},
    created() {
        console.log(this.$router,this.$route);
    },
    mounted() {}
};
</script>
<style scoped lang="">
</style>
