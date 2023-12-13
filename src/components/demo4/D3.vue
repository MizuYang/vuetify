<template>
  <v-card
    :loading="isUpdating"
    color="blue-grey-darken-1"
    class="mx-auto"
    max-width="420"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="green-lighten-3"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"
    >
      <v-row class="pa-3">
        <!-- 左上更新選單按鈕 -->
        <v-col cols="12">
          <v-menu
            location="bottom start"
            origin="overlap"
            transition="slide-y-transition"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                icon="mdi-dots-vertical"
                density="comfortable"
                variant="tonal"
              ></v-btn>
            </template>

            <v-list :lines="false">
              <v-list-item
                title="更新"
                @click="isUpdating = true"
              ></v-list-item>
            </v-list>
          </v-menu>
        </v-col>

        <v-row>
          <v-col class="text-center">
            <h3 class="text-h5">{{ name }}</h3>
            <span class="text-grey-lighten-1">{{ title }}</span>
          </v-col>
        </v-row>
      </v-row>
    </v-img>

    <v-form>
      <v-container>
        <v-row dense>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="name"
              :disabled="isUpdating"
              color="blue-grey-lighten-2"
              label="姓名"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="title"
              :disabled="isUpdating"
              color="blue-grey-lighten-2"
              label="標題"
            ></v-text-field>
          </v-col>

          <!-- 下拉選單 -->
          <v-col cols="12">
            <v-autocomplete
              v-model="friends"
              :disabled="isUpdating"
              :items="people"
              chips
              closable-chips
              color="blue-grey-lighten-2"
              item-title="name"
              item-value="name"
              label="選擇"
              multiple
            >
              <!-- 頭像 -->
              <template v-slot:chip="{ props, item }">
                <v-chip
                  v-bind="props"
                  :prepend-avatar="item.raw.avatar"
                  :text="item.raw.name"
                ></v-chip>
              </template>

              <template v-slot:item="{ props, item }">
                <v-list-item
                  v-bind="props"
                  :prepend-avatar="item?.raw?.avatar"
                  :title="item?.raw?.name"
                  :subtitle="item?.raw?.group"
                ></v-list-item>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <v-divider></v-divider>

    <v-card-actions>
      <v-switch
        v-model="autoUpdate"
        :disabled="isUpdating"
        class="mt-0 ms-2"
        color="green-lighten-2"
        density="compact"
        hide-details
        label="自動更新"
      ></v-switch>

      <v-spacer></v-spacer>

      <v-btn
        :disabled="autoUpdate"
        :loading="isUpdating"
        :variant="isUpdating ? 'tonal' : undefined"
        color="blue-grey-lighten-3"
        prepend-icon="mdi-update"
        @click="isUpdating = true"
      >
        立即更新
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref, watch } from 'vue'
const srcs = {
  1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
  2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
  3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
  4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
  5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'
}

const autoUpdate = ref(true)
const friends = ref(['Sandra Adams', 'Britta Holt'])
const isUpdating = ref(false)
const name = ref('午夜船員')
const people = ref([
  { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
  { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
  { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
  { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
  { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
  { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
  { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
  { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] }
])
const title = ref('夏日的微風')
let timeout = null

watch(isUpdating, (val) => {
  clearTimeout(timeout)

  if (val) {
    timeout = setTimeout(() => (isUpdating.value = false), 3000)
  }
})

// const remove = (item) => { // eslint-disable-line
//   const index = friends.value.indexOf(item.name)
//   if (index >= 0) friends.value.splice(index, 1)
// }
</script>
