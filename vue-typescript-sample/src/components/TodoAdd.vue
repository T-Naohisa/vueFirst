<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  emits: ['delete-done', 'add-todo'],
  data() {
    return {
      newTextTodo: '' as string,
    };
  },
  methods: {
    todoAdd() {
      this.$emit('add-todo', this.newTextTodo);
      this.newTextTodo = '';
    },
  },
});
</script>

<template>
  <dev>
    <input type="text" v-model="newTextTodo" /><button @click="todoAdd">追加</button
    ><button @click="$emit('delete-done')">完了済みを削除する</button>
  </dev>
</template>
