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
import vOnModifier from '@/views/directives/vOnModifier'
import vModel from '@/views/directives/vModel'
import vModelComponent from '@/views/directives/vModelComponent'
import vCustom from '@/views/directives/vCustom'
import vmodelconditional from '@/views/directives/vmodelconditional'

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
        name: 'what is?',
      },
      children: [
        {
          path: 'whatIs',
          name: 'what is?',
          component: whatIs,
        },
        {
          path: 'vText',
          name: 'v-text',
          component: vText,
        },
        {
          path: 'vHtml',
          name: 'v-html',
          component: vHtml,
        },
        {
          path: 'vOnce',
          name: 'v-once',
          component: vOnce,
        },
        {
          path: 'vIf',
          name: 'v-if',
          component: vIf,
        },
        {
          path: 'vElse',
          name: 'v-else',
          component: vElse,
        },
        {
          path: 'vIfElse',
          name: 'v-if-else',
          component: vIfElse,
        },
        {
          path: 'vShow',
          name: 'v-show',
          component: vShow,
        },
        {
          path: 'vIfAndShow',
          name: 'v-if vs v-show',
          component: vIfAndShow,
        },
        {
          path: 'modelconditional',
          name: 'conditional lifecycle',
          component: vmodelconditional,
        },
        {
          path: 'vFor',
          name: 'v-for',
          component: vFor,
        },
        {
          path: 'vBind',
          name: 'v-bind',
          component: vBind,
        },
        {
          path: 'vOn',
          name: 'v-on',
          component: vOn,
        },
        {
          path: 'vOnModifier',
          name: 'v-on-modifier',
          component: vOnModifier,
        },
        {
          path: 'vModel',
          name: 'v-model',
          component: vModel,
        },
        {
          path: 'vModelComponent',
          name: 'v-model for component',
          component: vModelComponent,
        },
        {
          path: 'customDirective',
          name: 'custom directive',
          component: vCustom,
        },
      ],
    },
  ],
})
