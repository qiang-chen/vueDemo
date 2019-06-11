<template>
    
    <div>
        <button v-on:click="add">
            +
        </button>
        <span>
            {{count}}
        </span>

        <button @click="e=>del(e)">
            -
        </button>
    </div>

</template>

<script>
export default {
    data(){
        return {
            count:0
        }
    },
    methods:{
        add(e){
            console.log("add",e)
            this.count++;
        },
        del(e){
            console.log("del",e)
            this.count--;
        }
    }
}
</script>
