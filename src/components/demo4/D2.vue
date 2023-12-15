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
        <v-text-field label="input-text"
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

    <!-- textarea -->
    <div>
      <div style="width:500px;">
        <v-textarea clearable
                    counter
                    no-resize
                    maxlength="120"
                    label="textarea"></v-textarea>
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

    <!-- otp-input -->
    <div>
      <v-otp-input v-model="otpInputValue"
                   :loading="isOtpinputLoading"
                   placeholder="0"></v-otp-input>
    </div>

    <!-- file-input -->
    <div class="d-flex align-items-center">
      <div class="me-10" style="width:500px;">
        <v-file-input
          :show-size="inputFileOptions.showSize===true"
          :counter="inputFileOptions.counter===true"
          :chips="inputFileOptions.chips===true"
          :prepend-icon="prependIcon"
          multiple
          label="File input"
        ></v-file-input>
      </div>

      <!-- 配置 -->
      <div class="d-flex align-items-center pb-5">
        <template v-for="(value,item) in inputFileOptions" :key="item">
          <v-checkbox
            v-model="inputFileOptions[item]"
            :label="item"
            hide-details
          ></v-checkbox>
        </template>

        <!-- 更換 icon -->
        <v-select
          class="ms-10"
          v-model="prependIcon"
          :items="inputFileIcons"
          color="blue-grey-lighten-2"
          label="選擇 icon"
          style="width: 200px;"
        >
          <template v-slot:item="{ props, item }">
            <v-list-item
              v-bind="props"
              :prepend-icon="item.value"
              :title="item?.title"
              :subtitle="item?.raw?.group"
            ></v-list-item>
          </template>
        </v-select>
      </div>
    </div>
  </section>

</template>

<script setup>
import { ref, watch } from 'vue'

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

// otp
const otpInputValue = ref('')
const isOtpinputLoading = ref(false)
watch(() => otpInputValue.value, (n) => {
  console.log('otpInputValue', otpInputValue.value)
  if (n.length >= 6) otpInit()
})
function otpInit () {
  isOtpinputLoading.value = true

  setTimeout(() => {
    isOtpinputLoading.value = false
    otpInputValue.value = ''
  }, 1500)
}

// input-file
const inputFileOptions = ref({
  showSize: '',
  counter: '',
  chips: ''
})
const prependIcon = ref('mdi-paperclip')
const inputFileIcons = ref([
  'mdi-calendar',
  'mdi-close-circle',
  'mdi-minus-box',
  'mdi-checkbox-blank-outline',
  'mdi-checkbox-marked',
  'mdi-close-circle',
  'mdi-close',
  'mdi-chevron-up',
  'mdi-check',
  'mdi-close-circle',
  'mdi-circle',
  'mdi-menu-down',
  'mdi-pencil',
  'mdi-close-circle',
  'mdi-chevron-down',
  'mdi-eyedropper',
  'mdi-paperclip',
  'mdi-page-first',
  'mdi-information',
  'mdi-page-last',
  'mdi-cached',
  'mdi-menu',
  'mdi-minus',
  'mdi-chevron-right',
  'mdi-plus',
  'mdi-chevron-left',
  'mdi-radiobox-blank',
  'mdi-radiobox-marked',
  'mdi-star-outline',
  'mdi-star',
  'mdi-star-half-full',
  'mdi-arrow-up',
  'mdi-arrow-down',
  'mdi-menu-down',
  'mdi-check-circle',
  'mdi-unfold-more-horizontal',
  'mdi-alert-circle'
])

</script>

<style lang='scss' scope>
.v-checkbox .v-selection-control {
  min-height: 0;
}
.v-otp-input {
  justify-content: left;
}
</style>
