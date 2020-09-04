<template>
  <div>
    <qw-button @click="test">默认按钮</qw-button>
    <qw-button type="primary">主要按钮</qw-button>
    <qw-button type="success">成功按钮</qw-button>
    <qw-button type="info">信息按钮</qw-button>
    <qw-button type="warning">警告按钮</qw-button>
    <qw-button type="danger">危险按钮</qw-button>

    <qw-button plain>朴素按钮</qw-button>
    <qw-button type="primary" plain>主要按钮</qw-button>
    <qw-button type="success" plain>成功按钮</qw-button>
    <qw-button type="info" plain>信息按钮</qw-button>
    <qw-button type="warning" plain>警告按钮</qw-button>
    <qw-button type="danger" plain>危险按钮</qw-button>

    <qw-button round>圆角按钮</qw-button>
    <qw-button type="primary" round>主要按钮</qw-button>
    <qw-button type="success" round>成功按钮</qw-button>
    <qw-button type="info" round>信息按钮</qw-button>
    <qw-button type="warning" round>警告按钮</qw-button>
    <qw-button type="danger" round>危险按钮</qw-button>

    <qw-button icon="qw-icon-search" circle></qw-button>
    <qw-button type="primary" icon="qw-icon-edit" circle></qw-button>
    <qw-button type="success" icon="qw-icon-check" circle></qw-button>
    <qw-button type="info" icon="qw-icon-message" circle></qw-button>
    <qw-button type="warning" icon="qw-icon-star-off" circle></qw-button>
    <qw-button type="warning" icon="qw-icon-delete" circle></qw-button>

    <qw-button-group>
      <qw-button type="primary" icon="qw-icon-arrow-left">上一页</qw-button>
      <qw-button type="primary">
        下一页
        <i class="qw-icon-arrow-right qw-icon--right"></i>
      </qw-button>
    </qw-button-group>
    <qw-button-group>
      <qw-button type="primary" icon="qw-icon-edit"></qw-button>
      <qw-button type="primary" icon="qw-icon-share"></qw-button>
      <qw-button type="primary" icon="qw-icon-delete"></qw-button>
    </qw-button-group>
  </div>
</template>

<script>
import QwButton from './../packages/button'
import QwButtonGroup from './../packages/button-group'
export default {
  components: {
    QwButton,
    QwButtonGroup
  },
  methods: {
    test () {
      alert(111)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
