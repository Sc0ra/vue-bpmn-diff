<template>
  <h1 class="text-2xl">{{ msg }}</h1>
  <button @click="count++" class="btn">count is: {{ count }}</button>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

ref: count = 0;
</script>

<style lang="postcss" scoped>
.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md bg-green-400 text-white;
}
</style>
