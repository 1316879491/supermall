<template>
    <div class="tab-bar-item" @click='itemClick'>
        <!-- <slot v-if="!isactive" name="item-icon"></slot>
        <slot name="item-icon-active"></slot> -->
        <div v-if="!isactive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style=isactiveColor><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name:"TabBarItem",
    data () {
        return {
           
        }
    },

    computed: {
      isactive() {
          return this.$route.path.indexOf(this.path) !== -1
      },
      isactiveColor() {
          return this.isactive ? {color:this.activeColor} : {}
      }
    },

    props: {
        path: String,
        activeColor:{
            type:String,
            default:'deeppink'
        }
    },

    methods: {
        itemClick(){
            this.$router.replace(this.path)
        }
    }
}
</script>

<style>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        background-color: #eee;
        font-size: 10px;
    }

    .tab-bar-item img{
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
</style>