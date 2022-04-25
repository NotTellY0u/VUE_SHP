//配置路由
import Vue from "vue";
import VueRouter from "vue-router";

//使用插件
Vue.use(VueRouter)
//引入路由组件
import homeIndex from '@/pages/Home'
import loginIndex from '@/pages/Login'
import registerIndex from '@/pages/Register'
import searchIndex from '@/pages/Search'


//配置路由
export default new VueRouter({
    routes: [{
        path: "/home",
        component: homeIndex
    },
    {
        path: "/login",
        component: loginIndex
    },
    {
        path: "/register",
        component: registerIndex
    },
    {
        path: "/search",
        component: searchIndex
    }]
})