<template>
  <div ref="container"></div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, watchEffect } from "vue";
import BpmnJS from "bpmn-js";

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});

ref: diagramXML = "";

ref: container = null;

onMounted(() => {
  const bpmnViewer = new BpmnJS({
    container,
  });

  watchEffect(async () => {
    if (diagramXML) {
      bpmnViewer.importXML(diagramXML);
      bpmnViewer.get("canvas").zoom("fit-viewport");
    }
  });
});

const fetchDiagram = async (url: string) => {
  const response = await fetch(url);
  diagramXML = await response.text();
};

watchEffect(() => {
  fetchDiagram(props.url);
});
</script>

<style lang="postcss" scoped></style>
