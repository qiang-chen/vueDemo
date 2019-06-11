<template>
    <div class="item">
        <div class="title">
            <h3>{{title}}</h3><span>{{state}}</span>
        </div>
        <div class="content">
            {{address}}
        </div>
        <div class="foot">
            <span>面试时间{{interview}}}:</span><span>{{remind?"已提醒":"已放弃"}}</span>
        </div>
    </div>
</template>

<script>
export default {
    //接受子组件传过来的参数
    props:["title","address","interview","state","remind"]
}
</script>