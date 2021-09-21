<template>
    <div class="user">
        <img src="../../../assets/img/profile/avatar.svg" alt="">
        <div>登录/注册</div>
    </div>
</template>

<script>
export default {
    name: 'User',
}
</script>

<style scoped>
    .user {
        background-color: var(--color-tint);
        display: flex;
        color: #fff;
    }
    .user img {
        width: 80px;
        height: 80px;
    }
    .user div {
        margin-top: 20px;
        margin-left: 20px;
    }
</style>
