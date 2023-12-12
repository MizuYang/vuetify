<template>
  <div class="row row-cols-3">
    <template v-for="(value, colorName) in data" :key="colorName">
      <div class="col">
          <template v-for="item in value" :key="item">
            <p v-for="colorClass in item" :key="colorClass"
               class="text-center py-2"
               :class="colorClass">
              {{ colorClass }}
            </p>
          </template>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// data
const data = ref({})
const colorNames = ref([
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deep-orange',
  'brown',
  'grey'
])

onMounted(() => {
  getColorData()
  console.log(data.value)
})

function getColorData () {
  colorNames.value.forEach(colorName => {
    data.value[colorName] = {}

    data.value[colorName] = {
      lighten: [],
      darken: [],
      accent: []
    }
    for (let i = 1; i < 5; i++) {
      data.value[colorName].lighten.push(`bg-${colorName}-lighten-${i}`)
      // brown, grey這兩色沒有 darken, accent 的顏色配置, 故將其排除
      if (colorName !== 'brown' && colorName !== 'grey') {
        data.value[colorName].darken.push(`bg-${colorName}-darken-${i}`)
        data.value[colorName].accent.push(`bg-${colorName}-accent-${i}`)
      }
    }
  })
}

</script>

<style lang='scss' scope>
</style>
