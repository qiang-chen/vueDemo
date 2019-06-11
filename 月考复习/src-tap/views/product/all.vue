<template>
    <project :data="all" title="所有项目"></project>
</template>
<script>
import project from '../../components/project'
import {mapState} from 'vuex'
export default {
    components:{
        project
    },
    computed:{
        ...mapState(['all'])
    },
}
</script>
