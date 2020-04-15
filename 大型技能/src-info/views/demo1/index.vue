<template>
    <div>
        <el-steps :space="400" :active="active" finish-status="success">
            <el-step title="业务详情"></el-step>
            <el-step title="服务器详情"></el-step>
            <el-step title="确认"></el-step>
        </el-steps>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['active'])
    }
}
</script>