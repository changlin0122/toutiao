// 文章相關的 API 街口 都封裝到這個模塊中
import request from "@/utils/request.js"

// 向外案須導出一個 API 函數
export const getArticleListAPI = function (_page, _limit) {
  // console.log('ok')
  return request.get('/articles', {
    // 請求參數
    params: {
      _page,
      _limit
    }
  })
}