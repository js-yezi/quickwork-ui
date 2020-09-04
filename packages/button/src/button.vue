<template>
  <button
    class="qw-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'qw-button--' + type : '',
      buttonSize ? 'qw-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <i class="qw-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'QwButton',

  inject: {
    qwForm: {
      default: ''
    },
    qwFormItem: {
      default: ''
    }
  },

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },

  computed: {
    _qwFormItemSize () {
      return (this.qwFormItem || {}).qwFormItemSize
    },
    buttonSize () {
      return this.size || this._qwFormItemSize || (this.$ELEMENT || {}).size
    },
    buttonDisabled () {
      return this.disabled || (this.qwForm || {}).disabled
    }
  },

  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang='scss'>
.qw-button-group > .qw-button.is-active,
.qw-button-group > .qw-button.is-disabled,
.qw-button-group > .qw-button:active,
.qw-button-group > .qw-button:focus,
.qw-button-group > .qw-button:hover {
  z-index: 1;
}
.qw-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-sqwect: none;
  -webkit-user-sqwect: none;
  -ms-user-sqwect: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.qw-button + .qw-button {
  margin-left: 10px;
}

.qw-button:focus,
.qw-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

.qw-button:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: 0;
}

.qw-button::-moz-focus-inner {
  border: 0;
}

.qw-button [class*="qw-icon-"] + span {
  margin-left: 5px;
}

.qw-button.is-plain:focus,
.qw-button.is-plain:hover {
  background: #fff;
  border-color: #409eff;
  color: #409eff;
}

.qw-button.is-active,
.qw-button.is-plain:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
}

.qw-button.is-plain:active {
  background: #fff;
  outline: 0;
}

.qw-button.is-disabled,
.qw-button.is-disabled:focus,
.qw-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}

.qw-button.is-disabled.qw-button--text {
  background-color: transparent;
}

.qw-button.is-disabled.is-plain,
.qw-button.is-disabled.is-plain:focus,
.qw-button.is-disabled.is-plain:hover {
  background-color: #fff;
  border-color: #ebeef5;
  color: #c0c4cc;
}

.qw-button.is-loading {
  position: rqwative;
  pointer-events: none;
}

.qw-button.is-loading:before {
  pointer-events: none;
  content: "";
  position: absolute;
  left: -1px;
  top: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: inherit;
  background-color: rgba(255, 255, 255, 0.35);
}

.qw-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

.qw-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

.qw-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.qw-button--primary:focus,
.qw-button--primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}

.qw-button--primary.is-active,
.qw-button--primary:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
}

.qw-button--primary:active {
  outline: 0;
}

.qw-button--primary.is-disabled,
.qw-button--primary.is-disabled:active,
.qw-button--primary.is-disabled:focus,
.qw-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}

.qw-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
}

.qw-button--primary.is-plain:focus,
.qw-button--primary.is-plain:hover {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
}

.qw-button--primary.is-plain:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
  outline: 0;
}

.qw-button--primary.is-plain.is-disabled,
.qw-button--primary.is-plain.is-disabled:active,
.qw-button--primary.is-plain.is-disabled:focus,
.qw-button--primary.is-plain.is-disabled:hover {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}

.qw-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.qw-button--success:focus,
.qw-button--success:hover {
  background: #85ce61;
  border-color: #85ce61;
  color: #fff;
}

.qw-button--success.is-active,
.qw-button--success:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #fff;
}

.qw-button--success:active {
  outline: 0;
}

.qw-button--success.is-disabled,
.qw-button--success.is-disabled:active,
.qw-button--success.is-disabled:focus,
.qw-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}

.qw-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
}

.qw-button--success.is-plain:focus,
.qw-button--success.is-plain:hover {
  background: #67c23a;
  border-color: #67c23a;
  color: #fff;
}

.qw-button--success.is-plain:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #fff;
  outline: 0;
}

.qw-button--success.is-plain.is-disabled,
.qw-button--success.is-plain.is-disabled:active,
.qw-button--success.is-plain.is-disabled:focus,
.qw-button--success.is-plain.is-disabled:hover {
  color: #a4da89;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}

.qw-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.qw-button--warning:focus,
.qw-button--warning:hover {
  background: #ebb563;
  border-color: #ebb563;
  color: #fff;
}

.qw-button--warning.is-active,
.qw-button--warning:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #fff;
}

.qw-button--warning:active {
  outline: 0;
}

.qw-button--warning.is-disabled,
.qw-button--warning.is-disabled:active,
.qw-button--warning.is-disabled:focus,
.qw-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}

.qw-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
}

.qw-button--warning.is-plain:focus,
.qw-button--warning.is-plain:hover {
  background: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
}

.qw-button--warning.is-plain:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #fff;
  outline: 0;
}

.qw-button--warning.is-plain.is-disabled,
.qw-button--warning.is-plain.is-disabled:active,
.qw-button--warning.is-plain.is-disabled:focus,
.qw-button--warning.is-plain.is-disabled:hover {
  color: #f0c78a;
  background-color: #fdf6ec;
  border-color: #faecd8;
}

.qw-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.qw-button--danger:focus,
.qw-button--danger:hover {
  background: #f78989;
  border-color: #f78989;
  color: #fff;
}

.qw-button--danger.is-active,
.qw-button--danger:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #fff;
}

.qw-button--danger:active {
  outline: 0;
}

.qw-button--danger.is-disabled,
.qw-button--danger.is-disabled:active,
.qw-button--danger.is-disabled:focus,
.qw-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}

.qw-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
}

.qw-button--danger.is-plain:focus,
.qw-button--danger.is-plain:hover {
  background: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
}

.qw-button--danger.is-plain:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #fff;
  outline: 0;
}

.qw-button--danger.is-plain.is-disabled,
.qw-button--danger.is-plain.is-disabled:active,
.qw-button--danger.is-plain.is-disabled:focus,
.qw-button--danger.is-plain.is-disabled:hover {
  color: #f9a7a7;
  background-color: #fef0f0;
  border-color: #fde2e2;
}

.qw-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}

.qw-button--info:focus,
.qw-button--info:hover {
  background: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}

.qw-button--info.is-active,
.qw-button--info:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
}

.qw-button--info:active {
  outline: 0;
}

.qw-button--info.is-disabled,
.qw-button--info.is-disabled:active,
.qw-button--info.is-disabled:focus,
.qw-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}

.qw-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
}

.qw-button--info.is-plain:focus,
.qw-button--info.is-plain:hover {
  background: #909399;
  border-color: #909399;
  color: #fff;
}

.qw-button--info.is-plain:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
  outline: 0;
}

.qw-button--info.is-plain.is-disabled,
.qw-button--info.is-plain.is-disabled:active,
.qw-button--info.is-plain.is-disabled:focus,
.qw-button--info.is-plain.is-disabled:hover {
  color: #bcbec2;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
}

.qw-button--text,
.qw-button--text.is-disabled,
.qw-button--text.is-disabled:focus,
.qw-button--text.is-disabled:hover,
.qw-button--text:active {
  border-color: transparent;
}

.qw-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.qw-button--mini,
.qw-button--small {
  font-size: 12px;
  border-radius: 3px;
}

.qw-button--medium.is-round {
  padding: 10px 20px;
}

.qw-button--medium.is-circle {
  padding: 10px;
}

.qw-button--small,
.qw-button--small.is-round {
  padding: 9px 15px;
}

.qw-button--small.is-circle {
  padding: 9px;
}

.qw-button--mini,
.qw-button--mini.is-round {
  padding: 7px 15px;
}

.qw-button--mini.is-circle {
  padding: 7px;
}

.qw-button--text {
  color: #409eff;
  background: 0 0;
  padding-left: 0;
  padding-right: 0;
}

.qw-button--text:focus,
.qw-button--text:hover {
  color: #66b1ff;
  border-color: transparent;
  background-color: transparent;
}

.qw-button--text:active {
  color: #3a8ee6;
  background-color: transparent;
}
</style>
