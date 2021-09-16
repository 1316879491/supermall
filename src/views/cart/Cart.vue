<template>
  <div class="cart">
      <nav-bar class="nav-bar">
        <div slot="center">购物车({{cartLength}})</div>
      </nav-bar>
      <cart-list></cart-list>
      <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
import { mapGetters } from 'vuex'
import CartList from './childComps/cartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'

export default {
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: 
    {
    /*  cartLength() {
      return this.$store.getters.cartLength
    } */
    ...mapGetters([
      'cartLength'
    ])
  }
}
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
  .cart {
    height: 100vh;
  }
</style>