<template>
    <div class="detail-info">
        <div>
            <img src="~assets/img/profile/home.svg" alt="">
            <div>我的主页</div>
        </div>
        <div>
            <img src="~assets/img/profile/message.svg" alt="">
            <div>消息</div>
        </div>
        <div>
            <img src="~assets/img/profile/coll.svg" alt="">
            <div>收藏</div>
        </div>
        <div>
            <img src="~assets/img/profile/follow.svg" alt="">
            <div>关注</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Detail-info',
}
</script>

<style scoped>
    .detail-info {
        display: flex;
        justify-content: space-around;
        font-size: 12px;
        margin:20px 10px;
        background-color: #eee;
        height: 80px;
        border-radius: 2%;
    }
    .detail-info img {
        width: 30px;
        height: 30px;
    }
    .detail-info div {
        text-align: center;
        line-height: 10px;
        margin-top: 15px;
    }
</style>
