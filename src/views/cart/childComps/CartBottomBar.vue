<template>
    <div class="bottom-bar">
        <div class="checked-all" @click="selectAllClick">
            <check-button class="checked-button" :is-active='isSelectAll'></check-button>
            <span>全选</span>
        </div>
        <div class="price">
            合计:<span>{{totalPrice}}</span>
        </div>
        <div class="settlement">
            去结算({{settlement}})
        </div>
    </div>
</template>

<script>

import CheckButton from 'components/content/checkButton/CheckButton'

export default {
    name: 'CartBottomBar',
    components: {
        CheckButton
    },
    methods: {
        selectAllClick() {
            if (this.isSelectAll) {
                this.$store.state.cartList.forEach(item => item.checked = false)
            }else {
                this.$store.state.cartList.forEach(item => item.checked = true)
            }
        }
    },
    computed: {
        totalPrice() {
            return '¥' + this.$store.state.cartList.filter(item => item.checked)
            .reduce((prev,cur) => {
                return prev + cur.price * cur.count
            },0)
            .toFixed(2)
        },
        settlement() {
            return this.$store.state.cartList.filter(item => item.checked).length
        },
        isSelectAll() {
            if (this.$store.state.cartList.length === 0) return false
            return this.$store.state.cartList.every(item => item.checked)
        }
    },

}
</script>

<style scoped>
    .bottom-bar {
        height: 40px;
        position: relative;
        bottom: 0px;
        /* z-index: 9; */
        background-color: rgb(235, 229, 229);
        line-height: 40px;
        display: flex;
        justify-content: space-between;
    }
    .checked-all {
        display: flex;
        align-items: center;
        margin-left: 5px;
    }
    .checked-button {
        width: 22px;
        height: 22px;
        line-height: 22px;
    }
    .checked-all span {
        margin-left: 4px;
        font-size: 12px;
    }
    .price {
        font-size: 14px;
    }
    .price span {
        font-size: 16px;
        color: red;
    }
    .settlement {
        background-color: red;
        color: #fff;
        width: 60px;
        font-size: 14px;
        text-align: center;
    }
</style>
