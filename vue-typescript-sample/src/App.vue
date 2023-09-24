<template>
  <HelloWorld msg="100" :user="user" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld, { User } from './components/HelloWorld.vue';
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      person: {
        firstName: 'John',
        lastName: 'doe',
        age: 30,
      },
    };
  },
  computed: {
    user(): User {
      return this.person;
    },
  },
});
</script>
