<template>
  <div id="app">
    <Header :title="title"/>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{ hello }}</h1>
    <ul>
      <li v-for="(item, index) in list">
        {{index + 1 }} {{ item }}
      </li>
      <li v-for="person in people">
        {{ person.name }}
      </li>
      <li v-for="(value, key) in profile">
        {{key}}: {{ value }}
      </li>
    </ul>
    <HelloWorld
    :key="person.id"
    v-for="person in people" 
    msg="Welcome to Your Vue.js App"/>
  </div>
</template>


<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  data() {
    return {
      hello: "Hello World",
      title: "Vue Movie DB",
      list: ["Penguin", "Turtle", "Red Panda"],
      people: [{
        id: "1",
        name: "Matt"
      },{
        id: "2",
        name: "Scott"
      }],
      profile: {
        name: 'Matt',
        age: 37,
        job: 'Developer'
      }
    };
  },
  components: {
    HelloWorld,
    Header
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
