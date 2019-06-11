<template>
    <div>您答对了{{rightNum}}道题</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['rightNum'])
    }
}
</script>
