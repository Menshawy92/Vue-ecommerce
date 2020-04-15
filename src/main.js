import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VEButton from '@/components/Shared/VEButton.vue'
import VEModel from '@/components/Shared/VEModel.vue'
import Loader from '@/components/Shared/Loader.vue'
import * as firebase from 'firebase'

Vue.config.productionTip = false
Vue.component(VEButton.name, VEButton)
Vue.component(Loader.name, Loader)
Vue.component(VEModel.name, VEModel)
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: (h) => h(App),
    created() {
        var firebaseConfig = {
            apiKey: 'AIzaSyCn_vpuLJ_uT1aId1Ofj9ZgdpvntGHo9JI',
            authDomain: 'vue-ecommrce.firebaseapp.com',
            databaseURL: 'https://vue-ecommrce.firebaseio.com',
            projectId: 'vue-ecommrce',
            storageBucket: 'vue-ecommrce.appspot.com',
            messagingSenderId: '422897920316',
            appId: '1:422897920316:web:6ad101091998b8f4f7d639',
            measurementId: 'G-QKZLEYE1BX',
        }
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig)
        firebase.analytics()
    },
}).$mount('#app')
