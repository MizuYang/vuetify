<template>
  <v-form @submit.prevent="submit">
    <v-text-field
      v-model="name.value.value"
      :counter="10"
      :error-messages="name.errorMessage.value"
      label="請輸入姓名"
    ></v-text-field>

    <v-text-field
      v-model="phone.value.value"
      :counter="7"
      :error-messages="phone.errorMessage.value"
      label="請輸入手機號碼"
    ></v-text-field>

    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      label="請輸入 E-mail"
    ></v-text-field>

    <v-select
      v-model="select.value.value"
      :items="items"
      :error-messages="select.errorMessage.value"
      label="選擇一個項目"
    ></v-select>

    <v-checkbox
      v-model="checkbox.value.value"
      :error-messages="checkbox.errorMessage.value"
      value="1"
      label="我同意"
      type="checkbox"
    ></v-checkbox>

    <div class="mt-10">
      <v-btn
        class="me-4"
        type="submit"
      >
        提交
      </v-btn>
      <v-btn @click="handleReset">
        清除
      </v-btn>
    </div>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

// 取出送出表單、重置表單的方法
const { handleSubmit, handleReset } = useForm({
  // 自訂驗證方法
  validationSchema: {
    name (value) {
      if (value?.length >= 2) return true

      return '名稱至少需要 2 個字元'
    },
    phone (value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true

      return '手機號碼至少需要 9 位數字'
    },
    email (value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return '必須是有效的電子郵件'
    },
    select (value) {
      if (value) return true

      return '請選擇一個項目'
    },
    checkbox (value) {
      if (value === '1') return true

      return '必須勾選同意'
    }
  }
})

// 註冊要驗證的欄位, useField 參數 :(欄位名稱, 驗證規則, 選項設定)
const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const select = useField('select')
const checkbox = useField('checkbox')
// 設定不即時驗證的範例
// const phone = useField('phone', '', {
//   validateOnValueUpdate: false
// })

const items = ref([
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4'
])

// 驗證成功後才會執行
const submit = handleSubmit(values => {
  console.log(values)
})
</script>

<style lang='scss' scope></style>
