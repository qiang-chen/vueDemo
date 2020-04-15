<template>
    <div v-if="quesition.length">
        <h2>{{quesition[curIndex].title}}</h2>
        <ul>
            <li v-for="(item,i) in quesition[curIndex].answer" :key="i"
                @click="choose(i,item)" :class="{'high':active === i,'blue':quesition[curIndex].flag != null&& item.is_stand_answer === 1}"
            >
                {{item.answer_name}}
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    computed:{
         ...mapState(['quesition','curIndex','active'])
     },
     methods:{
         choose(id,item){
             this.chooseAnswer({item,id});
             if(this.curIndex === this.quesition.length-1){
                 setTimeout(() => {
                     localStorage.setItem('already','完成');
                     this.$router.push('/quesition/last')
                 },2000)
             }else{
                 this.nextQuestion();
             }
         },
         ...mapMutations(['chooseAnswer']),
         ...mapActions(['nextQuestion'])
     }
}
</script>
<style>
    .high{
        color:orange;
    }
    .blue{
        background: blue;
    }
</style>

