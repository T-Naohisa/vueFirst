<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Todos } from './TodoAdd.vue';
import MyButton from './basics/MyButton.vue';
export default defineComponent({
  components: {
    MyButton,
  },
  props: {
    todos: Array as PropType<Array<Todos>>,
  },
  methods: {
    openEditMode() {
      this.$router.push('/edit');
    },
  },
});
</script>

<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <input type="checkbox" v-model="todo.isDone" /><span :class="{ 'todo-done': todo.isDone }">{{ todo.text }}</span>
      <MyButton @click="openEditMode">編集</MyButton>
    </li>
  </ul>
</template>
