<style scoped lang="less">
</style>
<template>

  <div>
    <!--面包屑导航组件-->
    <bread-router :bread-router="breadRouterArr"></bread-router>

    <!--layout内的结构会自动被添加入layout组件的默认插槽中-->
    <area-layout active-name="1">
      <card class="main-contain" :bordered="false" dis-hover>
        <p slot="title" class="tc">机构简介</p>
        <p slot="extra"></p>
        <div class="indent lh200 tj">
          <p>
            江西省产权交易所是经江西省人民政府批准依法设立的综合性产权交易机构；是由江西省发展改革委员会管理的生产经营类事业单位；是经江西省国有资产监督管理委员会和江西省财政厅选定，国务院国有资产监督管理委员会和财政部备案的国有产权交易机构；是江西省人民政府批准的全省非上市公司（含有限责任公司）股权登记托管专业机构；是江西省编办批准的全省技术产权（含知识产权）交易机构和碳排放权交易机构；是江西省公共资源交易管理办公室认定的公共资源（国有集体资产）交易服务机构；是中国企业国有产权交易机构协会理事单位、长江流域产权交易共同市场常务理事单位;是全国产权交易行业首批AAA级信用评级省级产权交易机构，江西省服务业龙头企业，南昌市电子商务示范企业。</p>
          <p class="mt-15">
            《江西省机构编制委员会办公室关于省产权交易所职责的批复》（赣编办[2017]43号）规定，江西省产权交易所的职责是：依法依规开展产权交易，为全省产股权、企业增资、实物资产、金融资产、金融产品、技术知识产权、涉讼资产、罚没资产、文化体育产权等产权交易提供场所、设施、信息和合同鉴证等服务；承担全省非上市股份有限公司股权（含国家股、法人股、自然人股）托管业务；根据有关法律、法规和政策开展碳排放权交易及咨询服务等业务。</p>
          <p class="mt-15">江西省产权交易所是江西省物权、债权、股权、知识产权、碳排放权等各类产权交易的法定机构，是实现市场资源优化配置，各类资本有序流转的资本市场平台。</p>
        </div>
      </card>
    </area-layout>
  </div>

</template>
<script>
  import BreadRouter from './BreadRouter'
  import AreaLayout from './AreaLayout'

  export default {
    data () {
      return {
        breadRouterArr: ['首页', '本所介绍', '机构简介']
      }
    },
    components: {
      BreadRouter,
      AreaLayout
    },
    methods: {}
  }
</script>