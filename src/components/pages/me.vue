<template>
  <div style="">
    <blur :blur-amount=40 :url="url">
      <p class="center"><img :src="url"></p>
      <p class="center">{{area}}的朋友</p>
    </blur>
      <group>
      <cell :title="'您的IP'" :value="ip" ></cell>
      <cell :title="'您的运营商'" :value="carrier" ></cell>
    </group>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Blur, Card, Group, Cell } from 'vux'
export default {
  components: {
    Blur,
    Flexbox,
    FlexboxItem,
    Group,
    Cell
  },
  data () {
    return {
      url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
      area: '',
      ip: '',
      carrier: ''
    }
  },
  created() {
    this.getip()
  },
  methods: {
    getip() {
      let _this = this
      let url = 'https://bird.ioliu.cn/ip'
      this.$http.get(url)
      .then(function(res){
        
        let data = res.body.data
        
        _this.area = data.area
        _this.ip = data.ip
        _this.carrier = data.location
        console.log(data.location)


      })
    }
  }
}
</script>

<style scoped>
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
</style>