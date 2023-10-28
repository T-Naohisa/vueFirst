<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Todos } from './TodoAdd.vue';
export default defineComponent({
  props: {
    todos: Array as PropType<Array<Todos>>,
  },
});
</script>

<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <input type="checkbox" v-model="todo.isDone" /><span :class="{ 'todo-done': todo.isDone }">{{ todo.text }}</span>
    </li>
  </ul>
</template>
