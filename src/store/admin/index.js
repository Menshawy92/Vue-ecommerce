import * as firebase from 'firebase'
export default {
    state: {
        navVisibility: false,
    },
    mutations: {
        updateNavVisibility(state, Visibility) {
            state.navVisibility = Visibility
        },
    },
    actions: {
        submitCategoryForm({ commit }, category) {
            return firebase.firestore().collection('categories').add(category)
        },
    },
    modules: {},
}
