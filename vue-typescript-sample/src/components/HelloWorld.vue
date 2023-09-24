<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ fullName }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Options, Vue } from 'vue-class-component';
export interface User {
  firstName: string;
  lastName: string;
  age: number;
}

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: { type: String as PropType<string> },
    user: { type: Object as PropType<User>, required: true },
  },
  computed: {
    fullName(): string {
      return this.user.firstName + ' ' + this.user.lastName;
    },
  },
});
</script>
