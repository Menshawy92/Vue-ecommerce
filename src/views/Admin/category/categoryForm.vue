<template>
    <div class="formCategory">
        <form action>
            <div class="form-group">
                <label for>name</label>
                <input type="text" placeholder="name" />
            </div>
            <div class="form-footer">
                <ve-button color="succss" type="submit">
                    <template>Submit</template>
                </ve-button>
                <ve-button @click="cancel">
                    <template>Close</template>
                </ve-button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'form-category',
    methods:{
        cancel(){
            this.$emit('cancelForm')
        }
    }
}
</script>
<style lang="scss" scoped>
.formCategory {
    .form-group {
        margin-bottom: 15px;
    }
    .form-footer {
        display: flex;
        justify-content: flex-end;
    }
}
</style>
