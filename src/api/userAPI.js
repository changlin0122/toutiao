import request from "@/utils/request.js"

// 注意 下面街口調用只是純粹的掩飾 因為服務器沒有提供 /user 這個街口
export const getUserInfoAPI = function () {
  return request.get('/user')
}