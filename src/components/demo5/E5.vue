<template>
  <div class="text-center">
    <v-btn
      :disabled="loading"
      append-icon="mdi-refresh"
      text="重整"
      variant="outlined"
      @click="onClick"
    ></v-btn>
  </div>

  <v-data-table :loading="loading" :items="items">
    <template #loading>
      <!-- type="table-row@10"       @10 代表顯示10行 -->
      <v-skeleton-loader :type="`table-row@${items.length}`"></v-skeleton-loader>
    </template>
  </v-data-table>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)

const items = ref([
  { name: 'Chevrolet Camaro', year: 1967, engine: 'V8', horsepower: 375, torque: 415 },
  { name: 'Ford Mustang', year: 1965, engine: 'V8', horsepower: 271, torque: 312 },
  { name: 'Dodge Charger', year: 1968, engine: 'V8', horsepower: 425, torque: 490 }
])

const onClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>
