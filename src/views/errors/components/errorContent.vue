<style scoped lang="less">
  .error-page{
    width: 100%;
    height: 100%;
    position: relative;
    background: #f8f8f9;
  }
  .content-con{
    width: 400px;
    margin: auto;
  }
  img{
    display: block;
    width: 100%;
    height: 100%;
  }
  h4{
    font-size: 80px;
    font-weight: 700;
    color: #348EED;
  }
  h5{
    font-size: 20px;
    font-weight: normal;
    letter-spacing: 2px;
    color: #67647D;
  }
</style>
<template>
  <div class="error-page">
    <div class="content-con">
      <img :src="src" alt="404">
      <div class="tc">
        <h4>{{ code }}</h4>
        <h5>{{ desc }}</h5>
      </div>
      <back-btn-group class=""></back-btn-group>
    </div>
  </div>
</template>

<script>
  import backBtnGroup from './backBtnGroup'
  export default {
    name: 'errContent',
    components: {
      backBtnGroup
    },
    props: {
      code: String,
      desc: String,
      src: null // 任何类型
    }
  }
</script>
