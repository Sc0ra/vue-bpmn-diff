<template>
  <BpmnViewer url="/diagram.bpmn" class="h-screen"></BpmnViewer>
</template>

<script setup lang="ts">
import BpmnViewer from "./components/BpmnViewer.vue";
</script>

<style lang="postcss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
