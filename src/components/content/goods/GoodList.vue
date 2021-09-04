<template>
    <div class="goods">
        <good-list-item v-for="item of goods" :goodsItem = "item" :key="item.index"></good-list-item>
    </div>
</template>

<script>

import GoodListItem from './GoodListItem'

export default {
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        GoodListItem
    }
}
</script>

<style>
    .goods {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        padding: 3px;
    }
</style>