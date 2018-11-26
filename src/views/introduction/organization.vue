<style scoped lang="less">
</style>
<template>

  <div>
    <!--面包屑导航组件-->
    <bread-router :bread-router="breadRouterArr"></bread-router>

    <!--layout内的结构会自动被添加入layout组件的默认插槽中-->
    <area-layout active-name="4">
      <card class="" :bordered="false" dis-hover>
        <p slot="title" class="tc">组织架构</p>
        <!--<p slot="extra">2018年5月4日</p>-->
        <img src="/static/img/organization.png" class="w" alt="">
      </card>
    </area-layout>
  </div>

</template>
<script>
  import BreadRouter from '../../components/BreadRouter'
  import AreaLayout from './components/AreaLayout'

  export default {
    data () {
      return {
        breadRouterArr: ['首页', '本所介绍', '领导致辞']
      }
    },
    components: {
      BreadRouter,
      AreaLayout
    },
    methods: {}
  }
</script>
