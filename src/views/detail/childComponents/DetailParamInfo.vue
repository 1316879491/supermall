<template>
    <div class="param-info-1" v-if="Object.keys(paramInfo).length !== 0">
        <table v-for="(table,index) in paramInfo.sizes" :key="index" class="info-size">
            <tr v-for="(tr,indey) in table" :key=indey>
                <td v-for="(td,indey) in tr" :key="indey">{{td}}</td>
            </tr>
        </table>
        <table class="param-info-2">
            <tr v-for="(info,index) in paramInfo.infos" :key="index">
                <td class="param-info-key">{{info.key}}</td>
                <td class="param-info-value">{{info.value}}</td>
            </tr>
        </table>
        <div class="info-img" v-if="paramInfo.image.length !== 0">
            <img :src="paramInfo.image" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        paramInfo: {
            type: Object
        }
    }
}
</script>

<style scoped>
    .param-info-1 {
        padding: 20px 15px;
        font-size: 14px;
        border-bottom: 5px solid #f2f5f8;
    }
    .param-info-1 table {
        width: 100%;
        border-collapse: collapse;
    }
    .param-info-1 table tr {
        height: 42px;
    }
    .param-info-1 table tr td {
        border-bottom: 1px solid rgba(100, 100, 100, .1);
    }
    .param-info-key {
        width: 95px;
    }
    .param-info-2 {
        border-top: 1px solid rgba(0,0,0,.3);
    }
    .param-info-value {
        color: #eb4868;
    }
    .info-img img {
        width: 100%;
    }
</style>
