<template>
    <div class="board drag">
        <div class="board__column" id="todoList">
            <h1 class="column_header">TO DO</h1>
            <draggable 
                v-model="tasks.todoList"
                @end="itemMoved"
                :options="{ group: 'tasks' }"
                class="column__list">
                <task 
                    :removeTask="removeTask"
                    v-for="item in tasks.todoList" 
                    :id="item.id" 
                    :name="item.name" 
                    :description="item.description" 
                    :taskState="item.state"
                    :key="item.id">
                </task>
            </draggable>
        </div>
        <div class="board__column" id="analysisList">
            <h1 class="column_header">ANALYSIS</h1>
            <draggable 
                v-model="tasks.analysisList"
                @end="itemMoved"
                :options="{ group: 'tasks' }" 
                class="column__list">
                <task 
                    :removeTask="removeTask"
                    v-for="item in tasks.analysisList" 
                    :id="item.id" 
                    :name="item.name" 
                    :description="item.description"
                    :taskState="item.state"
                    :key="item.id">
                </task>
            </draggable>
        </div>
        <div class="board__column" id="devList">
            <h1 class="column_header">DEV</h1>
            <draggable 
                v-model="tasks.devList" 
                @end="itemMoved"
                :options="{ group: 'tasks' }" 
                class="column__list">
                <task 
                    :removeTask="removeTask"
                    v-for="item in tasks.devList" 
                    :id="item.id" 
                    :name="item.name" 
                    :description="item.description" 
                    :taskState="item.state"
                    :key="item.id"></task>
            </draggable>
        </div>
        <div class="board__column" id="blockedList">
            <h1 class="column_header">BLOCKED</h1>
            <draggable 
                v-model="tasks.blockedList"
                @end="itemMoved"
                :options="{ group: 'tasks' }" 
                class="column__list">
                <task 
                    :removeTask="removeTask"
                    v-for="item in tasks.blockedList" 
                    :id="item.id" 
                    :name="item.name" 
                    :description="item.description"
                    :taskState="item.state"
                    :key="item.id"></task>
            </draggable>
        </div>
        <div class="board__column" id="CRList">
            <h1 class="column_header">CR</h1>
            <draggable 
                v-model="tasks.CRList"
                @end="itemMoved"
                :options="{ group: 'tasks' }" 
                class="column__list">
                <task 
                    :removeTask="removeTask"
                    v-for="item in tasks.CRList" 
                    :id="item.id" 
                    :name="item.name" 
                    :description="item.description"
                    :taskState="item.state"
                    :key="item.id"></task>
            </draggable>
        </div>
        <div class="board__column" id="readyTestList">
            <h1 class="column_header">READY FOR TEST</h1>
            <draggable 
                v-model="tasks.readyTestList"
                @end="itemMoved"
                :options="{ group: 'tasks' }" 
                class="column__list">
                <task 
                    :removeTask="removeTask"
                    v-for="item in tasks.readyTestList" 
                    :id="item.id" 
                    :name="item.name" 
                    :description="item.description"
                    :taskState="item.state"
                    :key="item.id"></task>
            </draggable>
        </div>
        <div class="board__column" id="inTestList">
            <h1 class="column_header">IN TESTING</h1>
            <draggable 
                v-model="tasks.inTestList"
                @end="itemMoved"
                :options="{ group: 'tasks' }" 
                class="column__list">
                <task 
                    :removeTask="removeTask"
                    v-for="item in tasks.inTestList" 
                    :id="item.id" 
                    :name="item.name" 
                    :description="item.description"
                    :taskState="item.state"
                    :key="item.id"></task>
            </draggable>
        </div>
        <div class="board__column" id="promoteList">
            <h1 class="column_header">READY TO PROMOTE</h1>
            <draggable 
                v-model="tasks.promoteList"
                @end="itemMoved"
                :options="{ group: 'tasks' }" 
                class="column__list">
                <task 
                    :removeTask="removeTask" 
                    v-for="item in tasks.promoteList" 
                    :id="item.id" 
                    :name="item.name" 
                    :description="item.description"
                    :taskState="item.state"
                    :key="item.id"></task>
            </draggable>
        </div>
        <div class="board__column" id="mergeList">
            <h1 class="column_header">READY TO MERGE</h1>
            <draggable 
                v-model="tasks.mergeList"
                @end="itemMoved"
                :options="{ group: 'tasks' }" 
                class="column__list">
                <task 
                    :removeTask="removeTask"
                    v-for="item in tasks.mergeList" 
                    :id="item.id" 
                    :name="item.name" 
                    :description="item.description"
                    :taskState="item.state"
                    :key="item.id"></task>
            </draggable>
        </div>
        <div class="board__column"  id="mergedList">
            <h1 class="column_header">MERGED</h1>
            <draggable 
                v-model="tasks.mergedList"
                @end="itemMoved"
                :options="{ group: 'tasks' }" 
                class="column__list">
                <task 
                    :removeTask="removeTask"
                    v-for="item in tasks.mergedList" 
                    :id="item.id" 
                    :name="item.name" 
                    :description="item.description"
                    :taskState="item.state"
                    :key="item.id"></task>
            </draggable>
        </div>
        <div class="board__column"  id="releaseList">
            <h1 class="column_header">RELEASE TEST</h1>
            <draggable 
                v-model="tasks.releaseList"
                @end="itemMoved"
                :options="{ group: 'tasks' }" 
                class="column__list">
                <task 
                    :removeTask="removeTask"
                    v-for="item in tasks.releaseList" 
                    :id="item.id" 
                    :name="item.name" 
                    :description="item.description"
                    :taskState="item.state"
                    :key="item.id"></task>
            </draggable>
        </div>
        <div class="board__column" id="doneList">
            <h1 class="column_header">DONE</h1>
            <draggable 
                v-model="tasks.doneList"
                @end="itemMoved"
                :options="{ group: 'tasks' }" 
                class="column__list">
                <task 
                    :removeTask="removeTask"
                    v-for="item in tasks.doneList" 
                    :id="item.id" 
                    :name="item.name" 
                    :description="item.description"
                    :taskState="item.state"
                    :key="item.id"></task>
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
                let targetId = this.getClosest(event.target, '.task').id;
                let parentId = this.getClosest(event.target, '.board__column').id;
                
                this.$socket.emit('removeTask', { targetId, parentId });
            },
            itemMoved() {
                this.$socket.emit('updateTasks', this.tasks);
            },
            getClosest(elem, selector) {
                // Element.matches() polyfill
                if (!Element.prototype.matches) {
                    Element.prototype.matches =
                        Element.prototype.matchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector ||
                        Element.prototype.oMatchesSelector ||
                        Element.prototype.webkitMatchesSelector ||
                        function(s) {
                            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                                i = matches.length;
                            while (--i >= 0 && matches.item(i) !== this) {}
                            return i > -1;
                        };
                }

                // Get closest match
                for ( ; elem && elem !== document; elem = elem.parentNode ) {
                    if ( elem.matches( selector ) ) return elem;
                }

                return null;
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
        border: 2px solid black;
        padding: 0;
        overflow-x: scroll;
        white-space: nowrap;
        width: 80vw;
    }

    .column__header {
        font-size: 24px;
    }

    .board__column {
        text-align: center;
        position: relative;
        padding: 0 10px;
        padding-bottom: 20px;
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
        position: relative;
        padding-top: 40px;
    }
</style>