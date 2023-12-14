<template>
  <section>
    <!-- checkbox -->
    <div class="d-flex">
      <div>
        <v-checkbox
          v-model="checkbox"
          label="red"
          color="red"
          value="red"
          hide-details
        ></v-checkbox>
      </div>
      <div class="d-flex align-items-center">
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
    </div>

    <!-- radio -->
    <div class="row row-cols-2">
      <div style="width:525px;">
        <v-radio-group v-model="radios"
                       :inline="direction==='inline'"
                       :column="direction==='column'">
          <v-radio label="選項一" value="1"></v-radio>
          <v-radio label="選項二" value="2"></v-radio>
          <v-radio label="選項三" value="3"></v-radio>
        </v-radio-group>
      </div>

      <!-- 配置 -->
      <div>
        <v-radio-group v-model="direction" inline>
          <v-radio label="inline" value="inline"></v-radio>
          <v-radio label="column" value="column"></v-radio>
        </v-radio-group>
      </div>
    </div>

    <!-- input-text -->
    <div class="row row-cols-2">
      <div style="width:525px;">
        <v-text-field label="Label"
                      hint="請輸入文字(hint:聚焦時在輸入下方顯示提示文字)"
                      prefix="$" suffix="元"
                      :clearable="textFieldOptions.clearable"></v-text-field>
      </div>

      <!-- 配置 -->
      <div class="d-flex align-items-center">
        <div v-for="(value,key) in textFieldOptions" :key="key">
          <v-checkbox :label="key"
                      :value="true"
                      v-model="textFieldOptions[key]"></v-checkbox>
        </div>
      </div>
    </div>

    <!-- select -->
    <div class="row row-cols-2">
      <div style="width:525px;">
        <v-select
          :items="['米知', '小明', '周杰倫']"
          :disabled="selectOptions.disabled===true"
          :multiple="selectOptions.multiple===true"
          label="select"
        ></v-select>
      </div>

      <!-- 配置 -->
      <div class="d-flex align-items-center">
        <div v-for="(value,key) in selectOptions" :key="key">
          <v-checkbox :label="key"
                      :value="true"
                      v-model="selectOptions[key]"></v-checkbox>
        </div>
      </div>
    </div>

    <!-- combobox 下拉、輸入框 -->
    <div class="d-flex align-items-center">
      <div class="me-10" style="width:500px;">
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
const radios = ref('')
const direction = ref('inline') // inline, column
const selectOptions = ref({
  disabled: false,
  multiple: false
})
const textFieldOptions = ref({
  clearable: false
})

</script>

<style lang='scss' scope>
.v-checkbox .v-selection-control {
  min-height: 0;
}
</style>
