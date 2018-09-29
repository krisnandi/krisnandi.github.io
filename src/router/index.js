import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Directives from '@/views/directives/index'
import whatIs from '@/views/directives/whatIs'
import vText from '@/views/directives/vText'
import vHtml from '@/views/directives/vHtml'
import vOnce from '@/views/directives/vOnce'
import vIf from '@/views/directives/vIf'
import vElse from '@/views/directives/vElse'
import vIfElse from '@/views/directives/vIfElse'
import vShow from '@/views/directives/vShow'
import vIfAndShow from '@/views/directives/vIfAndShow'
import vFor from '@/views/directives/vFor'
import vBind from '@/views/directives/vBind'
import vOn from '@/views/directives/vOn'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/directives',
      name: 'directives',
      component: Directives,
      redirect: {
        name: 'whatIs',
      },
      children: [
        {
          path: 'whatIs',
          name: 'whatIs',
          component: whatIs,
        },
        {
          path: 'vText',
          name: 'vText',
          component: vText,
        },
        {
          path: 'vHtml',
          name: 'vHtml',
          component: vHtml,
        },
        {
          path: 'vOnce',
          name: 'vOnce',
          component: vOnce,
        },
        {
          path: 'vIf',
          name: 'vIf',
          component: vIf,
        },
        {
          path: 'vElse',
          name: 'vElse',
          component: vElse,
        },
        {
          path: 'vIfElse',
          name: 'vIfElse',
          component: vIfElse,
        },
        {
          path: 'vShow',
          name: 'vShow',
          component: vShow,
        },
        {
          path: 'vIfAndShow',
          name: 'vIfAndShow',
          component: vIfAndShow,
        },
        {
          path: 'vFor',
          name: 'vFor',
          component: vFor,
        },
        {
          path: 'vBind',
          name: 'vBind',
          component: vBind,
        },
        {
          path: 'vOn',
          name: 'vOn',
          component: vOn,
        },
      ],
    },
  ],
})
