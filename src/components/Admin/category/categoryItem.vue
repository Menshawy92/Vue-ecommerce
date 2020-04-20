<template>
    <div class="categoryItem">
        <strong>{{category.name}}</strong>
        <ve-button color="error" class="categoryItem__delete" @click="$emit('deleteItem')">
            <template>Delete</template>
        </ve-button>
    </div>
</template>
<script>
export default {
    name:"categoryItem",
    props:['category']
    
}
</script>
<style lang="scss" scoped>
.categoryItem {
    flex-basis: calc(50% - 20px);
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 20px;
    &:nth-child(even) {
        margin-right: 0;
        flex-basis: calc(50%);
    }
}
.categoryItem__delete {
    padding: 12px 20px !important;
    min-width: 85px !important;
    font-size: 11px !important;
}
</style>