<template>
  <v-data-table :headers="headers" :items="desserts" item-value="name">
    <!-- <template #item="{ item }">
      <tr>
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
        <td>{{ item.fat }}</td>
        <td>{{ item.carbs }}</td>
        <td>{{ item.protein }}</td>
        <td>{{ item.iron }}</td>
      </tr>
    </template> -->

    <!-- 僅設定 fat 這個 key 名稱的欄位 -->
    <template #item.fat="{ value }">
        <span class="text-light bg-dark p-3">{{ value }}</span>
    </template>
  </v-data-table>
</template>

<script setup>
const headers = [
  {
    title: 'Dessert (100g serving)',
    align: 'start',
    sortable: false,
    key: 'name'
  },
  { title: 'Calories', key: 'calories' },
  { title: 'Fat (g)', key: 'fat' },
  { title: 'Carbs (g)', key: 'carbs' },
  { title: 'Protein (g)', key: 'protein' },
  { title: 'Iron (%)', key: 'iron' }
]

const desserts = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: 1
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    iron: 1
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    iron: 7
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    iron: 8
  }
]
</script>
