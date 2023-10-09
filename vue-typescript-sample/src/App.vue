<script lang="ts">
import { defineComponent } from 'vue';
export interface Todos {
  isDone: boolean;
  text: string;
}

export default defineComponent({
  data() {
    return {
      todos: [
        // {
        //   isDone: true,
        //   text: 'Vueをマスターする',
        // },
        // {
        //   isDone: false,
        //   text: '牛乳を買う',
        // },
        // {
        //   isDone: false,
        //   text: '家賃を払う',
        // },
      ] as Array<Todos>,
      num: 0 as number,
      str: '' as string,
    };
  },
  methods: {},
});
</script>

<template>
  <dev>
    <h1>My ToDo App</h1>
    <input type="text" /><button>追加</button><button>完了済みを削除する</button>
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
