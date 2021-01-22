<template>

<base-layout>
    <h1>Todos</h1>
    <div class="todos">
        <div v-for="todo in allTodos" :key="todo.id" class="todos">{{todo.title}}</div>
    </div>
</base-layout>
    
</template>

<script>
 import { mapGetters, mapActions } from 'vuex'
 export default {
     name: "Todos",


    methods: {
    ...mapActions(['getTodos'])
    },
    computed: {
    ...mapGetters(['allTodos'])
    },
    created(){
    this.getCategories()
    },

 }
</script>

<style>

</style>