<script lang="ts">
import { defineComponent } from 'vue';
import { mapStores, mapActions } from 'pinia';
import { useTodosStore } from 'src/stores/todos';
import TodoAdd from 'src/components/TodoAdd.vue';
import TodoList from 'src/components/todoList.vue';

export interface Todos {
  isDone: boolean;
  text: string;
}

export default defineComponent({
  name: 'HomeView',
  components: {
    TodoAdd,
    TodoList,
  },
  computed: {
    ...mapStores(useTodosStore),
  },
  methods: {
    ...mapActions(useTodosStore, ['addTodo', 'clearTodo']),
    addNewTodo(newTextTodo: string) {
      if (newTextTodo === '') {
        alert('文字を入力してください。');
        return;
      }
      this.addTodo({
        isDone: false,
        text: newTextTodo,
      });
    },
    clearDoneTodos() {
      // チェックボックスにチェックのないもののみ抽出して新しいtodoリストを作成する
      this.clearTodo();
    },
  },
});
</script>

<template>
  <dev>
    <TodoAdd @delete-done="clearDoneTodos" @add-todo="addNewTodo" />
    <p v-if="todosStore.todos.length === 0">ToDoがありません。</p>
    <TodoList v-else :todos="todosStore.todos" />
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
