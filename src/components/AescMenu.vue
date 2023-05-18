<script setup lang="ts">
import { modules } from './data-modules'
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const { t, locale } = useI18n()

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <var-fab>
    <ul text-6>
      <li v-for="(m, i) in modules" :key="`${m}-${i}`">
        <i m.icon w-xs />
      </li>
      <li>
        <a icon-btn :title="t('button.toggle_langs')" @click="toggleLocales()">
          <div i-carbon-language />
        </a>
      </li>
      <li>
        <button icon-btn :title="t('button.toggle_dark')" @click="toggleDark()">
          <div i="carbon-sun dark:carbon-moon" />
        </button>
      </li>
    </ul>
    <template #trigger="{ active }">
      <button>
        <var-icon :name="active ? 'cog-outline' : 'cog'" text-7 animation-class="fade" :transition="300" />
      </button>
    </template>
  </var-fab>
</template>

<style scoped>
.fade {
  transition-property: opacity, transform;
  opacity: 0;
  transform: rotate(90deg)
}
</style>
