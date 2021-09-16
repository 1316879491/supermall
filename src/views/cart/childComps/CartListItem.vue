<template>
    <div id="list-item">
        <div class="item-selector">
            <check-button :is-active='product.checked' @click.native="checkClick"></check-button>
        </div>
        <div class="item-img">
            <img :src="product.image" alt="">
        </div>
        <div class="item-info">
            <div class="item-title">{{product.title}}</div>
            <div class="item-desc">{{product.desc}}</div>
            <div class='info-bottom'>
                <div class="item-price left">￥{{product.price}}</div>
                <div class="item-count right">
                    <img class="images" src="~assets/img/cart/-.svg" alt="" @click="isSub && subCount()">
                    x{{product.count}}
                    <img class="images" src="~assets/img/cart/+.svg" alt="" @click="addCount">
                    <img class="remove" src="~assets/img/cart/remove.svg" alt="" @click="remove(index)">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import CheckButton from 'components/content/checkButton/CheckButton'

export default {
    name: 'CartListItem',
    data () {
        return {
            isSub: false,
        }
    },
    props: {
        product: {
            type: Object,
            default() {
                return {}
            }
        },
        index: {
            type: Number
        }
    },
    components: {
        CheckButton
    },
    methods: {
        checkClick() {
        this.product.checked = !this.product.checked
        },
        addCount() {
            /* console.log('++'); */
            this.$store.commit('addCount',this.product)
            this.isSub = true
        },
        subCount() {
            /* console.log('--'); */
            this.$store.commit('subCount',this.product)
            if(this.product.count === 1) {this.isSub = false}
        },
        remove(index) {
            this.$emit('remove',index)
        }
    }
}
</script>

<style scoped>
    #list-item {
        width: 100%;
        display: flex;
        font-size: 0;
        padding: 5px;
        border-bottom: 1px solid #ccc;
    }
    .item-selector {
        width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .item-title, .item-desc {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .item-img {
        padding: 5px;
    }
    .item-img img {
        width: 80px;
        height: 100px;
        border-radius: 10%;
    }
    .item-info {
        font-size: 17px;
        color: #333;
        padding: 5px 10px;
        position: relative;
        overflow: hidden;
    }
    .item-info .item-desc {
        font-size: 14px;
        color: #666;
        margin-top: 15px;
    }
    .info-bottom {
        margin-top: 10px;
        position: absolute;
        bottom: 10px;
        left: 10px;
        right: 10px;
    }
    .info-bottom .item-price {
    color: orangered;
    }
    .item-count {
        display: flex;
        justify-content: space-between;
        margin-right: 40px;
    }
    .item-count img {
        width: 15px;
        height: 15px;
    }
    .remove {
        margin-left: 25px;
    }
    .images {
        margin: 0 5px;
    }
</style>
