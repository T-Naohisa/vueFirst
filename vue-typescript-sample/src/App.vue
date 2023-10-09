<script lang="ts">
import { defineComponent } from 'vue';
export interface Todos {
  isDone: boolean;
  text: string;
}

export default defineComponent({
  data() {
    return {
      todos: [] as Array<Todos>,
      newTodo: '' as string,
      num: 0 as number,
      str: '' as string,
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        isDone: false,
        text: this.newTodo,
      });
      this.newTodo = '';
    },
  },
});
</script>

<template>
  <dev>
    <h1>My ToDo App</h1>
    <input type="text" v-model="newTodo" /><button @click="addTodo">追加</button><button>完了済みを削除する</button>
    <p v-if="todos.length === 0">ToDoがありません。</p>
    <ul v-else>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" /><span>{{ todo.text }}</span>
      </li>
    </ul>
  </dev>
</template>

<style>
body {
  background-color: #eee;
}

.todo-done {
  text-decoration: line-through;
}
</style>
