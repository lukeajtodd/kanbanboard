<template>
    <div class="newTask">
        <form @submit="createNewTask">
            <label for="newTask__name-input">task name<input id="newTask__name-input" type="text" v-model="name" class="name"></label>
            <label for="newTask__description-input">description<input id="newTask__description-input" type="text" v-model="description"></label>
            <div class="newTask__colours">
                <a class="newTask__colours-button newTask__colours-button--pink" @click="setType('bug')">BUG</a>
                <a class="newTask__colours-button newTask__colours-button--yellow" @click="setType('story')">STORY</a>
            </div>
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
                type: ''
            }
        },
        methods: {
            setType: function(type) {
                this.type = type;
            },
            createNewTask: function(e) {
                e.preventDefault();
                let id = (Math.floor(Math.random() * 122)).toString();
                let name = this.name;
                let description = this.description;
                let type;
                if (this.type == '') {
                    type = 'story';
                } else {
                    type = this.type;
                }

                this.$socket.emit('addTask', { id, name, description, type });

                this.name = '';
                this.description = '';
                this.type = '';
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

    .newTask__colours-button {
        text-align: center;
        color: #000;
        width: 94%;
        margin-left: 3%;
        font-weight: bold;
        padding: 2px 0;
        margin-bottom: 5px;
        display: block;
        border: 1px solid black;
        cursor: pointer;
    }

    .newTask__colours-button:active {
        box-shadow: inset #333 2px 2px;
    }

    .newTask__colours-button--pink {
        background: #ff97d2;
    }

    .newTask__colours-button--yellow {
        background: #ffffa5;
    }

    buton:active {
       box-shadow: inset 0 0 10px #000;
    }
</style>