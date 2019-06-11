<template>
    <div>
        person:{{business.person}} cpu:{{serverData.cpu}}
        <el-row>
            <el-col :span="12" :offset="12">
                <el-button type="primary" @click="preStep">上一步</el-button>
                <el-button type="primary">提交</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    computed:{
        ...mapState(['business','serverData'])
    },
    created(){
        this.next(3);
    },
    methods:{
        ...mapMutations(['next']),
        preStep(){
            this.next(2);
            this.$router.push('/demo1/server');
        }
    }
}
</script>
