<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<template>
  <dev>
    <router-link to="/">Home</router-link>
    <router-link to="/hello"> Hello</router-link>
    <h1>My ToDo App</h1>
    <router-view> </router-view>
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
