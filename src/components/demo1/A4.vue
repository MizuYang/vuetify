<template>
  <div class="d-flex align-items-center my-6">
    <!-- 調色盤 -->
    <div class="me-10" style="min-width:100px;">
      <label for='exampleColorInput' class='form-label'>{{ useColor }}</label>
      <input type='color'
            class='form-control form-control-color'
            id='exampleColorInput'
            title='Choose your color'
            v-model="useColor">
    </div>
    <div v-ripple="useColor"
          class="position-relative border border-secondary"
          style="width:100px;
                height:100px;"
          :style="`color:${useColor}`">
      <span class="position-absolute-center text-30 w-100 text-dark text-center">點我</span>
    </div>
  </div>
  <v-list>
    <v-list-item
      v-for="color in ['primary', 'secondary', 'info', 'success', 'warning', 'error']"
      :key="color"
      v-ripple="{ class: `text-${color}` }"
    >
      <v-list-item-title>v-ripple="{ class: `text-{{ color }}` }"</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { ref } from 'vue'

// data
const useColor = ref('#563d7c')
</script>

<style lang='scss' scope></style>
