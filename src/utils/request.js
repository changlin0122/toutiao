import axios from 'axios'

const request = axios.create({
    // 指定請求的跟路徑
    baseURL: 'https://www.escook.cn'
})

export default request