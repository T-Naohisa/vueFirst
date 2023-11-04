<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ fullName }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export interface User {
  firstName: string;
  lastName: string;
  age: number;
}

export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      msg: 'HelloWorld' as string,
      user: {
        firstName: 'vue' as string,
        lastName: '太郎' as string,
        age: 20 as number,
      } as User,
    };
  },
  computed: {
    fullName(): string {
      return this.user.firstName + ' ' + this.user.lastName;
    },
  },
});
</script>
