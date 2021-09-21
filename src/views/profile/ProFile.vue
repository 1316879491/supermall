<template>
    <div class="profile">
        <nav-bar class="nav-bar"><div slot="center">我的</div></nav-bar>
        <user></user>
        <detail-info></detail-info>
        <order></order>
    </div>
</template>

<script>

import NavBar from '../../components/common/navbar/NavBar.vue'
import DetailInfo from './childComps/Detail-info.vue'
import Order from './childComps/Order.vue'
import User from './childComps/User.vue'

export default {
    name: 'ProFile',
    components: { 
        NavBar,
        User,
        DetailInfo,
        Order,
    },
}
</script>

<style scoped>
    .nav-bar {
        background-color: var(--color-tint);
        color: white;
    }
</style>
