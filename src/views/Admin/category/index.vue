<template>
    <div class="mainCategory">
        <header-section @addFairEvent="showModelHandelr">
            <template #title>There is title</template>
        </header-section>
        <div class="content-page">
            <ul v-if="categories">
                <li v-for="category in categories" :key="category.id">
                    {{category.name}}
                    <ve-button @click="showDeleteModel">
                        <template>Delete</template>
                    </ve-button>
                </li>
            </ul>
        </div>
        <ve-model :show="showModel" :width="800" @close="hideModelHandelr">
            <categoryForm @cancelForm="hideModelHandelr"></categoryForm>
        </ve-model>
        <deleteCategory
            :show="showModelHudeler"
            @close="hideModelHandelr"
            @delete="deleteCategory(category.id)"
        ></deleteCategory>
    </div>
</template>
<script>
import HeaderSection from '@/components/Admin/HeaderSection.vue'
import categoryForm from '@/views/Admin/category/categoryForm.vue'
import deleteCategory from '@/views/Admin/category/deleteCategory.vue'
export default {
    name: 'category',
    components: {
        HeaderSection,
        categoryForm,
        deleteCategory
    },
    data() {
        return {
            showModel: false,
            showModelHudeler:false
        }
    },
      computed:{
          categories() {
              return this.$store.state.admin.categories;
          }
          
    },
    mounted(){
        this.$store.dispatch("getCategories")
    },
    methods: {
        showDeleteModel(){
              this.showModelHudeler = true
        },
        showModelHandelr() {
            this.showModel = true
        },
        hideModelHandelr() {
            this.showModel = false
        },
        deleteCategory(id){
            this.$store.dispatch("deleteCategory", id)
        }
    },
  
}
</script>
<style lang="scss" scoped></style>
