<template>
    <div class="tab-control">
        <div v-for="(item,index) of titles" 
        class="tab-control-item"
        :key="index"
        :class="{active : index === currentIndex}"
        @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titles: {
            type:Array,
            default() {
                return []
            }
        }
    },
    data () {
        return {
            currentIndex : 0
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
        }
    }
}
</script>

<style>
    .tab-control{
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        background-color: #fff;
    }
    .tab-control-item {
        flex: 1;
        
    }
    .tab-control-item span {
        padding: 4px;
    }
    .active {
        color: var(--color-high-text);
    }
    .active span {
        border-bottom: 2px solid var(--color-tint);
    }
</style>