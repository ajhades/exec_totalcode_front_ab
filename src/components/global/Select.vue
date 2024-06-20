<template>
  <div class="dynamic-select d-inline-flex align-items-center flex-row">
    <label class="mx-3 primary-color">{{ label }}:</label>
    <select v-model="selected" class="form-select">
      <option v-for="option in options" :value="option.id">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['options', 'label'],
  setup(props) {
    // setup() receives props as the first argument.
    console.log('options', props)
  },
  data() {
    return {
      selected: ''
    }
  },
  created() {},
  methods: {}
}
</script>

<style>
.dynamic-select{
  min-width: 250px;
}
.dynamic-select select{
  border-color:#8753fe;
}
</style>
