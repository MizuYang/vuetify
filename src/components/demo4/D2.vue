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

    <!-- combobox 下拉、輸入框 -->
    <div class="d-flex align-items-center">
      <div class="w-50 me-10">
        <v-combobox
          label="Combobox"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          :clearable="comboboxOptions.clearable===true"
          :chips="comboboxOptions.chips===true"
          :multiple="comboboxOptions.multiple===true"
        ></v-combobox>
      </div>

      <!-- 配置 -->
      <div class="d-flex align-items-center pb-5">
        <template v-for="(value,item) in comboboxOptions" :key="item">
          <v-checkbox
            v-model="comboboxOptions[item]"
            :label="item"
            hide-details
          ></v-checkbox>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// data
const checkbox = ref('')
const comboboxOptions = ref({
  clearable: '',
  chips: '',
  multiple: ''
})
</script>

<style lang='scss' scope>
.v-checkbox .v-selection-control {
  min-height: 0;
}
</style>
