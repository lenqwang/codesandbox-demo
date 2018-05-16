<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <iframe :src="googleImg" @load="loadImg" frameBorder=0></iframe>
    <button type="button" @click="handleButton">点我</button>
    <HelloWorld/>
    <DemoTest />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import DemoTest from "./components/DemoTest";

export default {
  name: "App",
  data() {
    return {
      googleImg: "about:blank"
    };
  },
  components: {
    HelloWorld,
    DemoTest
  },
  methods: {
    handleButton() {
      this.googleImg = "https://www.google.com/doodles";
      this.$demo();
    },

    loadImg() {
      console.log("load image completed!");
    }
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
