<template>
    <div class="cart-list">
        <scroll class="content" :pull-up-load = "true" ref="scroll">
            <cart-list-item v-for="(item,index) in cartList" :key="index" :product='item'
            @remove="remove" :index="index"></cart-list-item>
        </scroll>
    </div>
</template>

<script>


import Scroll from 'components/common/scroll/Scroll'
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem.vue'

export default {
name: 'cartList',
methods: {
    remove(index) {
        //console.log(index);
        this.cartList.splice(index,1);
    }  
},
computed: {
    ...mapGetters(['cartList']),
    CartListLength() {
        return this.cartList.length
    }
},
components: {
    Scroll,
    CartListItem
},
activated () {
    this.$refs.scroll.refresh()
},
watch: {
    CartListLength(value) {
        this.$refs.scroll.refresh()
    }
}
}
</script>

<style scoped>
    .cart-list {
        height: calc(100% - 44px - 90px);
    }
    .content {
        height: 100%;
        overflow: hidden;
    }
</style>
