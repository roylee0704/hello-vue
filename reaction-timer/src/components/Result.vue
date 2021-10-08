<template>
  <p class="result">Reaction time: {{ score }} ms</p>
</template>

<script>
export default {
  name: "Result",
  props: {
    score: Number
  }
};
</script>

<style>
</style>