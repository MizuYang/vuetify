<template>
  <!-- Tabs -->
  <Tabs />

  <!-- 頁面元件 -->
  <RouterView />
  <!-- <component :is="curComponent"></component> -->
</template>

<script setup>
import { ref } from 'vue' // eslint-disable-line
import Tabs from '@/components/layout/tabs/Tabs.vue'

// const curComponent = ref()
</script>

<style lang='scss' scope></style>
