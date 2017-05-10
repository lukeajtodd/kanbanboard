<template>
  <div id="app">
    <div v-show="modal" class="overlay" @click="modal = false"></div>
    <div v-show="modal" class="modal">
      <h1>Are you sure?</h1>
      <button class="ofcourse">OFC</button>
      <button class="noway" @click="modal = false">NOWAY</button>
    </div>
    <button class="clearAll" @click="popModal({ callback: clearAll })">CLEAR</button>
    <new-button :tasks="tasks"></new-button>
    <board :tasks="tasks" :popModal="popModal"></board>
  </div>
</template>

<script>
import NewButton from './components/NewButton.vue'
import Board from './components/Board.vue'
export default {
  name: 'app',
  data () {
    return {
      tasks: {},
      modal: false
    }
  },
  components: {
    Board,
    NewButton
  },
  methods: {
    async getTasks() {
      let response = await fetch(`http://localhost:3333/api/tasks`);
      let data = await response.json();
      return data;
    },
    clearAll() {
      this.$socket.emit('clear');
    },
    popModal({ event, callback }) {
      this.modal = true;
      var not_self_event = event;
      if (callback != null) {
        let yes_button = document.querySelector('.ofcourse');
        let new_yes_button = yes_button.cloneNode(true);
        yes_button.parentNode.replaceChild(new_yes_button, yes_button);
        if (not_self_event != null || not_self_event != undefined) {
          new_yes_button.addEventListener('click', function () {
            callback(not_self_event);
          });
        } else {
          new_yes_button.addEventListener('click', callback);
        }
      }
    },
    updateTheStuff() {
      this.$socket.emit('updateTasks');
    }
  },
  beforeMount() {
    this.$options.sockets.updateTasks = (data) => {
      this.tasks = data;
    };
    this.$options.sockets.hideOverlay = (data) => {
      this.modal = data;
    };
    this.getTasks().then(tasks => {
      this.tasks = tasks;
      this.$socket.emit('updateTasks', this.tasks);
    });
  }
}
</script>

<style lang="scss">
body {
  overflow-x: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}

img {
  position: absolute;
  height: 50px;
  width: 50px;
  left: 30px;
  top: 30px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #000;
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

.ofcourse, .noway, .clearAll {
  width: auto;
}

.ofcourse, .noway {
  transform: translateX(50%);
}

.clearAll {
  position: fixed;
  bottom: 14px;
  left: 14px;
  margin: 0;
}

.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: black;
  z-index: 99;
  opacity: 0.6;
}

.modal {
  width: 200px;
  height: 150px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border: 2px solid black;
  padding: 12px;
  z-index: 100;
}
</style>
