<script setup lang="ts">
const props = defineProps<{
  title: string
  link: string
  logo: string
}>()
</script>

<template>
  <div>
    <div border-1 px-1 class="w-logo">
      <var-link :href="link" target="_blank" underline="none" cursor-pointer>
        <img :src="logo" :alt="title">
      </var-link>
    </div>
    <div border-1 px-0 class="w-title">
      <var-link :href="link" target="_blank" underline="none" cursor-pointer>
        {{ title }}
      </var-link>
    </div>
  </div>
</template>

<style scoped>
div.w-logo {
  height: 80%;
}
div.w-title {
  height: 20%;
}
</style>
