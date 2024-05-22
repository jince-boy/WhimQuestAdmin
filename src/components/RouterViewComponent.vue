<script setup lang="ts">
import {useLoadingBar} from 'naive-ui';
import {RouterView} from "vue-router";
import {onMounted} from 'vue';
import useLoadingBarStore from "@/core/pinia/LoadingBarStore.ts";
import useThemeStore from "@/core/pinia/ThemeStore.ts";

const theme = useThemeStore()
const loadingBar = useLoadingBarStore();

// 设置加载条
onMounted(() => {
  loadingBar.setLoadingBar(useLoadingBar());
});

// 监听主题变量
watch(
    () => theme.theme,
    (newTheme) => {
      theme.onThemeChange(newTheme)
    },
    {immediate: true}
)
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
</style>
