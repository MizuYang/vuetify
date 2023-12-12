<template>
  <div class="d-flex flex-wrap"
       style="min-height:50vh;">
    <div class="me-15">
      <p>v-expand-transition</p>
      <v-expand-transition>
        <div class="bg-dark" v-if="isShow"
             style="width:100px;height:100px;">
        </div>
      </v-expand-transition>
    </div>

    <div class="me-15">
      <p>v-fab-transition</p>
      <v-fab-transition>
        <div class="bg-dark" v-if="isShow"
             style="width:100px;height:100px;">
        </div>
      </v-fab-transition>
    </div>

    <div class="me-15">
      <p>v-fade-transition</p>
      <v-fade-transition>
        <div class="bg-dark" v-if="isShow"
             style="width:100px;height:100px;">
        </div>
      </v-fade-transition>
    </div>

    <div class="me-15">
      <p>v-scale-transition</p>
      <v-scale-transition>
        <div class="bg-dark" v-if="isShow"
             style="width:100px;height:100px;">
        </div>
      </v-scale-transition>
    </div>

    <div class="me-15">
      <p>v-scroll-x-transition</p>
      <v-scroll-x-transition>
        <div class="bg-dark" v-if="isShow"
             style="width:100px;height:100px;">
        </div>
      </v-scroll-x-transition>
    </div>

    <div class="me-15">
      <p>v-scroll-y-transition</p>
      <v-scroll-y-transition>
        <div class="bg-dark" v-if="isShow"
             style="width:100px;height:100px;">
        </div>
      </v-scroll-y-transition>
    </div>

    <div class="me-15">
      <p>v-slide-x-reverse-transition</p>
      <v-slide-x-reverse-transition>
        <div class="bg-dark" v-if="isShow"
             style="width:100px;height:100px;">
        </div>
      </v-slide-x-reverse-transition>
    </div>

    <div class="me-15">
      <p>v-slide-x-transition</p>
      <v-slide-x-transition>
        <div class="bg-dark" v-if="isShow"
             style="width:100px;height:100px;">
        </div>
      </v-slide-x-transition>
    </div>

    <div class="me-15">
      <p>v-slide-y-reverse-transition</p>
      <v-slide-y-reverse-transition>
        <div class="bg-dark" v-if="isShow"
             style="width:100px;height:100px;">
        </div>
      </v-slide-y-reverse-transition>
    </div>

    <div class="me-15">
      <p>v-slide-y-transition</p>
      <v-slide-y-transition>
        <div class="bg-dark" v-if="isShow"
             style="width:100px;height:100px;">
        </div>
      </v-slide-y-transition>
    </div>

  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'

// data
const isShow = ref(true)

const timer = setInterval(() => {
  isShow.value = !isShow.value
}, 700)

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

</script>

<style lang='scss' scope></style>
