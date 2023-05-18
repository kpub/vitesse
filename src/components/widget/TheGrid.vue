<script setup lang="ts">
// import mock data
import apps from './data'
</script>

<template>
  <var-row justify="center" px-30>
    <template v-for="(app, index) in apps" :key="index">
      <var-col
        :span="app.w === undefined ? 2 : app.w * 2"
        py-2
        text-center
      >
        <TheWidget :title="app.title" :href="app.url" :icon="app.icon" :intro="app.intro" />
      </var-col>
    </template>
  </var-row>
</template>
