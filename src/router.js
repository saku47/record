import Vue from 'vue'
import Router from 'vue-router'
import Dashbord from './components/Dashbord'
import Users from './components/Users'
import QRcodeReader from './components/QRcodeReader'

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
            path: '/QRcodeReader',
            name: 'QRcodeReader',
            component: QRcodeReader
        }

    ]
})