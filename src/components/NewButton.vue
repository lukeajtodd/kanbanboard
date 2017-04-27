<template>
    <div class="newTask">
        <form @submit="createNewTask">
            <label for="newTask__name-input">task name<input id="newTask__name-input" type="text" v-model="name" class="name"></label>
            <label for="newTask__description-input">description<input id="newTask__description-input" type="text" v-model="description"></label>
            <label for="newTask__state-input">state<input id="newTask__state-input" type="text" v-model="taskState"></label>
            <button type="submit">-- NEW --</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'new-button',
        props: [ 'tasks' ],
        data: function() {
            return {
                name: '',
                description: '',
                taskState: ''
            }
        },
        methods: {
            createNewTask: function(e) {
                e.preventDefault();
                let id = (Math.floor(Math.random() * 122)).toString();
                let name = this.name;
                let description = this.description;
                let state = this.taskState;

                this.$socket.emit('addTask', { id, name, description, state });

                this.name = '';
                this.description = '';
                this.taskState = '';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .newTask {
        text-align: left;
        position: absolute;
        left: 20px;
        top: 50vh;
        transform: translateY(-50%);
    }

    label {
        padding-left: 5px;
    }

    input {
        border: 2px solid black;
        display: block;
        margin: 5px;
        padding: 4px;
        font-size: 14px;
    }

    button {
        font-size: 14px;
        width: 94%;
        border-radius: 0;
        border: 1px solid black;
        padding: 8px;
        margin: 0;
        margin-top: 10px;
        margin-left: 3%;
    }

    buton:active {
       box-shadow: inset 0 0 10px #000;
    }
</style>