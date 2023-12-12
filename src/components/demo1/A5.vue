<template>
  <div>
    <v-row
      justify="center"
      align="center"
    >
      <v-col class="text-center">
        <div class="text-subtitle-2">Offset Top</div>
        {{ offsetTop }}
      </v-col>
    </v-row>
    <v-container
      id="scroll-target"
      style="max-height: 150px;width:150px;"
      class="overflow-y-auto bg-dark"
    >
      <v-row
        v-scroll:#scroll-target="onScroll"
        align="center"
        justify="center"
        style="height: 1500px"
      >
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const offsetTop = ref(0)

const onScroll = (e) => {
  console.log('onScroll:', e)
  offsetTop.value = e.target.scrollTop
}
</script>

<style lang='scss' scope></style>
