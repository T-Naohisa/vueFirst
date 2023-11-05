import { defineStore } from 'pinia';
export interface Todos {
  isDone: boolean;
  text: string;
}
export const useTodosStore = defineStore('todos', {
  state: () => {
    return {
      todos: [
        {
          isDone: false,
          text: 'Todo in Pinia Store!',
        },
      ],
    };
  },
  actions: {
    addTodo(todo: Todos) {
      this.todos.push(todo);
    },
    clearTodo() {
      this.todos = this.todos.filter((todo) => !todo.isDone);
    },
  },
});
