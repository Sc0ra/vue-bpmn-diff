<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

defineProps({
  msg: String,
});

ref: count = 0;
</script>

<style scoped></style>
