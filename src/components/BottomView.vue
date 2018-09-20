<template>
  <div class="">
    <div class="bg-dark clear pt-20 pb-20 pl-20 pr-20">
      <Row :gutter="16" class="white">
        <Col :xs="{ span: 24}" :sm="{ span: 9}">
          <div>
            <Icon type="md-call" size="30"/>
            <span class="f-18">联系我们</span>
          </div>
          <div class="mt-25">地址：南昌市省府西二路省发改委综合楼6、10楼</div>
          <div class="mt-15">联系电话：0791-88526621</div>
        </Col>
        <Col :xs="{ span: 24}" :sm="{ span: 5}">
          <div class="" style="margin-top: 54px">邮箱：jxchanquan@gmail.com</div>
          <div class="mt-15">传真：0791-88523082</div>
        </Col>
        <Col :xs="{ span: 24}" :sm="{ span: 5}">
          <div class="" style="margin-top: 54px">网址：http://www.jxcq.org</div>
          <div class="mt-15">邮编：330077</div>
        </Col>
        <Col :xs="{ span: 24}" :sm="{ span: 5}">
          <Row>
            <Col :xs="{ span: 8}">
              <img src="../assets/cause.png" alt="" class="w">
            </Col>
            <Col :xs="{ span: 16}">
              <!--以下图片大小为20kb，也就是20480字节，已超过webpack中设置的10000字节，因此即便放在了src/assets目录下，也依然如同放在/static目录下（仅仅只是被copy）-->
              <img src="../assets/qrcode.png" alt="" class="w" style="max-width: 120px">
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    <Divider style="margin: 0;background-color: #606b83;"/>
    <div class="tc white pt-10 pb-10 f-12">copyRight@2016 江西省产权交易所 赣ICP备14003919号-2</div>
  </div>
</template>

<script>
  export default {
    name: 'TopNav',
    data () {
      return {
        value: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        loop: true,
        dots: 'outside',
        radiusDot: false,
        trigger: 'click',
        arrow: 'never'
      }
    },
    mounted () {

    },
    computed: {

    }
  }
</script>

<style scoped>
  .partner{
    padding: 40px 0;
    text-align: center;
  }
  .partner-item{
  }
  .partner-item img{
    border: 1px solid #dcdcdc;
    height: 60px;
    max-width: 80%;
    margin: 10px 8px 0;
  }
</style>
