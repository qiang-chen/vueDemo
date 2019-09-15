<template>
    <div class="content">
        <div class="left">
            <ul>
                <li v-for="(item,index) in list" :key="index" :class="{'active':index ===ind}" @click="goToRight(index)">{{item.name}}</li>
            </ul>
        </div>
        <div class="right">
            <div class="rightList" ref="rightList">
                <my-list v-for="(item1,index1) in list" :key="index1" :name="item1.name" :foods="item1.foods"></my-list>
            </div>

        </div>
    </div>
</template>
<script>
import myList from "../components/my-list";
import axios from "axios";
import BScroll from "better-scroll";
export default {
    name:'dican',
    props: {},
    components: {
        myList
    },
    data() {
        return {
            list: [],
            ind: 0,
            scrollY: 0,
            scrollH: [],
            leftBScroll: null,
            rightBScroll: null
        };
    },
    computed: {
        currentIndex(){
            for(let j=0;j<this.scrollH.length;j++){
                let height1 = this.scrollH[j];
                let height2 = this.scrollH[j+1];
                if(height2 && (this.scrollY >= height1 && this.scrollY < height2)){
                    return j;
                }
            }
            return 0;
        }
    },
    methods: {
        goToRight(ind) {
            // console.log(this.$refs.rightList);
            let child = this.$refs.rightList.children;
            // console.log(child[ind]);
            this.ind = ind;
            this.rightBScroll.scrollToElement(child[ind], 200);
        },
        init() {
            this.leftBScroll = new BScroll(".left", {
                click: true
            });
            this.rightBScroll = new BScroll(".right", {
                probeType: 3
            });
            this.rightBScroll.on("scroll", res => {
                console.log(this.currentIndex);
                this.ind = this.currentIndex;
                this.scrollY = Math.abs(res.y);
                console.log(this.scrollY);
            });
        },
        scrollHeight() {
            let child = this.$refs.rightList.children;
            let height = 0;
            this.scrollH.push(height); //[0]
            for (let i = 0; i < child.length; i++) {
                let item = child[i].offsetHeight; //1244
                height += item;
                this.scrollH.push(height); // [0,1244]
            }
            console.log(this.scrollH);
        }
    },
    created() {
        axios.get("/api/list").then(res => {
            console.log(res.data);
            this.list = res.data.goods;
            this.$nextTick(() => {//dom加载完成之后触发
                this.init();
                this.scrollHeight();
            });
        });
    },
    mounted() {}
};
</script>
<style scoped lang="">
.content {
    flex: 1;
    overflow: hidden;
    width: 100%;
    display: flex;
}
.left {
    height: 100%;
    width: 120px;
}
.right {
    flex: 1;
    width: 100%;
}
.left li {
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: cornflowerblue;
    color: #fff;
}
.left li.active {
    background: darksalmon;
}
</style>