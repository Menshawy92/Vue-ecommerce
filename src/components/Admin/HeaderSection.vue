<template>
    <div class="headerSection">
        <h3 class="section-title">
            <slot name="title"></slot>
        </h3>
        <div class="actions0btn">
            <ve-button type="submit" color="default" @click="fireAdd">
                <template>
                    <div>Button</div>
                </template>
            </ve-button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'headerSection',
  props: {
    addMethod: {}
  },
  methods: {
    fireAdd () {
      this.$emit('addFairEvent')
    }
  }
}
</script>
<style lang="scss" scoped>
.headerSection {
    display: flex;
    justify-content: space-between;
    padding: 50px 0px 0px 0px;
    border-bottom: 1px solid #80808021;
    align-items: center;
    &.section-title {
        margin: 0;
    }
}
</style>
