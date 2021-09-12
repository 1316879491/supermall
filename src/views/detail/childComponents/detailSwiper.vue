<template>
    <div class="detail-swiper">
        <swiper>
            <swiper-item class="swiper-item" v-for="item of topImages" :key="item">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>

import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
    props: {
        topImages: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
    methods: {
        /* imageLoad() {
            this.$emit('imageLoad')
        } */
    }
}
</script>

<style scoped>
    .swiper-item {
        height: 45vh;
        overflow: hidden;
    }
</style>
