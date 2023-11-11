<script lang="ts">
import { defineComponent } from 'vue';
import MyButton from 'src/components/basics/MyButton.vue';
export interface Todos {
  isDone: boolean;
  text: string;
}

export default defineComponent({
  components: {
    MyButton,
  },
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
    <input type="text" v-model="newTextTodo" /><MyButton @click="todoAdd">追加</MyButton
    ><MyButton @click="$emit('delete-done')">完了済みを削除する</MyButton>
  </dev>
</template>
