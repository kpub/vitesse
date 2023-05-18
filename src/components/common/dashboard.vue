<script setup lang="ts">
import apps from './data-apps'
</script>

<template>
  <div border-1>
    <var-row mx-30>
      <var-col v-for="(app, index) in apps" :key="app.name" :span="2" py-2 direction="column" justify="center" align="center">
        <var-link v-if="index < 48" :href="app.url" :target="app.name">
          <var-paper v-hover="{ color: '#fff', background: 'var(--color-info)' }" :elevation="4" :radius="16" cursor-pointer>
            <var-image v-if="app.logo" src="app.logo" />
            <var-icon v-else name="image" :size="80" />
          </var-paper>
        </var-link>
        <div v-if="index < 48">
          {{ app.name }}
        </div>
      </var-col>
    </var-row>
  </div>
<!--
  <var-row h-600 w-7xl>
    <var-col :span="24" h-full>
      <vue-waterfall-easy :imgs-arr="apps" width="100" height="200" />
    </var-col>
  </var-row> -->
</template>

<style scoped>

</style>
