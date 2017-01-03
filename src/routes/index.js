import App from './app.vue'


import My from './my/index.vue'
import MyWin from './my/win.vue'
import MyOrder from './my/order.vue'
import MyDeposit from './my/deposit.vue'
import MyBills from './my/bills.vue'

import Issue from './issue/index.vue'
import IssueInfo from './issue/info.vue'
import IssueProduct from './issue/product.vue'
import IssuePast from './issue/past.vue'
import IssueResult from './issue/result.vue'
import IssueFail from './issue/fail.vue'


import OrderPay from './order/pay.vue'
import OrderSuccess from './order/success.vue'

import accountBind from './account/bind.vue'
import accountVertify from './account/vertify.vue'

import Settings from './settings/index.vue'
import SettingsAbout from './settings/about.vue'
import SettingsContact from './settings/contact.vue'




export default [
  	{ path: '/', component: App },
  	{ 
      path: '/my', 
      component: My,
      children: [
        {path: '', component: MyOrder},
        {path: 'win', component: MyWin}
      ]
    },
    {
      path: '/my/deposit',
      component: MyDeposit
    },
    {
      path: '/my/bills',
      component: MyBills
    },
    { 
      path: '/issue/:id', 
      component: Issue,
      children: [
        {path: '', component: IssueInfo},
        {path: 'detail', component: IssueProduct},
        {path: 'past', component: IssuePast}
      ]
    },
    {
      path: '/issue/fail',
      component: IssueFail
    },
    {
      path: '/issue/result/:id',
      component: IssueResult
    },
    {
      path: '/order/pay',
      component: OrderPay
    },
    {
      path: '/order/success',
      component: OrderSuccess
    },
    {
      path: '/account/bind',
      component: accountBind
    },
    {
      path: '/account/vertify',
      component: accountVertify
    },

    {
      path: '/settings',
      component: Settings
    },
    {
      path: '/settings/about',
      component: SettingsAbout
    },
    {
      path: '/settings/contact',
      component: SettingsContact
    },
]
