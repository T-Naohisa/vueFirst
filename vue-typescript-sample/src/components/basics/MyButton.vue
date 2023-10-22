<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<template>
  <button class="my-btn">
    <slot />
  </button>
</template>
<style>
.my-btn {
  color: #fff;
  background-color: #333;
  margin-left: 0.5em;
  border-radius: 0.5em;
}
</style>
