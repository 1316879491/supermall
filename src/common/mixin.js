import {debounce} from './utils';

export const itemListenerMixin = {
    mounted () {
        const refresh = debounce(this.$refs.scroll.refresh,200)

    this.itemImgListener = () => {
        refresh()
    }
    
    this.$bus.$on('itemImageLoad',this.itemImgListener)
    }
}

export const backTopMixin = {
    data () {
        return {
            isShowBacktop: false
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0,0)
        },
    }
}