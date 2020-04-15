<template>
    <transition name="fade">
        <div class="ve-model" v-if="show" @click.self="$emit('close')">
            <div
                class="ve-model__detais"
                :style="{'max-width': width + 'px','max-height': height + 'px'}"
            >
                <slot></slot>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
  name: 've-model',
  props: {
    show: {
      type: Boolean,
      default: false,
      required: false
    },
    width: {
      type: Number,
      default: 600,
      required: false
    },
     height: {
      type: Number,
      default: 300,
      required: false
    }
  }
}
</script>
<style lang="scss" scoped>
.ve-model {
    background-color: #33333370;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10px;
    &__detais {
        background-color: #fff;
        width: 100%;
        height: 100%;
        margin: 50px auto;
        border-radius: 7px;
        padding: 20px;
        box-sizing: border-box;
    }
    &.fade-enter-active,
    &.fade-leave-active {
        transition: opacity 0.4s;
    }
    &.fade-enter, &.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
}
</style>
