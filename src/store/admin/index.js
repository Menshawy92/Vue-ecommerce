import {
    addToCollection,
    getToCollection,
    deleteToCollection,
} from '@/firebase/methods/firestore.js'
export default {
    state: {
        navVisibility: false,
        categories: null,
    },
    mutations: {
        updateNavVisibility(state, Visibility) {
            state.navVisibility = Visibility
        },
        updateCategories(state, categories) {
            state.categories = categories
        },
    },
    actions: {
        submitCategoryForm({ commit, state }, category) {
            return addToCollection('categories', category).then((doc) =>
                commit(
                    'updateCategories',
                    state.categories.concat(
                        Object.assign({}, category, { id: doc.id })
                    )
                )
            )
        },
        getCategories({ commit }) {
            getToCollection('categories').then((querySnapshot) => {
                let categories = querySnapshot.docs.map((queryDoc) =>
                    Object.assign({}, queryDoc.data(), {
                        id: queryDoc.id,
                    })
                )
                commit('updateCategories', categories)
            })
        },
        deleteCategory({ commit, state }, categoryId) {
            return deleteToCollection('categories', categoryId).then(() =>
                commit(
                    'updateCategories',
                    state.categories.filter(
                        (category) => category.id != categoryId
                    )
                )
            )
        },
    },
    modules: {},
}
