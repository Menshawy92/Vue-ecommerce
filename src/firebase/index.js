import * as firebase from 'firebase/app'
import 'firebase/firestore'
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
export const db = firebase.firestore()
