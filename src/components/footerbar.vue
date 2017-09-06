<template>
  <div>
    <tabbar>
      <tabbar-item selected link="/">
      <img slot="icon" src="../assets/baricon/zhihu.png" alt="">
      <img slot="icon-active" src="../assets/baricon/zhihu-active.png" alt="">
        <span slot="label">知乎日报</span>
      </tabbar-item>
      <!-- <tabbar-item show-dot link="/slider">
         <img slot="icon" src="../assets/baricon/fav.png" alt="">
      <img slot="icon-active" src="../assets/baricon/fav-active.png" alt="">
        <span slot="label">收藏</span>
      </tabbar-item> -->
      <tabbar-item  link="/me">
        <img slot="icon" src="../assets/baricon/me.png" alt="">
      <img slot="icon-active" src="../assets/baricon/me-active.png" alt="">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>