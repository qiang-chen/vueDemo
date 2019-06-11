<template>
    <project :data="filed" title="已归档"></project>
</template>
<script>
import project from '../../components/project'
import {mapGetters} from 'vuex'
export default {
    components:{
        project
    },
    computed:{
        ...mapGetters(['filed'])
    },
}
</script>

