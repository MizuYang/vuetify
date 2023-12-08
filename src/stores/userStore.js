import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePagesStore = defineStore('userInfoStore', () => {
  // data
  const pageInfo = ref({})

  function getPageInfo (info) {
    console.log(info)
    pageInfo.value = info
  }

  return {
    pageInfo,
    getPageInfo
  }
})
