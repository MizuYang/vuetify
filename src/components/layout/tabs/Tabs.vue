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

// data
const tabs = ref({
  demo1: {
    fileName: 'demo1',
    tabName: '功能嘗試',
    description: '玩玩可能會用到的功能'
  }
})
const curTab = ref(null)

onMounted(() => {
  console.log(curTab.value)
})
</script>

<style lang='scss' scope>

</style>
