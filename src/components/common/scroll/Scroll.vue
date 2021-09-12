<template>
    <div class="wrapper" ref="wrapper">
            <div class="content">
                <slot></slot>
            </div>
    </div>
</template>

<script>

import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)

export default {
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            dafault: false
        }
    },
    data () {
        return {
            scroll: null
        }
    },
    mounted () {
            this.scroll = new BScroll(this.$refs.wrapper,{
                click:true,
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad,
                observeDOM: true,
                observeimage:true
            });
            this.scroll.on('scroll',(position) => {
                //console.log(position);
                this.$emit('scroll', position)
            })
            this.scroll.on('pullingUp',() => {
                //console.log('aaa');
                this.$emit('pullingUp')
            })
    },
    methods: {
        scrollTo(x,y,time=400) {
            this.scroll.scrollTo(x,y,time)
        },
        finishPullUp() {
            this.scroll.finishPullUp()
        },
        refresh() {
            this.scroll && this.scroll.refresh()
            /* console.log(this.scroll); */
        }
    }
}
</script>

<style>
    
</style>