<template>
  <select v-model="selected" @change="set_select()">
    <option v-for="option in options" :value="option.id">
      {{ option.intitule }}
    </option>
  </select>
  <div>Selected: {{ selected }}</div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
const selected = ref(57)
const options = ref([
  { id: 53, intitule: 'foo' },
  { id: 55, intitule: 'footoo' },
  { id: 56, intitule: 'doodoo' },
  { id: 54, intitule: 'barbaz' },
  { id: 57, intitule: 'barbars' }
])
const form = reactive({
  cat: ''
})
onMounted(() => {
  set_select()
})
const set_select = () => {
  form.cat = selected.value
}
</script>
