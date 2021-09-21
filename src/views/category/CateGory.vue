<template>
    <div>
        <nav-bar class="nav-bar"><div slot="center">分类</div></nav-bar>
            <div class="flexd">
                <tab-menu :cateGoryList="cateGoryList" @menuClick='menuClick'></tab-menu>
                <cate-gory-detail :cateGoryDetailList="cateGoryDetailList"></cate-gory-detail>
            </div>
    </div>
</template>

<script>
import TabMenu from './childComps/TabMenu.vue'
import NavBar from '../../components/common/navbar/NavBar.vue'
import CateGoryDetail from './childComps/CateGoryDetail.vue'

import {getCateGory,getSubCategory,getCategoryDetail} from 'network/cateGory'

export default {
    name: 'CateGory',
    data () {
        return {
            cateGoryList:[],
            maitKey:3627,
            cateGoryDetailList: [],
            miniWallkey:0,
            menuIndex:0,
            categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
            }
        }
    },
    components: {
        TabMenu,
        NavBar,
        CateGoryDetail,
    },
    created () {
        getCateGory().then(res => {
            /* console.log(res); */
            this.cateGoryList = res.data.category.list
        })

        getSubCategory(this.maitKey).then(res => {
                /* console.log(res); */
                this.cateGoryDetailList = res.data.list

                this._getCategoryDetail('pop')
                this._getCategoryDetail('sell')
                this._getCategoryDetail('new')
            })
        /* getCategoryDetail(this.miniWallkey,'pop').then(res => {
            console.log(res);
        }) */
    },
    methods: {
        menuClick(index) {
            this.menuIndex = index
            this.maitKey = this.cateGoryList[index].maitKey
            /* this.miniWallkey = this.cateGoryList[index].miniWallkey */
            
            getSubCategory(this.maitKey).then(res => {
                /* console.log(res); */
                this.cateGoryDetailList = res.data.list
            })

            /* getCategoryDetail(this.miniWallkey,'new').then(res => {
                console.log(res);
            }) */

            this._getCategoryDetail('pop')
            this._getCategoryDetail('sell')
            this._getCategoryDetail('new')
        },
        _getCategoryDetail(type) {
            this.miniWallkey = this.cateGoryList[this.menuIndex].miniWallkey

            getCategoryDetail(this.miniWallkey,type).then(res => {
                /* console.log(res); */
                this.categoryDetail[type] = res
            })
        }
    }
}
</script>

<style scoped>
    .nav-bar {
        background-color: var(--color-tint);
        color: white;
    }
    .flexd {
        display: flex;
    }
</style>
