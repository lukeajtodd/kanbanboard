<template>
    <div class="newTask">
        <h2>New Task:</h2>
        <input type="text" class="name">
        <input type="text" v-model="description">
        <button @click="createNewTask">NEW</button>
    </div>
</template>

<script>
    export default {
        name: 'new-button',
        props: [ 'tasks' ],
        data: function() {
            return {
                name: '',
                description: ''
            }
        },
        methods: {
            createNewTask: function() {
                let name = this.name;
                let description = this.description;

                store.commit('addTask', { name, description });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .newTask {
        position: absolute;
        left: 20px;
        top: 35%;
    }
    input {
        display: block;
        margin: 5px; 
    }
</style>