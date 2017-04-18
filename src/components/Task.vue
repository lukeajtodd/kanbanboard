<template>
    <li class="task" :id="id" @drop="setBackground">
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
        <span class="close" @click="removeTask">x</span>
    </li>
</template>
å
<script>
    export default {
        name: 'task',
        props: [ 'id', 'name', 'description', 'removeTask' ],
        methods : {
            setBackground(event) {
                console.log(event);
                console.log(event.srcElement.parentElement.id);
                document.getElementById(event.srcElement.parentElement.id).style.background = 'green';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .task {
        color: #000;
        font-weight: bold;
        display: block;
        position: relative;
        max-width: 180px;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin: 2px 0;
        padding: 10px 8px;
        overflow-wrap: break-word;

        background: yellow;
    }

    .task--tama {
        background: #c81e6e;
    }

    .task--sales {
        background: #38bcde;
    }

    h2 {
        margin: 0;
    }

    p {
        margin: 0;
    }

    .close {
        position: absolute;
        top: 0; right: 5px;
        padding: 2px;
        cursor: pointer;
    }
</style>