<template>
    <div id="detail">
        <detail-nav-bar class="detail-navbar"></detail-nav-bar>
        <scroll class="content" ref="scroll" :pull-up-load = "true">
            <detail-swiper :top-images="topImages"></detail-swiper>
            <detail-base-info :goods="goodsInfo"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detailInfo="detailInfo" @imageLoad='imageLoad'></detail-goods-info>
            <detail-param-info :paramInfo = 'paramInfo'></detail-param-info>
            <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
            <good-list :goods='recommends'></good-list>
        </scroll>
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

import Scroll from 'components/common/scroll/Scroll'
import GoodList from 'components/content/goods/GoodList'

import {getDetail,GoodsInfo,Shop,GoodsParam,getRecommend} from 'network/detail'
import {debounce} from 'common/utils'


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
            recommends: []
        }
    },
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
        })

        getRecommend().then(res => {
            this.recommends = res.data.list
        })
    },
    mounted () {

    const refresh = debounce(this.$refs.scroll.refresh,200)

    this.$bus.$on('itemImageLoad',() => {
        refresh()
    })
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
        GoodList
    },
    methods: {
        /*  imageLoad() {
            this.$refs.scroll.refresh()
        }, */
        imageLoad() {
            this.$refs.scroll.refresh()
        },
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
    height: calc(100% - 44px);
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
</style>
