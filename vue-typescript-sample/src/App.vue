<script lang="ts">
import { defineComponent } from 'vue';
import TodoAdd from './components/TodoAdd.vue';
import TodoList from './components/todoList.vue';

export interface Todos {
  isDone: boolean;
  text: string;
}

export default defineComponent({
  components: {
    TodoAdd,
    TodoList,
  },
  data() {
    return {
      todos: [] as Array<Todos>,
      num: 0 as number,
      str: '' as string,
    };
  },
  methods: {
    addTodoList(newTextTodo: string) {
      if (newTextTodo === '') {
        alert('文字を入力してください。');
        return;
      }
      this.todos.push({
        isDone: false,
        text: newTextTodo,
      });
    },
    clearDoneTodos() {
      // チェックボックスにチェックのないもののみ抽出して新しいtodoリストを作成する
      this.todos = this.todos.filter((todo) => !todo.isDone);
    },
  },
});
</script>

<template>
  <dev>
    <h1>My ToDo App</h1>
    <TodoAdd @delete-done="clearDoneTodos" @add-todo="addTodoList" />
    <p v-if="todos.length === 0">ToDoがありません。</p>
    <TodoList v-else :todos="todos" />
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
