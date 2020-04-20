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
import '@/firebase/index'

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
}).$mount('#app')
