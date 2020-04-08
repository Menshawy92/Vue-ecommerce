<template>
    <ve-model :show="show" @close="close" :width="400">
        <ve-button @click="deleteCategory">
            <template>Confirm</template>
        </ve-button>
        <ve-button @click="close">
            <template>close</template>
        </ve-button>
    </ve-model>
</template>
<script>
export default {
    name:"deleteCategory",
    props:['show'],
    methods:{
        deleteCategory(){
            this.$emit("delete")
        },
        close(){
            this.$emit("close")
        }
    }
}
</script>
<style lang="scss" scoped>
</style>