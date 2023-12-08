<template>
  {{ pageInfo }}
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { usePagesStore } from '@/stores/userStore.js'

// store
const { pageInfo } = storeToRefs(usePagesStore())

</script>

<style lang='scss' scope></style>
