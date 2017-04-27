<template>
    <li :class="{ task: true, 'task--pink': type == 'bug', 'task--yellow': type == 'story'}" :id="id">
        <h2><a target="_blank" :href="'http://jira.internal.plus.net/browse/' + name">{{ name }}</a></h2>
        <p>{{ description }}</p>
        <span class="close" @click="removeTask"><span class="circle circle--small circle--red"></span></span>
    </li>
</template>

<script>
    export default {
        name: 'task',
        props: [ 'id', 'name', 'description', 'removeTask', 'type' ]
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

    .task--pink {
        background: #ff97d2;
    }

    .task--yellow {
        background: #ffffa5;
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