<template>
    <button
        :type="type"
        :disable="disable"
        :class="['ve-btn',`ve-btn-${color}`]"
        @click="$emit('click')"
    >
        <slot v-if="!loading"></slot>
        <Loader v-else></Loader>
    </button>
</template>
<script>
export default {
  name: 've-button',
  props: {
    type: {
      type: String,
      required: false,
      default: 'button',
      validator: function (value) {
        // The value must match one of these strings
        return ['button', 'submit'].indexOf(value) !== -1
      }
    },
    color: {
      type: String,
      required: false,
      default: 'default',
      validator: function (value) {
        return ['default', 'succss', 'error', 'info'].indexOf(value) !== 1
      }
    },
    disable: {
      type: String,
      required: false,
      default: 'false',
    },
     loading: {
      type: String,
      required: false,
      default: 'false',
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.ve-btn {
    border: 1px solid #ddd;
    padding: 15px 30px;
    background: #333;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
        background-color: #fff;
        color: #333;
    }
    & [disabled] {
        opacity: 0.5;
    }

    &-info {
        background-color: #ffc107;
    }
    &-succss {
        background-color: #42b983;
    }
    &-error {
        background-color: #ff5722;
    }
}
</style>
