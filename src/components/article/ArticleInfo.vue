<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}</span>
          <!-- 单张图片 -->
          <img src="https://www.escook.cn/vuebase/pics/1.png" alt="" class="thumb">
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box">
          <img src="https://www.escook.cn/vuebase/pics/2.png" alt="" class="thumb">
          <img src="https://www.escook.cn/vuebase/pics/2.png" alt="" class="thumb">
          <img src="https://www.escook.cn/vuebase/pics/2.png" alt="" class="thumb">
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>作者 {{ author}} &nbsp;&nbsp; {{ cmtCount }}评论 &nbsp;&nbsp; 发布日期 {{ time }}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  // 自定義屬性
  props: {
    // 文章標題
    title: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    cmtCount: {
      // 通過術組形式 為當前屬性提供多個類型
      type: [Number, String],
      default: 0
    },
    time: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
  .label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>