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
    <!-- <v-card-text class="text-center">
      <v-btn
        :disabled="!length"
        variant="text"
        @click="decreaseLength"
      >
        Remove Tab
      </v-btn>
      <v-divider
        class="mx-4"
        vertical
      ></v-divider>
      <v-btn
        variant="text"
        @click="increaseLength"
      >
        Add Tab
      </v-btn>
    </v-card-text> -->
  </v-card>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue' // eslint-disable-line
import { useRoute, useRouter } from 'vue-router'
import { usePagesStore } from '@/stores/userStore.js'

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
    clickMethod (item) {
      console.log('切換分頁:', item)
      getPageInfo(item)
    }
  }
})
const curTab = ref(null)

onMounted(() => {
  const page = route.name === 'home' ? 'demo1' : route.name // 預設demo1
  const pageInfo = tabs.value[page]
  getPageInfo(pageInfo)
  router.push(page)
})
</script>

<style lang='scss' scope>

</style>
