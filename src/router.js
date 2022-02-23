import { createRouter, createWebHistory } from 'vue-router'

import Example1View from '@/views/Example1View.vue'
import Example2View from '@/views/Example2View.vue'
import IndexView from '@/views/IndexView.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexView,
  },
  {
    path: '/example-1',
    name: 'Example1',
    component: Example1View,
  },
  {
    path: '/example-2',
    name: 'Example2',
    component: Example2View,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
