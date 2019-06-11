<template>
  <div id="app">
    <div class="left">
      <header>
        <span>列表</span>
        <span @click="isShow('总')">新增</span>
        <div class="sel" v-show="show">
          <p v-for="(item,index) in sel" :key="index" @click="isShow('分',index)">{{item.type}}</p>
        </div>
      </header>
      <div class="title">
        <span>类型</span>
        <span>号码/账号</span>
        <span>提示内容</span>
        <span>操作</span>
      </div>
      <div class="list">
        <!-- 
          这里存放列表也就是调用列表组件
          顺便将我们数组中的列表传递过去

          在这个组件上接受它向根组件传过来的参数
          注意在这里用什么函数名接受下面就得使用什么名字
          注意这里要使用@+函数名字接受子组件传过来的参数
         -->
        <list v-for="(item,index) in list" :key=index :type='item.type' :num='item.num' :reminder='item.reminder' :id='item.id' @del='del' @change='change'></list>
      </div>
    </div>
    <div class="right">
        <icon v-for="(item,index) in list" :key=index :icon='item.icon' :bg='item.bg' :reminder='item.reminder'></icon>
    </div>
  </div>
</template>

<script>
//引入列表组件和icon组件
import list from "./components/list.vue";
import icon from "./components/icon.vue";

export default {
  name: "App",
  data() {
    return {
      show: false,
      list:[],
      sel: [
        {
          type: "邮箱",
          num:"我是邮箱账号",
          reminder:"我是邮箱的提示内容",
          icon:"icon-eyeopen",
          bg:"pink"
        },
        {
          type: "电话",
          num:"我是电话账号",
          reminder:"我是电话的提示内容",
          icon:"icon-phonenum",
          bg:"red"
        },
        {
          type: "返回顶部",
          num:"我是返回顶部",
          reminder:"我是返回顶部的提示内容",
          icon:"icon-question",
          bg:"blue"
        },
        {
          type: "二维码",
          num:"我是二维码账号",
          reminder:"我是二维码的提示内容",
          icon:"icon-paynumber",
          bg:"yellow"
        },
        {
          type: "微信",
          num:"我是微信账号",
          reminder:"我是微信的提示内容",
          icon:"icon-zanting2",
          bg:"green"
        }
      ]
    };
  },
  components: {
    //注册一下我们的组件
    list,
    icon
  },
  methods: {
    isShow(flag,index) {
      if (flag=="总") {
        //点击新增按钮控制下面下拉菜单的显示
        this.show = true;
      } else {
        //点击下面的列表控制下面的消失
        this.show = false;
        //每次点击下面的列表的时候我们需要给list数组push进去一条信息
        //在push进去之前我们需要给每一条数据添加一个独一无二的id
        //目的就是为了后续的增删改查
        //let obj = JSON.parse(JSON.stringify(this.sel[index]));
        //let obj = Object.assign({},this.sel[index]);
        let obj = {...this.sel[index]}
        obj.id = new Date().getTime();
        this.list.push(obj);
        console.log(this.list)
      }
    },
    del(id){
      //接受子组件向我们传过来的根组件 其中这个参数就是子组件传过来的那个参数
      //子组件当时利用this.$emit(参数1，参数2)传过来两个参数 第一个参数的意思
      //是一个单纯的名字 这个名字要我们在上面子组件的使用地方接受一下 然后赋给了
      //del这个函数 所以这里的del参数就直接是当时传的第二个参数了
      console.log(id)
      //循坏这个数组 找到其中id相对应的一项然后把其删除掉
      let index=this.list.findIndex(item=>item.id==id);
      this.list.splice(index,1)
      console.log(this.list)
    },
    change(id,content){
      //循坏这个数组找到id相同那一项然后修改这一项中的提示内容
      let index=this.list.findIndex(item=>item.id==id);
      console.log(this.list[index],'我想要修改的那一项')
      this.list[index].reminder=content
      console.log(this.list)
    }
  }
};
</script>

<style lang='scss'>
    *{
      margin: 0;
      padding: 0;
      list-style: none;
    }
    html,body{
      width: 100%;
      height: 100%;
    }
    #app{
      width: 100%;
      height: 100%;
      display: flex;
      .left{
        flex: 7;
        header{
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          span{
            width: 100px;
            display: flex;
            height: 50px;
            align-items: center;
            justify-content: center;
          }
          .sel{
            width: 100px;
            height: auto;
            position: absolute;
            right: 0;
            top: 50px;
            background-color: #eee;
            z-index: 22;
            p{
              width: 100%;
              height: 30px;
              text-align: center;
              align-items: center;
            }
          }
        }
        .title{
          width: 100%;
          height: 50px;
          display: flex;
          span{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      .right{
        flex: 3;
        background: #eee;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
    }
</style>
