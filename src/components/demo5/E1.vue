<template>
  <v-data-table
    :headers="headers"
    :items="items"
    density="compact"
    item-key="name"
    items-per-page="5"
    v-model="selected"
    item-value="name"
    show-select
    hover
  >
  </v-data-table>
  {{ selected }}
</template>

<script setup>
import { ref } from 'vue'

const headers = ref([
  { title: 'Pyramid', value: 'name', sortable: true },
  { title: 'Location', value: 'location', sortable: true },
  { title: 'Construction Date', value: 'constructionDate', sortable: true },
  {
    title: 'Dimensions',
    align: 'center',
    class: 'text-20',
    children: [
      { title: 'Height (m)', value: 'height' },
      { title: 'Base (m)', value: 'base' },
      { title: 'Volume (m³)', value: 'volume' }
    ]
  }
])
const selected = ref([])

const items = [
  {
    name: 'Great Pyramid of Giza',
    location: 'Egypt',
    height: '146.6',
    base: '230.4',
    volume: '2583285',
    constructionDate: 'c. 2580–2560 BC'
  },
  {
    name: 'Pyramid of Khafre',
    location: 'Egypt',
    height: '136.4',
    base: '215.3',
    volume: '1477485',
    constructionDate: 'c. 2570 BC'
  },
  {
    name: 'Red Pyramid',
    location: 'Egypt',
    height: '104',
    base: '220',
    volume: '1602895',
    constructionDate: 'c. 2590 BC'
  },
  {
    name: 'Bent Pyramid',
    location: 'Egypt',
    height: '101.1',
    base: '188.6',
    volume: '1200690',
    constructionDate: 'c. 2600 BC'
  },
  {
    name: 'Pyramid of the Sun',
    location: 'Mexico',
    height: '65',
    base: '225',
    volume: '1237097',
    constructionDate: 'c. 200 CE'
  },
  {
    name: 'Alice Johnson',
    location: 'New York, NY',
    height: '165 cm',
    base: 'Company A',
    volume: '1200 cubic meters',
    constructionDate: '2022-03-10'
  },
  {
    name: 'David Smith',
    location: 'Los Angeles, CA',
    height: '180 cm',
    base: 'Company B',
    volume: '900 cubic meters',
    constructionDate: '2022-06-22'
  },
  {
    name: 'Sophia Chen',
    location: 'San Francisco, CA',
    height: '155 cm',
    base: 'Company C',
    volume: '1500 cubic meters',
    constructionDate: '2022-01-15'
  },
  {
    name: 'Michael Brown',
    location: 'Chicago, IL',
    height: '175 cm',
    base: 'Company D',
    volume: '800 cubic meters',
    constructionDate: '2022-09-05'
  },
  {
    name: 'Olivia Wang',
    location: 'Seattle, WA',
    height: '160 cm',
    base: 'Company E',
    volume: '1000 cubic meters',
    constructionDate: '2022-11-30'
  },
  {
    name: 'Ethan Miller',
    location: 'Austin, TX',
    height: '170 cm',
    base: 'Company F',
    volume: '1100 cubic meters',
    constructionDate: '2022-04-18'
  },
  {
    name: 'Ava Rodriguez',
    location: 'Miami, FL',
    height: '160 cm',
    base: 'Company G',
    volume: '950 cubic meters',
    constructionDate: '2022-07-03'
  },
  {
    name: 'Noah Kim',
    location: 'Denver, CO',
    height: '175 cm',
    base: 'Company H',
    volume: '1300 cubic meters',
    constructionDate: '2022-02-25'
  },
  {
    name: 'Mia Patel',
    location: 'Portland, OR',
    height: '165 cm',
    base: 'Company I',
    volume: '850 cubic meters',
    constructionDate: '2022-10-12'
  },
  {
    name: 'Liam Garcia',
    location: 'Phoenix, AZ',
    height: '185 cm',
    base: 'Company J',
    volume: '1200 cubic meters',
    constructionDate: '2022-12-08'
  },
  {
    name: 'Isabella Chen',
    location: 'Houston, TX',
    height: '155 cm',
    base: 'Company K',
    volume: '1000 cubic meters',
    constructionDate: '2022-08-20'
  },
  {
    name: 'Jackson Lee',
    location: 'San Diego, CA',
    height: '180 cm',
    base: 'Company L',
    volume: '900 cubic meters',
    constructionDate: '2022-05-14'
  },
  {
    name: 'Emma Nguyen',
    location: 'Dallas, TX',
    height: '162 cm',
    base: 'Company M',
    volume: '1100 cubic meters',
    constructionDate: '2022-01-30'
  },
  {
    name: 'Lucas Hernandez',
    location: 'Atlanta, GA',
    height: '175 cm',
    base: 'Company N',
    volume: '1400 cubic meters',
    constructionDate: '2022-09-28'
  },
  {
    name: 'Sophie Turner',
    location: 'Chicago, IL',
    height: '168 cm',
    base: 'Company O',
    volume: '950 cubic meters',
    constructionDate: '2022-11-15'
  }

]
</script>
