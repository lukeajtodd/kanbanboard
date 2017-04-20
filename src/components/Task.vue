<template>
    <li class="task" :id="id">
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
        <p class="task__state" v-if="taskState != undefined">{{ taskState }}</p>
        <span class="close" @click="removeTask"><span class="circle circle--small circle--red"></span></span>
    </li>
</template>

<script>
    export default {
        name: 'task',
        props: [ 'id', 'name', 'description', 'removeTask', 'taskState' ]
    }
</script>

<style lang="scss" scoped>
    .task {
        text-align: left;
        color: #000;
        font-weight: bold;
        display: block;
        position: relative;
        max-width: 180px;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin: 8px 0;
        padding: 10px 10px;
        overflow-wrap: break-word;

        background: #ddd;
        border-radius: 8px;
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

    .task__state {
        display: inline-block;
        transform: translateX(100%);
        margin-top: 10px;
    }

    .close {
        position: absolute;
        top: 5px; right: 5px;
        padding: 2px;
        cursor: pointer;
    }

    .circle {
        display: block;
        width: 15px;
        height: 15px;
        background: #000;
        border-radius: 50%;
        position: relative;
    }

    .circle--red {
        background-color: red;
    }

    .circle--small {
        width: 10px;
        height: 10px;
    }
</style>