<template>
  <div>
      <slider></slider>
      <panel :header="'Stories/'+datetop"  :list="list" :type="type"></panel>
      <div class="weui-panel__ft loadmore weui-cell weui-cell_access weui-cell_link" @click="loadmore()">加载更多<inline-loading v-show="loading"></inline-loading></div>
  </div>
</template>
<script>
import { Panel,InlineLoading } from 'vux'
import slider from '../components/slider'

export default {
  components:{
      Panel,
      InlineLoading,
      slider
  },
  data () {
      return {
      datetop:'',
      type: '1',
      list: [],
      loading: false,
      todayDate: ''
    }
  },
  created () {
       this.$store.dispatch("inHome")
      this.getlatest()
        this.$vux.loading.show({
 text: 'Loading'
})
  },
  methods:{
      getlatest() {
      let _this = this
      let url = 'https://news-at.zhihu.com/api/4/news/latest'
      this.$http.get('https://bird.ioliu.cn/v1/?url='+url)
      .then(function(res){
          _this.datetop = res.body.date
          _this.todayDate = res.body.date
          let resobj = res.body.stories
         _this.list = resobj.map(function(item){
             _this.$vux.loading.hide()
          let _item = {}
          _item['src'] = item.images[0]
          _item['title'] = item.title
          _item['desc'] = ''
          _item['url'] = {
            path:'/article/' + item.id,
            replace:false
          }
          return _item
        })
          

      })
      .catch(function(err){
          console.log(err)
      })
      },
      loadmore() {
          this.loading = true
         let _this = this
         this.$http.get('https://bird.ioliu.cn/v1/?url=https://news-at.zhihu.com/api/4/news/before/'+this.todayDate)
         .then(function(res){
             _this.todayDate = res.body.date
             let moredata = res.data
            for(let images of moredata.stories){
                let morelist = images
                morelist['src'] = morelist.images[0]
                morelist['url'] = {
                    path:'/article/' + morelist.id,
                    replace:false
                }
                _this.list.push(morelist)
                _this.todayDate = moredata['date']
                _this.loading = false
            }
            

         })
                   
                
      }
  }
}
</script>
