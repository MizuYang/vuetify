<template>
  <!-- Tabs -->
  <Tabs />

  <!-- 頁面元件 -->
  <div class="container mt-10 mb-15">
    <RouterView />
  </div>
</template>

<script setup>
import Tabs from '@/components/layout/tabs/Tabs.vue'
</script>

<style lang='scss' scope></style>
