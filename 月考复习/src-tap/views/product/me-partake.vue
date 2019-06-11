<template>
    <project :data="mePartake" title="我参与的"></project>
</template>
<script>
import project from '../../components/project'
import {mapGetters} from 'vuex'
export default {
    components:{
        project
    },
    computed:{
        ...mapGetters(['mePartake'])
    },
}
</script>
