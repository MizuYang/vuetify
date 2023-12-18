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
import { usePagesStore } from '@/stores/pagesStore.js'
import E1 from '@/components/demo5/E1.vue'
import E2 from '@/components/demo5/E2.vue'
import E3 from '@/components/demo5/E3.vue'

// store
const { pageInfo } = storeToRefs(usePagesStore())

// data
const data = reactive([
  {
    description: '基本使用',
    component: E1
  },
  {
    description: '#headers',
    component: E2
  },
  {
    description: '#item、#item.keyName',
    component: E3
  }
])

</script>

<style lang='scss' scope></style>
