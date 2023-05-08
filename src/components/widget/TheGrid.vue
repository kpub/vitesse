<script setup lang="ts">
const links = [{ title: 'DOA', url: 'https://doa.envision-aesc.cn/', logo: '' }, { title: '2PP', url: 'http://tech.envision-aesc.cn/tpp/index', logo: '' }]
</script>

<template>
  <var-row :gutter="5">
    <var-col v-for="(link, index) in links" :key="index" :span="2">
      <TheWidget :title="link.title" :link="link.url" :logo="link.logo" />
    </var-col>
  </var-row>
</template>
