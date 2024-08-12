// 路由
import {createRouter, createWebHistory} from "vue-router";

// 首页组件
import Home from "../components/home/Home.vue";
// 本科生教育组件
import Bksjy from "../components/bksjy/Bksjy.vue";
// 学科专业组件
import Xkzy from "../components/xkzy/Xkzy.vue";
import Fzfzxy from "../components/xkzy/fxfzxy/Fzfzxy.vue";
import Xxykzxy from "../components/xkzy/xxykzxy/Xxykzxy.vue";
import Jjglxy from "../components/xkzy/jjglxy/Jjglxy.vue";
import Ysysjxy from "../components/xkzy/ysysjxy/Ysysjxy.vue";
import Rwygjjlxy from "../components/xkzy/rwygjjlxy/Rwygjjlxy.vue";
import Jzgcxy from "../components/xkzy/jzgcxy/Jzgcxy.vue";
// 信息公开组件
import Xxgk from "../components/xxgk/Xxgk.vue";
import Ztb from "../components/xxgk/ztb/Ztb.vue";
import Dwzw from "../components/xxgk/dwzw/Dwzw.vue";
import Qtxx from "../components/xxgk/qtxx/Qtxx.vue";
// 网办大厅组件
import Wbdt from "../components/wbdt/Wbdt.vue";
import Bsml from "../components/wbdt/Bsml.vue";
import Grzx from "../components/wbdt/Grzx.vue";
import Wzqjssq from "../components/wbdt/wzqjssq/Wzqjssq.vue";
import BsmlAll from "../components/wbdt/bsmlAll/BsmlAll.vue";

// 定义路由
const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/bksjy",
        component: Bksjy
    },
    {
        path: "/xkzy",
        component: Xkzy
    },
    {
        path: "/xkzy/fzfzxy",
        component: Fzfzxy
    },
    {
        path: "/xkzy/xxykzxy",
        component: Xxykzxy
    },
    {
        path: "/xkzy/jjglxy",
        component: Jjglxy
    },
    {
        path: "/xkzy/ysysjxy",
        component: Ysysjxy
    },
    {
        path: "/xkzy/rwygjjlxy",
        component: Rwygjjlxy
    },
    {
        path: "/xkzy/jzgcxy",
        component: Jzgcxy
    },
    {
        path: "/xxgk",
        component: Xxgk,
        children: [
            {path: "ztb", component: Ztb},
            {path: "dwzw", component: Dwzw},
            {path: "qtxx", component: Qtxx}
        ]
    },
    {
        path: "/wbdt",
        component: Wbdt,
    },
    {
        path: "/bsml",
        component: Bsml,
        children: [
            {path: "wzqjssq", component: Wzqjssq},
            {path: "bsmlall", component: BsmlAll}
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router