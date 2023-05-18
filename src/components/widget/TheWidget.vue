<script setup lang="ts">
// widget props
const props = defineProps<{
  title: string
  href: string
  icon: string
  intro: string
  x: number
  y: number
  w: number
  h: number
}>()

// Logo mask transition
const translateY = ref('100%')
function handleHover(hovering: boolean) {
  translateY.value = hovering ? '0%' : '100%'
}

// while click mask, open the href in a new tab
function handleMaskClick() {
  window.open(props.href, props.title)
}
</script>

<template>
  <var-paper :elevation="5" class="dark: op-75">
    <div v-hover="handleHover" class="w-logo" flex items-center justify-center rd-3 px-1>
      <img :src="icon" h-12>
      <div class="w-mask" :style="{ transform: `translateY(-${translateY})` }" @click="handleMaskClick">
        {{ intro }}
      </div>
    </div>
    <div px-0 class="w-title dark:text-gray-9">
      <var-link :href="href" :target="title" underline="none" cursor-pointer>
        {{ title }}
      </var-link>
    </div>
  </var-paper>
</template>

<style scoped>
div.w-logo {
  /* width: 100%; */
  height: 70%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

div.w-title {
  /* width: 100%; */
  height: 30%;
}

.w-mask {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 81px;
  transition: all 0.3s;
  color: #fff;
  background-color: var(--color-primary);
  font-size: 10px;
}
</style>
