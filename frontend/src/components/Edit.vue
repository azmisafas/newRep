<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="number">
    <h1 v-if="number >= 1 || number <= 0">Ini angka {{ number }}</h1>
    <h1 v-else>{{ number }}</h1>
    <h1>{{item}}</h1>
    <button @click="addnumber">addnumber</button>
  </div>
</template>

<script>
export default {
  name: 'Create',
  data () {
    return {
      msg: 'Welcome to Your Uvuvwevwevwe Onyetenyevwe Ossas',
      number: 1,
      arrayX: {
        x: 'array1',
        y: 'array2'
      }
    }
  },
  methods: {
    addnumber () {
      this.number++
    }
  },
  mounted () {
    this.number = 200
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
