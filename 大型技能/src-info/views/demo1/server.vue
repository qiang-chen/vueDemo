<template>
    <div>
        <el-row>
            <el-col :span="4"><div class="grid-content bg-purple">系统硬盘</div></el-col>
            <el-col :span="20">
                <div class="grid-content bg-purple-light" style="margin-top: 20px">
                    系统
                    <el-radio-group v-model="server.system">
                        <el-radio-button label="6.8"></el-radio-button>
                        <el-radio-button label="7.0"></el-radio-button>
                        <el-radio-button label="2008"></el-radio-button>
                    </el-radio-group>    
                </div>
                <div class="grid-content bg-purple-light" style="margin-top: 20px">
                    cpu
                    <el-radio-group v-model="server.cpu">
                        <el-radio-button label="2"></el-radio-button>
                        <el-radio-button label="4"></el-radio-button>
                        <el-radio-button label="16"></el-radio-button>
                    </el-radio-group>    
                </div>
                <div class="grid-content bg-purple-light" style="margin-top: 20px">
                    内存
                    <el-radio-group v-model="server.memory">
                        <el-radio-button label="2"></el-radio-button>
                        <el-radio-button label="4"></el-radio-button>
                        <el-radio-button label="16"></el-radio-button>
                        <el-radio-button label="32"></el-radio-button>
                    </el-radio-group>    
                </div>
                <div class="grid-content bg-purple-light" style="margin-top: 20px">
                    硬盘
                    <el-radio-group v-model="server.disk">
                        <el-radio-button label="20"></el-radio-button>
                        <el-radio-button label="40"></el-radio-button>
                        <el-radio-button label="200"></el-radio-button>
                    </el-radio-group>    
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4"><div class="grid-content bg-purple">安装软件</div></el-col>
            <el-col :span="20">
                <el-checkbox-group v-model="server.software">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12" :offset="12">
                <el-button type="primary" @click="preStep">上一步</el-button>
                <el-button type="primary" @click="nextStep">下一步</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {mapMutations,mapState} from 'vuex'
export default {
    data(){
        return {
            server:{
                system:'6.8',
                cpu:'2',
                memory:'2',
                disk:'20',
                software:[]
            }
        }
    },
    created(){
        this.server = this.serverData;
        this.next(2)
    },
    computed:{
        ...mapState(['serverData'])
    },
    methods:{
        ...mapMutations(['changeServer','next']),
        nextStep(){
            this.changeServer(this.server);
            this.next();
            this.$router.push('/demo1/cur');
        },
        preStep(){
            this.next(1);
            this.$router.push('/demo1/business');
        }
    }
}
</script>
