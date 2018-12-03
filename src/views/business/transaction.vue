<style scoped lang="less">
</style>
<template>

  <div>
    <!--面包屑导航组件-->
    <bread-router :bread-router="breadRouterArr"></bread-router>

    <!--layout内的结构会自动被添加入layout组件的默认插槽中-->
    <business-layout active-name="4">
      <card class="" :bordered="false" dis-hover>
        <p slot="title" class="tc">产权交易</p>
        <!--<p slot="extra">2018年5月4日</p>-->
        <img src="/static/img/organization.png" class="w" alt="">
      </card>
    </business-layout>
  </div>

</template>
<script>
  import BreadRouter from '../../components/BreadRouter'
  import BusinessLayout from './components/AreaLayout'

  export default {
    data () {
      return {
        breadRouterArr: ['首页', '业务频道', '产权交易']
      }
    },
    components: {
      BreadRouter,
      BusinessLayout
    },
    methods: {}
  }
</script>
