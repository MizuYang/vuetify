<template>
  <div v-resize="onResize"></div>

  {{ windowSize }}
  <p>當前縮放比例 {{ devicePixelRatio }}% </p>

  <div class="mt-5">
    <button type='button'
            class='btn btn-primary me-5'
            @click='changeSize("add")'>
      放大
    </button>
    <button type='button'
            class='btn btn-primary'
            @click='changeSize("lose")'>
      縮小
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// data
const windowSize = ref('')
const devicePixelRatio = ref(getDevicePixelRatio()) // 當前的縮放比例

onMounted(() => {
  onResize()
})

function onResize () {
  console.log('縮放比例')
  windowSize.value = { x: window.innerWidth, y: window.innerHeight }
  devicePixelRatio.value = getDevicePixelRatio()
}
function changeSize (status) {
  let size = devicePixelRatio.value
  size = status === 'add' ? size + 10 : size - 10
  devicePixelRatio.value = size
  document.documentElement.style.zoom = `${size}%`
}
// 取得當前縮放比例
function getDevicePixelRatio () {
  return Math.floor(window.devicePixelRatio * 100)
}
</script>

<style lang='scss' scope></style>
