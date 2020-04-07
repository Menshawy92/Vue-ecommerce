<template>
    <div class="formCategory">
        <form @submit.prevent="submit">
            <div class="form-group">
                <label for>name</label>
                <input type="text" v-model="categoryName" placeholder="name" />
            </div>
            <div class="form-footer">
                <ve-button :disabled="loader" :loading="loader" color="succss" type="submit">
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
    data(){
    return{
        categoryName:null  ,
        loader:false
        };
    },
    methods:{
        cancel(){
            this.$emit('cancelForm')
        },
        submit(){
            this.loader = true,
            this.$store.dispatch("submitCategoryForm",{
                name:this.categoryName
            }).then(()=>{
                this.categoryName=null;
                this.$emit('cancelForm');
                this.loader = false
            })
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
