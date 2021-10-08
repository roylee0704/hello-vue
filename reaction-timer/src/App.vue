<template>
  <h2>Ninja Reaction Timer</h2>
  <button @click="startGame" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @stop="stopGame" />
  <p v-show="showResults">Reaction time: {{ score }} ms</p>
</template>

<script>
import Block from "./components/Block.vue";

export default {
  name: "App",
  components: { Block },
  data: () => ({
    isPlaying: false,
    showResults: false,
    delay: 0,
    score: 0
  }),
  methods: {
    startGame() {
      this.isPlaying = true;
      this.delay = (2 + Math.random() * 5) * 1000;
      this.showResults = false;
    },
    stopGame(reactionTime) {
      this.isPlaying = false;
      this.score = reactionTime;
      this.showResults = true;
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
</style>
