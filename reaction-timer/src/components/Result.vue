<template>
  <p class="result">Reaction time: {{ score }} ms</p>
  <span class="rank">{{ rank }}</span>
</template>

<script>
export default {
  name: "Result",
  props: {
    score: Number
  },
  computed: {
    rank() {
      if (this.score < 250) {
        return "Ninja Fingers";
      } else if (this.score < 400) {
        return "Rapid Reflexes";
      } else {
        return "Snail pace...";
      }
    }
  }
};
</script>

<style>
.rank {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>