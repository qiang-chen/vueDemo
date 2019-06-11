<template>
    <div>
        {{msg}}
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg:[]
        }
    },
    created() {
        let info=localStorage.getItem("info");
        let check=localStorage.getItem("check");
        console.log(info)
        this.msg.push(JSON.parse(info))
        this.msg.push(JSON.parse(check))
    },
}
</script>