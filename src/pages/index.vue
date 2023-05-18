<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

// const { t } = useI18n()
</script>

<template>
  <div h-screen w-screen overflow-hidden>
    <!-- sidebar -->
    <Sidebar />

    <!-- main content -->
    <div h-full>
      <TimeNow h-3xl />
      <Dashboard bg-gray-4 />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
