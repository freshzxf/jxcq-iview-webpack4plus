<template>
  <div class="layout">
    <Row class="icon-menu">
      <Col span="24">
        <h1 class="f-20">国有品牌 专业团队</h1>
      </Col>
      <Col :xs="{ span: 12}" :sm="{ span: 8}">
        <Button type="warning" shape="circle" icon="ios-home" class="icon-btn"></Button>
        <div class="icon-text">产权交易</div>
      </Col>
      <Col :xs="{ span: 12}" :sm="{ span: 8}">
        <Button type="info" shape="circle" icon="ios-search" class="icon-btn"></Button>
        <div class="icon-text">资产项目</div>
      </Col>
      <Col :xs="{ span: 12}" :sm="{ span: 8}">
        <Button type="success" shape="circle" icon="ios-person" class="icon-btn"></Button>
        <div class="icon-text">增值项目</div>
      </Col>
      <Col :xs="{ span: 12}" :sm="{ span: 8}">
        <Button type="error" shape="circle" icon="ios-person" class="icon-btn"></Button>
        <div class="icon-text">融资中心</div>
      </Col>
      <Col :xs="{ span: 12}" :sm="{ span: 8}">
        <Button type="primary" shape="circle" icon="ios-person" class="icon-btn"></Button>
        <div class="icon-text">股权托管</div>
      </Col>
      <Col :xs="{ span: 12}" :sm="{ span: 8}">
        <Button type="warning" shape="circle" icon="ios-person" class="icon-btn"></Button>
        <div class="icon-text">碳排放权</div>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'TopNav',
    data () {
      return {

      }
    },
    mounted () {

    },
    computed: {

    }
  }
</script>

<style scoped lang="less">
  .icon-menu{
    text-align: center!important;
  }
  .icon-menu>*{
    margin-top: 60px
  }
  .icon-menu h1{
    font-size: 40px;
  }
  .icon-btn{
    /*width: 50% !important;
    height: 0 !important; // 设置高为0，让padding撑起高
    padding-top: 10% !important; // 让div的高等于宽
    padding-bottom: 40% !important; // 让div的高等于宽*/
    width: 180px !important;
    height: 180px !important;
    font-size: 80px !important;
  }
  @media screen and (max-width: 768px) {
    .icon-btn {
      width: 100px !important;
      height: 100px !important;
      font-size: 40px !important;
    }
  }
  .icon-text {
    margin-top: 18px;
    font-size: 18px;
  }
</style>
