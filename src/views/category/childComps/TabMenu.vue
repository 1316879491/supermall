<template>
    <div class="tab-menu">
        <scroll :pull-up-load = "true" class="contenter" ref="scroll">
                <div
                    v-for="(item,index) in cateGoryList" 
                    :key="index"
                    class="menu-list"
                    :class="{active:index === currentIndex}"
                    @click="menuClick(index)">
                    {{item.title}}</div> 
        </scroll>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
    name: 'TabMenu',
    data () {
        return {
            currentIndex: 0
        }
    },
    props: {
        cateGoryList:{
            type: Array,
            default() {
                return []
            }
        }
    },
    mounted () {
        this.$refs.scroll.refresh()
    },
    methods: {
        menuClick(index) {
            this.currentIndex = index;
            this.$emit('menuClick',index)
        }
    },
    components: {
        Scroll
    }
}
</script>

<style scoped>
    .contenter {
        overflow: hidden;
    }
    .tab-menu {
        width: 20%;
        background-color: #eee;
    }
    .menu-list {
        height: 45px;
        line-height: 45px;
        font-size: 14px;
        text-align: center;
    }
    .active {
        color: #ff8198;
        font-weight: bold;
        background-color: #fff;
    }
</style>
