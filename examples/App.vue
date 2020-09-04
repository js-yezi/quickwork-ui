<template>
  <div>
    <qw-button>按钮</qw-button>
    <qw-radio v-model="radio" label="1">备选项</qw-radio>
    <qw-radio v-model="radio" label="2">备选项</qw-radio>
    <qw-input>备选项</qw-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1'
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
