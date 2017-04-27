<template>
  <div id="app">
    <new-button :tasks="tasks"></new-button>
    <board :tasks="tasks"></board>
  </div>
</template>

<script>
import NewButton from './components/NewButton.vue'
import Board from './components/Board.vue'
export default {
  name: 'app',
  data () {
    return {
      tasks: {}
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
    updateTheStuff() {
      this.$socket.emit('updateTasks');
    }
  },
  beforeMount() {
    this.$options.sockets.updateTasks = (data) => {
      this.tasks = data;
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
</style>
