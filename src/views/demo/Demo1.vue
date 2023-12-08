<template>
  <h1 class="text-20 fw-bold-7">{{ pageInfo.tabName }}</h1>
  <p>{{  pageInfo.description }}</p>

  <!-- demo元件 -->
  <template v-for="(item, idx) in data" :key="`${item.tabName}-${idx}`">
    <!-- 描述 -->
    <div class="bg-gainsboro my-2 p-5">
      <h3 class="text-18 mb-5">
        {{ idx+1 }}. {{ item.description }}
      </h3>
      <component :is="item.component"
                 :item="item"></component>
    </div>
  </template>
</template>

<script setup>
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { usePagesStore } from '@/stores/userStore.js'
import A1 from '@/components/demo1/A1.vue'
import A2 from '@/components/demo1/A2.vue'
import A3 from '@/components/demo1/A3.vue'
import A4 from '@/components/demo1/A4.vue'

// store
const { pageInfo } = storeToRefs(usePagesStore())

// data
const data = reactive([
  {
    description: 'v-click-outside 可得知用戶點擊元素外圍',
    component: A1
  },
  {
    description: 'v-intersect 判斷元素是否進入可視畫面中',
    component: A2
  },
  {
    description: 'v-resize 監聽畫面比例是否有被縮放',
    component: A3
  },
  {
    description: 'v-ripple 讓元素點擊有波紋效果',
    component: A4
  }
])

</script>

<style lang='scss' scope></style>
