<template>
  <div>
    <!-- 路由佔位符 -->
    <router-view></router-view>

    <!-- Tabbar 區域 -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">标签</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
</style>
