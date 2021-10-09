<template>
  <div v-show="showBlock" class="block" @click="stop">Click Me</div>
</template>

<script>
export default {
  name: "Block",
  props: {
    delay: Number
  },
  data: () => ({
    showBlock: false,
    steps: 0,
    timer: null
  }),
  mounted() {
    setTimeout(() => {
      this.start();
    }, this.delay);
  },
  methods: {
    start() {
      this.showBlock = true;
      this.timer = setInterval(() => {
        this.steps += 10;
      }, 10);
    },
    stop() {
      this.$emit("stop", this.steps);
      this.showBlock = false;
      clearInterval(this.timer);
    }
  }
};
</script>

<style>
.block {
  border-radius: 10px;
  padding: 100px 0;
  cursor: pointer;
  text-align: center;
  color: white;
  width: 400px;
  background-color: #0faf87;
  margin: 40px auto;
  font-weight: bold;
}
</style>