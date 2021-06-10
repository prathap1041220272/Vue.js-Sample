import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import details from '@/components/product'
import services from '@/components/services'

Vue.use(Router)

function lazyLoad(view) {
    return () => import(`@/components/${view}.vue`)
}

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: lazyLoad('catalog'),
            children: [
                {
                    path: ':service',
                    component: services
                },
            ]
        },
        {
            path: '/details/:id',
            name: 'details',
            component: details
        }
    ],
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
})