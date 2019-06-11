<template>
    <ul>
        <li>
            <input type="checkbox" :checked="todo.flag" @change="$store.dispatch('edit',todo.id)">
            <span>{{todo.val}}</span>
            <span @click="$store.dispatch('remove',todo.id)">X</span>
        </li>
    </ul>
</template>

<script>
export default {
    props:['todo']
}
</script>

<style>

</style>
