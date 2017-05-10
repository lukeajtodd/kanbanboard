<template>
    <li :class="{ task: true, 'task--pink': type == 'bug', 'task--yellow': type == 'story'}" :id="id">
        <h2 class="task__header"><a target="_blank" :href="'http://jira.internal.plus.net/browse/' + name">{{ name }}</a></h2>
        <p class="task__description">{{ description }}</p>
        <span class="close" @click="popModal({ event: $event, callback: removeTask })"><span class="circle circle--small circle--red"></span></span>
        <span class="edit" @click="editTask"><span class="">&#9998;</span></span>
    </li>
</template>

<script>
    export default {
        name: 'task',
        props: [ 'id', 'name', 'description', 'removeTask', 'popModal', 'editTask', 'type' ]
    }
</script>

<style lang="scss" scoped>
    .block {
        display: block;
    }

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

    .close, .edit {
        position: absolute;
        top: 5px;
        padding: 2px;
        cursor: pointer;
    }

    .close {
        right: 5px;
    }

    .edit {
        top: auto;
        bottom: 0px;
        right: 5px;
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