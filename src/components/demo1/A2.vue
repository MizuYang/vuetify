<template>
  <h4 class="text-18 mb-5">向下/向上滾動到該元素，背景色變白色</h4>

  <!-- 滾動容器 -->
  <div class="w-25 text-center mx-auto"
       :class="bgColor"
       style="max-height:300px;overflowY:scroll">
    <div style="height:850px;">
      <div class="text-center"
           style="width:100%;
                  height:140px;margin-top:450px;
                  background-color:red;">
        <p v-intersect="onIntersect" style="font-size:30px;">進入可視範圍，背景變灰</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// data
const bgColor = ref('bg-dark')

function onIntersect (canViewElement) {
  bgColor.value = canViewElement ? 'bg-gray' : 'bg-dark'
}
</script>

<style lang='scss' scope></style>
