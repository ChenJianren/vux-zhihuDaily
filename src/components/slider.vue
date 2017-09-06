<template>
  <div>
  
    <swiper height="230px" id="spot" loop auto :list="urlList" ></swiper>


  </div>
</template>

<script>
import { Swiper,SwiperItem } from 'vux'
export default {
  components: {
    Swiper,
    SwiperItem
  },
  ready () {
  },
  created() {
    this.getsliderimg()
  },
  methods: {
    getsliderimg() {
      let _this = this
      let url = 'https://news-at.zhihu.com/api/4/news/latest'
      this.$http.get('https://bird.ioliu.cn/v1/?url='+url)
      .then(function(res){
          let resobj = res.body.top_stories
         _this.urlList = resobj.map(function(item){
          let _item = {}
          _item['img'] = item.image
          _item['title'] = item.title
          _item['url'] = {
            path:'/article/' + item.id,
            replace:false
          }
          return _item
        })
        
          

      })
      .catch(function(err){
         
      })
      },
  },
  data () {
    return {
     
      urlList:[],
      swiperItemIndex: 1
    }
  }
}
</script>

<style scoped>
.copyright {
  font-size: 12px;
  color: #ccc;
  text-align: center;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.black {
  background-color: #000;
}
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.vux-indicator.custom-bottom {
  bottom: 30px;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
.swiper-demo-img img {
  width: 100%;
}

</style>