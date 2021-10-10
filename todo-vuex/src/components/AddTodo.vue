<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo..." />
        <input type="submit" value="submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data: () => ({
    title: ""
  }),
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit: function() {
      this.addTodo(this.title);
      this.title = "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  border: 1px solid #41b883;
  padding: 10px;
}

input[type="submit"] {
  flex: 2;
  border: 1px solid #41b883;
  background: #41b883;
  color: white;
  cursor: pointer;
}
</style>