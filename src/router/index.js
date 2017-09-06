import Vue from 'vue'
import Router from 'vue-router'
import newslist from '@/components/newslist'
import article from '@/components/article/article'
import slider from '@/components/slider'
import test from '@/components/test'
import me from '@/components/pages/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'newslist',
      component: newslist
    },
    {
      path:'/article/:article_id',
      name:'article',
      component: article
    },
    {
      path:'/slider',
      name:'slider',
      component: slider
    },
    {
      path:'/test',
      name:'test',
      component: test
    },
    {
      path:'/me',
      name:'me',
      component: me
    }
  ]
})
