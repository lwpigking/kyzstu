import { createApp } from 'vue'
import App from './App.vue'

// element-plus
import ElementPlus from 'element-plus'
import "element-plus/dist/index.css"

// 全局组件
import Top from "./components/home/top/Top.vue"
import Footer from "./components/home/footer/Footer.vue"

// 路由实例
import router from "./router/router.js"

// 全局样式
import "./public/css/clear.css"

const app = createApp(App)
app.use(ElementPlus)
app.use(router)

// 设置全局组件
app.component("Top", Top)
app.component("Footer", Footer)

app.mount("#app")

