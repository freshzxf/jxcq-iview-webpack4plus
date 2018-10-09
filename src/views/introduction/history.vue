<style scoped lang="less">
</style>
<template>

  <div>
    <!--面包屑导航组件-->
    <bread-router :bread-router="breadRouterArr"></bread-router>

    <!--layout内的结构会自动被添加入layout组件的默认插槽中-->
    <area-layout active-name="3">

      <card class="" :bordered="false" dis-hover>
        <p slot="title" class="tc">发展历程</p>
        <!--新闻项-->
        <template v-for="(item) in newsData">
          <news-item :key="item.id" :path="path" :id="item.id" :title="item.title" :sub-title="item.subTitle"
                     :time="item.time"></news-item>
        </template>
      </card>

    </area-layout>
  </div>

</template>
<script>
  import BreadRouter from '../../components/BreadRouter'
  import AreaLayout from './components/AreaLayout'
  import NewsItem from './components/NewsItem'

  export default {
    data() {
      return {
        breadRouterArr: ['首页', '本所介绍', '发展历程'],
        path: 'detail/',
        newsData: [
          {id: 0, title: '2018年6月15日', subTitle: '南昌市商务局公布第三批南昌市电子商务示范基地、示范企业评选结果，省产权交易所被确定为南昌市电子商务示范企业。', time: '2018-09-29 09:30:21'},
          {id: 1, title: '2017年12月26日', subTitle: '经过评定并报请省政府同意，江西省服务业发展领导小组下发通知，授予省产权交易所“江西省服务业龙头企业”荣誉称号。', time: '2018-09-30 09:32:11'},
          {id: 3, title: '2017年11月', subTitle: '省产权交易所报送的《江西省盐业集团增资实现江西“四个第一次”——江西省盐业集团增资扩股》案例，荣获产权交易资本市场第三次典型案例评选活动“典型增资案例”殊荣。', time: '2018-09-30 09:32:11'},
          {id: 4, title: '2017年8月14日', subTitle: '江西省清理整顿各类交易场所工作领导小组办公室发布公告，省产权交易所等6家机构是首批通过全省清理整顿各类交易场所“回头看”检查验收的单位。', time: '2018-09-30 09:32:11'},
          {id: 5, title: '2017年4月25日', subTitle: '中国企业国有产权交易机构协会公布产权交易行业首批送评交易机构信用评价结果，省产权交易所荣获最高信用等级AAA级，成为15家最高等级信用省级产权交易机构单位之一。本次评级是按照商务部、国务院国资委文件要求，由第三方评价机构——北京国富泰信用管理有限公司评价，经中国产权网、中国市场秩序网公示，产权交易行业信用评价专家委员会终审认定，报国务院国资委、商务部备案。', time: '2018-09-30 09:32:11'},
          {id: 6, title: '2017年4月10日', subTitle: '2017年4月10日，《江西省机构编制委员会办公室关于省产权交易所职责的批复》（赣编办[2017]43号）规定，江西省产权交易所的职责是：依法依规开展产权交易，为全省产股权、企业增资、实物资产、金融资产、金融产品、技术知识产权、涉讼资产、罚没资产、文化体育产权等产权交易提供场所、设施、信息和合同鉴证等服务。承担全省非上市股份有限公司股权（含国家股、法人股、自然人股）托管业务。根据有关法律、法规和政策开展碳排放权交易及咨询服务等业务。', time: '2018-09-30 09:32:11'},
          {id: 7, title: '2016年11月24日', subTitle: '2016年11月24日，省公管办印发《江西省公共资源交易平台运行服务管理细则（暂行）》，正式将江西省产权交易所列为我省公共资源（国有集体资产）交易平台服务机构。', time: '2018-09-30 09:32:11'}
        ],
        id: 0
      }
    },
    components: {
      BreadRouter,
      AreaLayout,
      NewsItem
    },
    methods: {}
  }
</script>
