import Vue from 'vue'
import VueRouter from 'vue-router'

//導入需要的組件
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'

// 把 VueRouter 安裝為 Vue 的插劍
Vue.use(VueRouter)

// 路由規則的樹組
const routes = [
  // 首頁的路由規則
  { path: '/', component: Home},
  // 我的路由規則
  { path: '/user', component: User}
]

// 創建路由實力對象
const router = new VueRouter({
  routes
})

export default router
