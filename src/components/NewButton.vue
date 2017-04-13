<template>
    <div class="newTask">
        <h2>New Task:</h2>
        <input type="text" v-model="name" class="name">
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
                let id = (Math.floor(Math.random() * 122)).toString();
                let name = this.name;
                let description = this.description;

                let newTaskList = this.tasks['todoList'];
                newTaskList.push({ id, name, description });

                console.log(newTaskList);

                this.$http.post('tasks', JSON.stringify(newTaskList)).then((response) => {});
                this.name = '';
                this.description = '';
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