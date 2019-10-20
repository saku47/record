import Vue from 'vue'
import Router from 'vue-router'
import Dashbord from './components/Dashbord'
import Users from './components/Users'
import QRcodeReader from './components/QRcodeReader'
import AllHistory from './components/AllHistory'
import DeviceList from './components/DeviceList'
import QRcodeGenerator from './components/QRcodeGenerator'
import LendingStatus from './components/LendingStatus'
import Returndevice from './components/Returndevice'


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
        },
        {
            path: '/allhistory',
            name: 'AllHistory',
            component: AllHistory
        },
        {
            path: '/devicelist',
            name: 'DeviceList',
            component: DeviceList
        },
        {
            path: '/QRcodeGenerator',
            name: 'QRcodeGenerator',
            component: QRcodeGenerator
        },
        {
            path: '/LendingStatus',
            name: 'LendingStatus',
            component: LendingStatus
        },
        {
            path: '/returndevice',
            name: 'Returndevice',
            component: Returndevice
        }


    ]
})