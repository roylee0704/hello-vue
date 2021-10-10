import axios from "axios";

const state = {
  todos: [
    {
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
  ],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos" //?_limit=5
    );
    commit("setTodos", response.data);
  },
};
const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  },
};

export default {
  getters,
  state,
  actions,
  mutations,
};
