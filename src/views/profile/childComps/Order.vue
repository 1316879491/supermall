<template>
    <div class="order">
        <div class="order-a">
            <span>我的订单</span>
            <span class="all">全部<img src="~assets/img/profile/all.svg" alt=""></span>
        </div>
        <div class="order-b">
            <div>
                <img src="~assets/img/profile/order/dfh.svg" alt="">
                <div>代发货</div>
            </div>
            <div>
                <img src="~assets/img/profile/order/dfk.svg" alt="">
                <div>代付款</div>
            </div>
            <div>
                <img src="~assets/img/profile/order/dsh.svg" alt="">
                <div>代收货</div>
            </div>
            <div>
                <img src="~assets/img/profile/order/pj.svg" alt="">
                <div>评价</div>
            </div>
            <div>
                <img src="~assets/img/profile/order/tk.svg" alt="">
                <div>退款售后</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Order',
}
</script>

<style scoped>
    .order{
        height: 100px;
        margin:20px 10px;
        background-color: #eee;
        border-radius: 2%;
    }
    .all {
        position: absolute;
        right: 20px;
        color: #aaa;
    }
    .all img {
        width: 10px;
        height: 10px;
        opacity: 0.3;
    }
    .order-a {
        border-bottom: 1px solid #fff;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        padding-left: 10px;
    }
    .order-b {
        height: 60px;
        line-height: 20px;
        font-size: 12px;
        display: flex;
        justify-content: space-around;
    }
    .order-b img {
        width: 26px;
        height: 26px;
        opacity: 0.5;
        margin-top: 5px;
    }
    .order-b div {
        text-align: center;
    }
</style>
