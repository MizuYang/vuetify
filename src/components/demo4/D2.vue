<template>
  <section>
    <!-- checkbox -->
    <div class="row row-cols-2">
      <v-checkbox
        v-model="checkbox"
        label="red"
        color="red"
        value="red"
        hide-details
      ></v-checkbox>
      <v-checkbox v-model="checkbox">
        <template v-slot:label>
          <div>
            我同意
            <v-tooltip location="top">
              <template v-slot:activator="{ props }">
                <a
                  target="_blank"
                  href="https://vuetifyjs.com"
                  v-bind="props"
                  @click.stop
                >
                  Vuetify
                </a>
              </template>
              在新視窗中開啟
            </v-tooltip>
            太棒了
          </div>
        </template>
      </v-checkbox>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// data
const checkbox = ref('')
</script>

<style lang='scss' scope>
.v-checkbox .v-selection-control {
  min-height: 0;
}
</style>
