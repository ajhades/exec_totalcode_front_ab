<template>
  <div class="dynamic-select d-inline-flex align-items-center flex-row">
    <label class="mx-3 primary-color">{{ label }}:</label>
    <select v-model="selected" class="form-select" @change="onHandleChange">
      <option v-for="option in options" :key="option.id" :value="option.id">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['options', 'label'],
  data() {
    return {
      selected: ''
    }
  },
  created() {},
  methods: {
    onHandleChange() {
      this.$emit('v-selected', this.selected)
    }
  }
}
</script>

<style>
.dynamic-select {
  min-width: 250px;
}
.dynamic-select select {
  border-color: #8753fe;
}
</style>
