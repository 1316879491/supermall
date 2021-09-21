<template>
    <div class="cate-detail">
        <scroll :pull-up-load = "true" class="content" ref="scroll">
            <div class="cate-top">
                <div v-for="(item,index) in cateGoryDetailList" :key="index" class="cate-top-list">
                    <a :href="item.link">
                        <img :src="item.image" alt="" @load="imgLoad">
                        <div>{{item.title}}</div>
                    </a>
                </div>
            </div>
            <div class="tab-control">
                <tab-control :titles="['流行','新款','热门']"></tab-control>
            </div>
            <div class="item-list">
                
            </div>
        </scroll>
    </div>
</template>

<script>

import Scroll from '../../../components/common/scroll/Scroll.vue'
import TabControl from '../../../components/content/tabControl/TabControl.vue'

export default {
    components: { 
        Scroll,
        TabControl, 
    },
    name: 'CateGoryDetail',
    props: {
        cateGoryDetailList:{
            type: Array,
            dafault() {
                return []
            }
        }
    },
    methods: {
        imgLoad() {
            this.$refs.scroll.refresh()
        }
    }
}
</script>

<style scoped>
    .content{
        overflow: hidden;
        position: absolute;
        top: 64px;
        bottom: 49px;
    }
    .cate-detail {
        width: 80%;
    }
    .cate-top-list{
       /*  display: flex; */
        width: 40%;
        /* flex-direction: row; */
        margin-bottom: 10px;
    }
    .cate-top-list img {
        width: 90px;
        height: 90px;
    }
    .cate-top-list div {
        text-align: center;
        font-size: 12px;
    }
    .cate-top {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 20px;
    }
    .tab-control {
        width: 100%;
    }
</style>
