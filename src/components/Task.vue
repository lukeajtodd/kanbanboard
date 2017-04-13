<template>
    <li class="task" :id="id">
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
        <span class="close" @click="removeTask">x</span>
    </li>
</template>

<script>
    export default {
        name: 'task',
        props: [ 'id', 'name', 'description', 'removeTask' ],
        mounted() {
            if (this.name.includes('TAMA')) {
                document.getElementById(this.id).style.background = '#c81e6e';
            } else if (this.name.includes('SALES')) {
                document.getElementById(this.id).style.background = '#676d70';
            }
        }
    }
</script>

<style lang="scss">
    .task {
        display: block;
        position: relative;
        max-width: 180px;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin: 0;

        background: yellow;
    }

    .close {
        position: absolute;
        top: 0; right: 0;
        cursor: pointer;
    }
</style>