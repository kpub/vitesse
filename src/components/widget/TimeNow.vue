<script setup lang='ts'>
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)
const timeStr = ref()
const dayStr = ref()
function getTime() {
  timeStr.value = dayjs().format('HH:mm:ss')
}
function getDay() {
  dayStr.value = dayjs().format('M/D dddd')
}

let timer: any = 0

onMounted(() => {
  getTime()
  getDay()
  timer = setInterval(getTime, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
  timer = 0
})
</script>

<template>
  <div>
    <label text-6xl>{{ timeStr }}</label>
  </div>
  <div>
    <label>{{ dayStr }}</label>
  </div>
</template>
