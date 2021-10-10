<template>
  <h3>Todos</h3>

  <div class="todos">
    <div class="todo" v-for="todo in allTodos" :key="todo.id">
      {{ todo.title }}
      <font-awesome-icon
        class="icon"
        :icon="['fas', 'trash']"
        @click="onDelete(todo.id)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  computed: {
    ...mapGetters(["allTodos"])
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"]),
    onDelete: function(id) {
      this.deleteTodo(id);
    }
  },
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
}

.todo {
  border: 1px solid black;
  padding: 1rem;
  text-align: center;
  border-radius: 5px;
}

.icon {
  cursor: pointer;
}
</style>