<template>
  <v-switch v-model="clickOutsideEnabled"
            :label="`點擊外部 ${clickOutsideEnabled ? '啟用' : '禁用'}`"></v-switch>
  <v-card
    v-click-outside="{
      handler: onClickOutside,
      closeConditional: onCloseConditional
    }"
    :color="active ? 'primary' : undefined"
    :dark="active"
    class="mx-auto"
    height="150"
    width="150"
    rounded="xl"
    @click="active = true"
  >
    <div class="text-h6 text-md-h4 fill-height d-flex align-center justify-center">
      {{ active ? '點擊外面' : '點我' }}
    </div>
  </v-card>

</template>

<script setup>
import { ref } from 'vue'

// data
const active = ref(false)
const clickOutsideEnabled = ref(true) // 判斷是否禁用點擊外部

const onClickOutside = () => {
  active.value = false
  console.log('點擊元素外圍')
}
const onCloseConditional = (e) => {
  return clickOutsideEnabled.value
}
</script>
