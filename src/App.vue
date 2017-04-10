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
  vuex: {
    getters: {
      getTasks: state => state.tasks
    }
  },
  data () {
    return {
      tasks: this.getTasks
    }
  },
  components: {
    Board,
    NewButton
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
  color: #42b983;
}
</style>
