<template>
    <div class="mainCategory">
        <header-section @addFairEvent="showModelHandelr">
            <template #title>There is title</template>
        </header-section>
        <div class="content-page" v-if="categories">
            <div v-for="category in categories" :key="category.id" class="item">
                <h2>{{ category.name }}</h2>
                <ve-button color="error" @click="showDeleteModel(category.id)">
                    <template>Delete</template>
                </ve-button>
            </div>
        </div>
        <loader color="green" v-else></loader>
        <ve-model :show="showModel" :width="800" @close="hideModelHandelr">
            <categoryForm @cancelForm="hideModelHandelr"></categoryForm>
        </ve-model>
        <deleteCategory
            :show="showModelHudeler"
            @close="hideModelHandelr"
            @deleteCategory="deleteCategory"
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
        deleteCategory,
    },
    data() {
        return {
            showModel: false,
            showModelHudeler: false,
            selectCategoryToDelete: null,
        }
    },
    computed: {
        categories() {
            return this.$store.state.admin.categories
        },
    },
    mounted() {
        this.$store.dispatch('getCategories')
    },
    methods: {
        showDeleteModel(id) {
            this.showModelHudeler = true
            this.selectCategoryToDelete = id
        },
        showModelHandelr() {
            this.showModel = true
        },
        hideModelHandelr() {
            this.showModel = false
            this.showModelHudeler = false
        },
        deleteCategory(id) {
            this.$store
                .dispatch('deleteCategory', this.selectCategoryToDelete)
                .then(() => {
                    this.hideModelHandelr()
                    this.selectCategoryToDelete = null
                })
        },
    },
}
</script>
<style lang="scss" scoped>
.mainCategory {
    margin: 30px;
    .content-page {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        .item {
            flex-basis: calc(50% - 20px);
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 6px 20px;
            margin-right: 20px;
            justify-content: space-between;
            display: flex;
            margin-bottom: 20px;
            align-items: center;

            &:nth-child(even) {
                margin-right: 0;
                flex-basis: 50%;
            }
        }
    }
}
</style>
