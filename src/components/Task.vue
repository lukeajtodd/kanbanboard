<template>
    <li class="task">
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
    </li>
</template>

<script>
    export default {
        name: 'task',
        props: [ 'name', 'description' ]
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
</style>