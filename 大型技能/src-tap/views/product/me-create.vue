<template>
    <project :data="meCreate" title="我创建的"></project>
</template>
<script>
import project from '../../components/project'
import {mapGetters} from 'vuex'
export default {
    components:{
        project
    },
    computed:{
        ...mapGetters(['meCreate'])
    },
}
</script>

