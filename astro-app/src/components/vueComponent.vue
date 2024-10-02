<template>
      <component :is="ViteApp" />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const ViteApp = defineAsyncComponent(() =>
  import("vueApp/App")
);
</script>