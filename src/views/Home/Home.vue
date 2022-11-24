  <template>
  <div class="home-container">
    <!-- 頭部區域 -->
    <van-nav-bar title="好馬頭條" fixed />
    
    <!-- 導入 註冊 並使用 ArticleInfo 組建 -->
    <!-- 在使用自定義組建 如果某個組建名是小駝峰形式 則綁定屬性的時候建議改寫成連字符格式 -->
    <ArticleInfo 
    v-for="item in artlist" 
    :key="item.id" 
    :title="item.title" 
    :author="item.aut_name" 
    :cmt-count="item.comm_count"
    :time="item.pubdate"
    ></ArticleInfo>
  </div>
</template>

<script>
// 按需導入 API 街口
import { getArticleListAPI } from '@/api/articleAPI.js'

import ArticleInfo from '@/components/article/ArticleInfo.vue'

export default {
    namr: 'Home',
    data() {
      return {
        // 頁碼直
        page: 1,
        // 每頁顯示多少數據
        limit:10,
        // 文章數組
        artlist: [],

      }
    },
    created() {
      this.initArticleList()
    },
    methods: {
      // 封裝獲取文章列表數據的方法
      async initArticleList() {
        // 發起 GET 請球 獲取列表數據
        const { data: res} = await getArticleListAPI(this.page, this.limit)

        console.log(res)
        this.artlist = res
      }
    },
    // 註冊組建
    components: {
      ArticleInfo
    }
}
</script>

<style lang="less" scoped>
.home-container{
    padding: 46px 0 50px 0;
    .van-nav-bar{
    background-color: #007bff;
    }
    /deep/.van-nav-bar__title{
        color: white;
    }
}
</style>