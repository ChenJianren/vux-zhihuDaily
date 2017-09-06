<template>
    <div id="app">
     <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <footerbar v-show="home"></footerbar>
  </div> 
</template>

<script>
import footerbar from '@/components/footerbar'
import store from './vuex/store';
export default {
  name: 'app',
  components: {
    footerbar
  },
  store,
  data(){
            return{
            }
        },
       
  computed : {
            home(){
                return this.$store.state.home
            },
            other(){
                return this.$store.state.other
            }
        }
}
</script>

<style lang="less" >
@import '~vux/src/styles/reset.less';

.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity .3s;
}

.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}

.weui-tabbar {
    position: fixed;
    height: 53px;
}






</style>
