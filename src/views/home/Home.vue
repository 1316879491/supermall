<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles = "['流行','新款','精选']" @tabClick = "tabClick" ref="tabControl1"
    class="tabControl"
    v-show="isTabFixed"></tab-control>

    <scroll class="content" 
    ref="scroll" 
    :probe-type = '3' 
    @scroll="contentScroll"
    :pull-up-load="true"
    @pullingUp='loadMore'>
    <home-swiper :banners = "banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
    <recommend-view :recommends = "recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles = "['流行','新款','精选']" @tabClick = "tabClick" ref="tabControl2"></tab-control>
    <good-list :goods = "showGoods"></good-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBacktop"></back-top>
  </div>
</template>

<script>

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/featureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodList from 'components/content/goods/GoodList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultiData,getHomeGoods} from 'network/home'
import {itemListenerMixin,backTopMixin} from 'common/mixin'


export default {
  data () {
    return {
      banners:[],
      recommends:[],
      goods: {
        'pop': {page: 0,list: []},
        'new': {page: 0,list: []},
        'sell': {page: 0,list: []},
      },
      currentType : 'pop',
      tabOffsetTop: 0,
      isTabFixed: false,
      itemImgListener: null
      /* saveY: 0 */
    }
  },
  mixins: [itemListenerMixin,backTopMixin],
  created () {
    this.getHomeMultiData()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted () {
    
  },
  activated () {
    this.$refs.scroll.scrollTo(0,this.saveY)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    this.saveY = this.$refs.scroll.scroll.y
    this.$bus.$off('itemImageLoad',this.itemImgListener)
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    //请求数据的方法
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list,
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.finishPullUp()
      })
    },
    //
    tabClick(index) {
      switch(index) {
        case 0 :
          this.currentType = 'pop';
          break;
        case 1 :
          this.currentType = 'new';
          break;
        case 2 :
          this.currentType = 'sell';
          break
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentScroll(position) {
      //console.log(position);
      this.isShowBacktop = (-position.y) > 1000

      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.refresh()
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  }
}
</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: white;

    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1; */
  }
/*   .tab-control {
    position: sticky;
    top:44px;
    z-index: 9;
  } */
  /*   .content {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  }  */
    .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /* .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  } */
  .tabControl {
    position: relative;
    z-index: 9;
  }
</style>