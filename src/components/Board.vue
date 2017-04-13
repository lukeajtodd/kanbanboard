<template>
    <div class="board drag">
        <div class="board__column" id="todoList">
            <h1 class="column_header">TO DO</h1>
            <draggable v-model="tasks.todoList" :options="{ group: 'tasks' }" class="column__list">
                <task :removeTask="removeTask" v-for="item in tasks.todoList" :id="item.id" :name="item.name" :description="item.description"></task>
            </draggable>
        </div>
        <div class="board__column" id="analysisList">
            <h1 class="column_header">ANALYSIS</h1>
            <draggable v-model="tasks.analysisList" :options="{ group: 'tasks' }" class="column__list">
                <task :removeTask="removeTask" v-for="item in tasks.analysisList" :id="item.id" :name="item.name" :description="item.description"></task>
            </draggable>
        </div>
        <div class="board__column" id="devList">
            <h1 class="column_header">DEV</h1>
            <draggable v-model="tasks.devList" :options="{ group: 'tasks' }" class="column__list">
                <task :removeTask="removeTask" v-for="item in tasks.devList" :id="item.id" :name="item.name" :description="item.description"></task>
            </draggable>
        </div>
        <div class="board__column" id="blockedList">
            <h1 class="column_header">BLOCKED</h1>
            <draggable v-model="tasks.blockedList" :options="{ group: 'tasks' }" class="column__list">
                <task :removeTask="removeTask" v-for="item in tasks.blockedList" :id="item.id" :name="item.name" :description="item.description"></task>
            </draggable>
        </div>
        <div class="board__column" id="CRList">
            <h1 class="column_header">CR</h1>
            <draggable v-model="tasks.CRList" :options="{ group: 'tasks' }" class="column__list">
                <task :removeTask="removeTask" v-for="item in tasks.CRList" :id="item.id" :name="item.name" :description="item.description"></task>
            </draggable>
        </div>
        <div class="board__column" id="readyTestList">
            <h1 class="column_header">READY FOR TEST</h1>
            <draggable v-model="tasks.readyTestList" :options="{ group: 'tasks' }" class="column__list">
                <task :removeTask="removeTask" v-for="item in tasks.readyTestList" :id="item.id" :name="item.name" :description="item.description"></task>
            </draggable>
        </div>
        <div class="board__column" id="inTestList">
            <h1 class="column_header">IN TESTING</h1>
            <draggable v-model="tasks.inTestList" :options="{ group: 'tasks' }" class="column__list">
                <task :removeTask="removeTask" v-for="item in tasks.inTestList" :id="item.id" :name="item.name" :description="item.description"></task>
            </draggable>
        </div>
        <div class="board__column" id="promoteList">
            <h1 class="column_header">READY TO PROMOTE</h1>
            <draggable v-model="tasks.promoteList" :options="{ group: 'tasks' }" class="column__list">
                <task :removeTask="removeTask" v-for="item in tasks.promoteList" :id="item.id" :name="item.name" :description="item.description"></task>
            </draggable>
        </div>
        <div class="board__column" id="mergeList">
            <h1 class="column_header">READY TO MERGE</h1>
            <draggable v-model="tasks.mergeList" :options="{ group: 'tasks' }" class="column__list">
                <task :removeTask="removeTask" v-for="item in tasks.mergeList" :id="item.id" :name="item.name" :description="item.description"></task>
            </draggable>
        </div>
        <div class="board__column"  id="mergedList">
            <h1 class="column_header">MERGED</h1>
            <draggable v-model="tasks.mergedList" :options="{ group: 'tasks' }" class="column__list">
                <task :removeTask="removeTask" v-for="item in tasks.mergedList" :id="item.id" :name="item.name" :description="item.description"></task>
            </draggable>
        </div>
        <div class="board__column"  id="releaseList">
            <h1 class="column_header">RELEASE TEST</h1>
            <draggable v-model="tasks.releaseList" :options="{ group: 'tasks' }" class="column__list">
                <task :removeTask="removeTask" v-for="item in tasks.releaseList" :id="item.id" :name="item.name" :description="item.description"></task>
            </draggable>
        </div>
        <div class="board__column" id="doneList">
            <h1 class="column_header">DONE</h1>
            <draggable v-model="tasks.doneList" :options="{ group: 'tasks' }" class="column__list">
                <task :removeTask="removeTask" v-for="item in tasks.doneList" :id="item.id" :name="item.name" :description="item.description"></task>
            </draggable>
        </div>
    </div>
</template>

<script>
    import Task from './Task.vue'
    import draggable from 'vuedraggable'
    export default {
        name: 'board',
        props: [ 'tasks' ],
        components: {
            Task,
            draggable
        },
        methods: {
            removeTask(event) {
                let targetId = event.target.parentElement.id;
                let parent = event.target.parentElement.parentElement.parentElement.id;
                this.tasks[parent].forEach((item, index) => {
                    if (item.id === targetId) {
                        this.tasks[parent].splice(index, 1);
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .board {
        display: flex;
        flex-wrap: nowrap;
        position: relative;
        left: 200px;
        border: 1px solid black;
        padding: 0;
        overflow-x: scroll;
        white-space: nowrap;
        width: 80vw;
    }

    .column__header {
        font-size: 24px;
    }

    .board__column {
        position: relative;
        padding: 0 10px;
        margin: 0;
        white-space: normal;
        min-width: 250px;
    }

    .board__column:after {
        content: "";
        position: absolute;
        border-right: 2px solid black;
        right: 0;
        top: 10%;
        width: 15px;
        height: 80%;
    }

    .board__column:last-child:after {
        border: none;
    }

    .column__list {
        min-height: 75vh;
        height: 100%;
        position: relative;
        padding-top: 40px;
    }
</style>