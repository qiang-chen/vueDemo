<template>
    <el-form :model="form" ref="ruleForm" :rules="rules" label-width="100px" style="width:60%">
        <el-form-item label="选择产品线">
            <el-select v-model="form.line" placeholder="选择产品线">
            <el-option label="产品线一" value="产品线一"></el-option>
            <el-option label="产品线二" value="产品线二"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="申请人" prop="person">
            <el-input type="textarea" v-model="form.person"></el-input>
        </el-form-item>
        <el-form-item label="申请部门" prop="unit">
            <el-input type="textarea" v-model="form.unit"></el-input>
        </el-form-item>
        <el-form-item label="日PV" prop="pv">
            <el-input v-model="form.pv"></el-input>
        </el-form-item>
        <el-form-item label="RQS" prop="rqs">
            <el-input v-model="form.rqs"></el-input>
        </el-form-item>
        <el-form-item label="TPS" prop="tps">
            <el-input v-model="form.tps"></el-input>
        </el-form-item>
        <el-form-item label="选择时间">
            <el-date-picker
                v-model="form.time"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="nextFun">下一步</el-button>
        </el-form-item>
        </el-form>
</template>
<script>
import {mapMutations,mapState} from 'vuex'
export default {
    data(){
        return {
            form: {
                line: '',
                person: '',
                unit:'',
                pv:'',
                rqs:'',
                tps:'',
                time:''
            },
            rules:{
                person: [
                    {required: true, message: '申请人', trigger: 'blur' }
                ],
                unit: [
                    {required: true, message: '申请部门', trigger: 'blur' }
                ],
                pv: [
                    {required: true, message: 'pv', trigger: 'blur' }
                ],
                rqs: [
                    {required: true, message: 'rqs', trigger: 'blur' }
                ],
                tps: [
                    {required: true, message: 'tps', trigger: 'blur' }
                ]
            }
        }
    },
    created(){
        this.form = this.business;
        this.next(1)
    },
    computed:{
        ...mapState(['business'])
    },
    methods:{
        ...mapMutations(['changeForm','next']),
        nextFun() {
            this.$refs.ruleForm.validate((valid) => {
            if (valid) {
                //1.修改store form值  2.跳到server
                this.changeForm(this.form);
                this.next();
                this.$router.push('/demo1/server');
            } else {
                console.log('error submit!!');
                return false;
            }
        })
    }}
}
</script>
