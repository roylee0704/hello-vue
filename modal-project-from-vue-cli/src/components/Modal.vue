<template>
  <div class="backdrop">
    <div class="modal">
      <p>Modal Content</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);
}

.modal {
  margin: 100px auto;
  padding: 20px;
  width: 400px;
  border-radius: 10px;
  background: #fff;
}
</style>