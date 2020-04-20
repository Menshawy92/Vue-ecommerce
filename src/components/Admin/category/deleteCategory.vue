<template>
    <ve-model :show="show" @close="close" :height="180" :width="400">
        <div class="model-text">
            <p>Are you Sure Delete Ite adsm</p>
        </div>
        <div class="model-content">
            <ve-button
                type="submit"
                color="error"
                :disabled="loader"
                :loading="loader"
                @click="deleteCategory"
            >
                <template>Confirm</template>
            </ve-button>
            <ve-button type="submit" @click="close">
                <template>close</template>
            </ve-button>
        </div>
    </ve-model>
</template>
<script>
export default {
    name: 'deleteCategory',
    props: ['show'],
    data() {
        return {
            loader: false,
        }
    },
    methods: {
        deleteCategory() {
            this.$emit('deleteCategory')
            this.loader = true
        },
        close() {
            this.$emit('close')
            this.loader = false
        },
    },
}
</script>
<style lang="scss" scoped>
.model-text {
    p {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
    }
}
.model-content {
    display: flex;
    justify-content: center;
}
</style>
