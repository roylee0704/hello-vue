<template>
  <h2>Ninja Reaction Timer</h2>
  <button @click="startGame" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @stop="stopGame" />
  <Result v-if="showResult" :score="score" />
</template>

<script>
import Block from "./components/Block.vue";
import Result from "./components/Result.vue";

export default {
  name: "App",
  components: { Block, Result },
  data: () => ({
    isPlaying: false,
    showResult: false,
    delay: 0,
    score: 0
  }),
  methods: {
    startGame() {
      this.isPlaying = true;
      this.delay = (2 + Math.random() * 5) * 1000;
      this.showResult = false;
    },
    stopGame(reactionTime) {
      this.isPlaying = false;
      this.score = reactionTime;
      this.showResult = true;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background-color: #0faf87;
  color: white;
  margin: 10px;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  letter-spacing: 1px;
  margin: 10px;
}
button[disabled] {
  cursor: not-allowed;
  opacity: 0.2;
}
</style>
