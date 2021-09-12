<template>
<div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
        <span class="n-price">{{goods.newPrice}}</span>
        <span class="o-price">{{goods.oldPrice}}</span>
        <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
        <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
            <img :src="goods.services[index-1].icon" alt="">
            <span>{{goods.services[index-1].name}}</span>
        </span>
    </div>
</div>
</template>

<script>
export default {
    props: {
        goods: {
            type: Object,
            defalut() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .info-title {
        margin: 10px 0;
		padding: 0 4px;
		font-size: 16px;
        font-weight: bold;
		/* line-height: 20px; */
    }
    .info-price {
        display: flex;
        padding:0 4px 10px;
    }
    .n-price {
        color: var(--color-high-text);
        font-size: 20px;
    }
    .o-price {
        color: #999;
        font-size: 14px;
        margin: 6px 4px 0;
        text-decoration: line-through;
    }
    .discount {
        color: #fff;
        background-color: var(--color-high-text);
        font-size: 12px;
        border-radius: 100px;
        padding: 4px 6px 0;
    }
    .info-other {
        display: flex;
        color: rgb(170, 170, 170);
        font-size: 14px;
		padding: 10px 4px;
        border-bottom: 1px solid #ededed;
		border-top: 1px solid #ededed;
    }
    .info-other span {
        flex: 1;
        justify-content:space-between
    }
    .info-service {
        display: flex;
    }
    .info-service-item {
        flex: 1;
        font-size: 12px;
    }
    .info-service-item img {
        width: 12px;
		height: 12px;
    }
</style>
