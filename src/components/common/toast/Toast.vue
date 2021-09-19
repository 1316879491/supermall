<template>
<transition 
enter-active-class="animate__animated animate__bounceIn"
leave-active-class="animate__animated animate__bounceOut">
    <div class="toast" v-show="isShow">
        <img src="../../../assets/img/common/y.svg" alt="">
        <div>{{message}}</div>
    </div>
</transition>
</template>

<script>
export default {
    name: 'Toast',
    data () {
        return {
            message: '',
            isShow: false
        }
    },
    methods: {
        show(message,delay = 1500) {
            this.isShow = true;
            this.message = message

            setTimeout(() => {
                this.isShow = false
            }, delay);
        }
    }
}
</script>

<style scoped>
    .toast {
        width: 150px;
        height: 150px;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -70px;
        margin-left: -70px;
        background-color: rgb(0,0,0,0.7);
        color: white;
        padding: 8px 10px;
        letter-spacing: 1px;
        z-index: 999;
        border-radius: 20%;
        /* transform: translate(-50%,-50%); */
        display: flex;
        flex-direction:column;
        justify-content: space-around;
        align-items: center;
    }
    .toast img {
        width: 60px;
        height: 60px;
        /* position: relative;
        top: 30px;
        left: 30px; */
    }
</style>
