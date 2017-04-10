import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: {
        todoList: [
            { name: 'task 1', description: 'temp description' },
            { name: 'task 2', description: 'temp description' },
            { name: 'task 3', description: 'temp description' },
            { name: 'task 4', description: 'temp description' }
        ],
        analysisList: [
            
        ],
        devList: [
            
        ],
        blockedList: [
            
        ],
        CRList: [
            
        ],
        readyTestList: [
            
        ],
        inTestList: [
            
        ],
        promoteList: [
            
        ],
        mergeList: [
            
        ],
        mergedList: [

        ],
        releaseList: [

        ],
        doneList: [

        ]
      }
  },
  mutations: {
    addTask: function(state, task) {
      state.todoList.push(task)
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
