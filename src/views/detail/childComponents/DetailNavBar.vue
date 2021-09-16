<template>
    <div>
        <nav-bar>
                <div slot="center" class="titles">
                <div 
                v-for="(item,index) in titles"
                :key="item.index"
                class="titles-item"
                :class="{active: index === currentIndex}"
                @click="titleClick(index)">{{item}}
                </div>
                </div>
                <div slot="left" class="back" @click="backClick">
                    <img src="~assets/img/common/back.svg" alt="">
                </div>
        </nav-bar>
    </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar.vue'

export default {
    components: {
        NavBar
    },
    data () {
        return {
            titles:['商品','参数','评论','推荐'],
            currentIndex: 0
        }
    },
    methods: {
        titleClick(index) {
            this.currentIndex = index
            this.$emit('titleClick',index)
        },
        backClick() {
            this.$router.back()
        }
    }
}
</script>

<style>
.titles {
    display: flex;
    font-size: 14px;
}
.titles-item {
    flex: 1;
}
.active {
    color: var(--color-high-text);
}
.back img {
    margin-top: 15px;
    width: 16px;
    height: 16px;
}
</style>
