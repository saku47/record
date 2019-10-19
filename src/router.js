import Vue from 'vue'
import Router from 'vue-router'
import Dashbord from './components/Dashbord'
import Users from './components/Users'
import QRcode_reader from './components/QRcode_reader'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Dashbord',
            component: Dashbord
        },
        {
            path: '/users',
            name: 'Users',
            component: Users
        },
        {
            path: '/QRcode_reader',
            name: 'QRcode_reader',
            component: QRcode_reader
        }

    ]
})