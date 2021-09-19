<template>
    <div id="detail">
        <detail-nav-bar class="detail-navbar" @titleClick='titleClick' ref="navbar"></detail-nav-bar>
        <scroll class="content" ref="scroll" :pull-up-load = "true" @scroll="detailScroll" :probe-type='3'>
            <detail-swiper :top-images="topImages"></detail-swiper>
            <detail-base-info :goods="goodsInfo"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detailInfo="detailInfo" @imageLoad='imageLoad'></detail-goods-info>
            <detail-param-info :paramInfo = 'paramInfo' ref="params"></detail-param-info>
            <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
            <good-list :goods='recommends' ref="recommends"></good-list>
        </scroll>
        <detail-bottom-bar @addCart='addCart'></detail-bottom-bar>
        <back-top @click.native="backClick" v-show="isShowBacktop" class="back-top"></back-top>
        <!-- <toast :message="message" :show="show"></toast> -->
    </div>
</template>

<script>

import DetailNavBar from './childComponents/DetailNavBar.vue'
import DetailSwiper from './childComponents/detailSwiper.vue'
import DetailBaseInfo from './childComponents/DetailBaseInfo.vue'
import DetailShopInfo from './childComponents/DetailShopInfo.vue'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo.vue'
import DetailParamInfo from './childComponents/DetailParamInfo.vue'
import DetailCommentInfo from './childComponents/DetailCommentInfo.vue'
import DetailBottomBar from './childComponents/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodList from 'components/content/goods/GoodList'
import BackTop from 'components/content/backTop/BackTop'

import {getDetail,GoodsInfo,Shop,GoodsParam,getRecommend} from 'network/detail'
import {itemListenerMixin,backTopMixin} from 'common/mixin'
import {debounce} from 'common/utils'
import {mapActions} from 'vuex'



export default {
    name:'Detail',
    data () {
        return {
            iid: null,
            topImages: [],
            goodsInfo: {},
            shop: {},
            detailInfo: {},
            paramInfo: {},
            commentInfo: {},
            recommends: [],
            itemImgListener: null,
            themeTopY: [],
            getThemeTopY: null,
            currentIndex: 0,
        }
    },
    mixins: [itemListenerMixin,backTopMixin],
    created () {
        this.iid = this.$route.params.id

        getDetail(this.iid).then(res => {
            /* console.log(res); */
            const data = res.result
            this.topImages = data.itemInfo.topImages

            this.goodsInfo = new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)

            this.shop = new Shop(data.shopInfo)

            this.detailInfo = data.detailInfo

            this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

            if(data.rate.cRate !== 0) {
                this.commentInfo = data.rate.list[0]
            }

            //因为图片没有加载完,所以offsetTop的值不对
            /* this.$nextTick(() => {
                this.themeTopY = []
                this.themeTopY.push(0)
                this.themeTopY.push(this.$refs.params.$el.offsetTop)
                this.themeTopY.push(this.$refs.comment.$el.offsetTop)
                this.themeTopY.push(this.$refs.recommends.$el.offsetTop)
                console.log(this.themeTopY);
            }) */
        })
        
        getRecommend().then(res => {
            this.recommends = res.data.list
        })

        this.getThemeTopY = debounce(() => {
                this.themeTopY = []
                this.themeTopY.push(0)
                this.themeTopY.push(this.$refs.params.$el.offsetTop)
                this.themeTopY.push(this.$refs.comment.$el.offsetTop)
                this.themeTopY.push(this.$refs.recommends.$el.offsetTop)
                /* this.themeTopY.push(Number.MAX_VALUE) */
                /* console.log(this.themeTopY); */
        },500)
        
    },
    destroyed () {
        this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodList,
        DetailBottomBar,
        BackTop,
    },
    methods: {
        /*  imageLoad() {
            this.$refs.scroll.refresh()
        }, */
        ...mapActions({
            add: 'addCart'
        }),
        imageLoad() {
            this.$refs.scroll.refresh()

            this.getThemeTopY()
        },
        titleClick(index) {
            this.$refs.scroll.scrollTo(0,-this.themeTopY[index]+48,500)
        },
        detailScroll(position) {
            const positionY = -position.y+48
            const length = this.themeTopY.length

            for(let i = 0;i < length;i++) {
                /*  if(positionY > this.themeTopY[i] && positionY < this.themeTopY[i + 1]) {
                    
                } */
                if(this.currentIndex !== i && (i < length-1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1]
                ) || (i === length-1 && positionY >= this.themeTopY[i])) {
                    this.currentIndex = i
                    this.$refs.navbar.currentIndex = this.currentIndex
                    //console.log(i);
                }
                /* if(this.currentIndex !== i && (positionY >= this.themeTopY[i] && positionY > this.
                themeTopY[i+1])) {
                    this. currentIndex = i
                    this.$refs.navbar.currentIndex = this.currentIndex
                } */
            }

            this.isShowBacktop = (-position.y) > 1000
        },
        addCart() {
            const product = {}
            product.image = this.topImages[0]
            product.title = this.goodsInfo.title;
            product.desc = this.goodsInfo.desc;
            product.price = this.goodsInfo.realPrice;
            product.iid = this.iid;

            //this.$store.cartList.push(product)
            //this.$store.commit('addCart',product)
            /* this.$store.dispatch('addCart',product).then(res => {
                console.log(res);
            }) */
            this.add(product).then(res => {
                /* this.show = true;
                this.message = res;

                setTimeout(() => {
                    this.show = false
                }, 1000); */
                this.$toast.show(res,1500)
            })
        }
    }
}
</script>

<style scoped>
#detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}
.content {
    height: calc(100% - 44px - 60px);
    /*  position: absolute;
    top: 44px;
    bottom: 0;
    right: 0;
    left: 0; */
}
.detail-navbar {
    position: relative;
    z-index: 9;
    background-color: #fff;
}
.back-top {
    position: fixed;
    bottom: 60px;
    right: 5px;
}
</style>
