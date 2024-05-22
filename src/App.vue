<script setup lang="ts">
import {themeOverrides} from "@/core/config/NaiveTheme.ts";
import useThemeStore from "@/core/pinia/ThemeStore.ts";
import RouterViewComponent from "@/components/RouterViewComponent.vue";

const theme = useThemeStore()
</script>

<template>
  <n-config-provider :theme="theme.getTheme()" :theme-overrides="themeOverrides">
    <!-- 信息-->
    <n-message-provider>
      <!-- 通知-->
      <n-notification-provider>
        <!-- 对话框-->
        <n-dialog-provider>
          <!-- 加载条-->
          <n-loading-bar-provider>
            <RouterViewComponent/>
          </n-loading-bar-provider>
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped>

</style>
