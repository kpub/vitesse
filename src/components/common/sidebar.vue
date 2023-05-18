<script setup lang="ts">
// import categories
import categories from './data-category'
</script>

<template>
  <var-sticky :offset-top="0" float-right w-12 class="h-full bg-orange-400">
    <div justify="center" py-10>
      <div v-hover="{ color: '#fff', background: 'var(--color-info)' }" py-3>
        <var-icon name="account-circle" text-3xl />
      </div>
      <div py-10 />
      <div v-for="c in categories" :key="`cate-${c}`" v-hover="{ color: '#fff', background: 'var(--color-info)' }" py-3>
        <var-icon :name="c.icon" text-3xl />
      </div>
      <div py-26 />
      <div v-hover="{ color: '#fff', background: 'var(--color-info)' }" mb py-3>
        <var-icon name="cog" text-3xl />
      </div>
    </div>
  </var-sticky>
</template>

<style scoped>

</style>
