<template>
  <RouterView />
</template>

<script setup>
console.log(import.meta.env.VITE_APP_TITLE)

</script>

<style lang="scss">
@import "src/assets/styleSheets/all.scss";
@import '@mdi/font/css/materialdesignicons.min.css';
</style>
