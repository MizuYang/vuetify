<template>
  <div class="mb-15">
    <template v-for="(value,keyName) in setup" :key="value.enName">
      <div class='form-check d-flex align-items-center'>
        <input class='form-check-input'
               type='checkbox'
               :id='value.enName'
               v-model="setup[keyName].value">
        <label class='form-check-label ms-3'
               :for='value.enName'>
          {{ value.cnName }}
        </label>
      </div>
    </template>
  </div>

  <v-autocomplete
    label="Autocomplete"
    :items="items"
    variant="outlined"
    :clearable="setup.clearable.value"
    :chips="setup.chips.value"
    :multiple="setup.multiple.value"
  ></v-autocomplete>
</template>

<script setup>
import { ref } from 'vue'

// data
const items = ref([
  '陳小明',
  '林美玲',
  '張家豪',
  '李雅婷',
  '王大翔',
  '吳佳怡',
  '黃明志',
  '許小琪',
  '吳宗翰',
  '吳思婷',
  '楊宏達',
  '周美玲',
  '劉建宏',
  '吳佩玲',
  '蕭明潔',
  '鄭宗翰',
  '洪美玲',
  '曾家豪',
  '彭雅婷',
  '王大翔',
  '王思婷',
  '林宏達',
  '王美玲',
  '林家豪',
  '余雅婷',
  '顏大翔',
  '王佳怡',
  '王明志',
  '李小琪',
  '楊宗翰',
  '楊思婷',
  '林宏達',
  '楊美玲',
  '李家豪',
  '馮雅婷',
  '孫大翔',
  '萬佳怡',
  '雷明志',
  '賴小琪',
  '李宗翰',
  '魏思婷',
  '李宏達',
  '李美玲',
  '李家豪',
  '江雅婷',
  '林大翔',
  '林佳怡',
  '小明志',
  '小小琪'
])
const setup = ref({
  clearable: {
    enName: 'clearable',
    cnName: '顯示清除按鈕',
    value: false
  },
  chips: {
    enName: 'chips',
    cnName: '讓選項加上 tag 樣式',
    value: false
  },
  multiple: {
    enName: 'multiple',
    cnName: '可多選',
    value: false
  }
})

</script>

<style lang='scss' scope></style>
