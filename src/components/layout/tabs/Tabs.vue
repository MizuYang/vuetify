<template>
  <v-card>
    <v-tabs
      v-model="curTab"
      bg-color="red-lighten-2"
    >
      <v-tab
        v-for="item in tabs"
        :key="item.fileName"
        :value="item"
        @click="item.clickMethod(item)"
      >
        {{ item.tabName }}
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue' // eslint-disable-line
import { useRoute, useRouter } from 'vue-router'
import { usePagesStore } from '@/stores/pagesStore.js'

// store
const { getPageInfo } = usePagesStore()

// router
const route = useRoute()
const router = useRouter()

// data
const tabs = ref({
  demo1: {
    fileName: 'demo1',
    tabName: '指令',
    description: '玩玩可能會用到的功能',
    clickMethod
  },
  demo2: {
    fileName: 'demo2',
    tabName: '顏色',
    description: '顏色設定、客製化',
    clickMethod
  },
  demo3: {
    fileName: 'demo3',
    tabName: '過度動畫',
    description: 'Transitions 動畫效果',
    clickMethod
  }
})
const curTab = ref(null)

onMounted(() => {
  const pageName = route.name === 'home' ? 'demo1' : route.name // 預設demo1
  pushPage(tabs.value[pageName])
})

function clickMethod (item) {
  console.log('切換分頁:', item)
  pushPage(item)
}
function pushPage (item) {
  const pageName = item?.fileName || 'demo1' // 預設demo1
  const pageInfo = tabs.value[pageName]
  getPageInfo(pageInfo)
  curTab.value = pageInfo
  router.push(pageName)
}
</script>

<style lang='scss' scope>

</style>
