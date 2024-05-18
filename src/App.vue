<script setup lang="ts">
import {themeOverrides} from "@/core/config/NaiveTheme.ts";
import useThemeStore from "@/core/pinia/ThemeStore.ts";
// import "@/core/router/permission.ts"

const theme = useThemeStore()

watch(
    () => theme.theme,
    (newTheme) => {
      theme.onThemeChange(newTheme)
    },
    {immediate: true}
)
</script>

<template>
  <n-config-provider :theme="theme.getTheme()" :theme-overrides="themeOverrides">
    <!-- 加载条-->
    <n-loading-bar-provider>
      <router-view></router-view>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style scoped>

</style>
