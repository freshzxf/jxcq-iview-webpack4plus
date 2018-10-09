<template>
  <div class="layout partner">
    <h2 class="mb-25">合作机构 / <span class="gray">Cooperative organization</span></h2>
    <Carousel
            v-model="value"
            :autoplay="autoplay"
            :autoplay-speed="autoplaySpeed"
            :dots="dots"
            :radius-dot="radiusDot"
            :trigger="trigger"
            :loop="loop"
            :arrow="arrow">
      <CarouselItem>
        <div class="bg-white">
          <Row>
            <Col :xs="{ span: 8}" :sm="{ span: 4}">
              <div class="partner-item"><img src="/static/img/partner4.png" alt="" class=""></div>
            </Col>
            <Col :xs="{ span: 8}" :sm="{ span: 4}">
              <div class="partner-item"><img src="/static/img/partner4.png" alt="" class=""></div>
            </Col>
            <Col :xs="{ span: 8}" :sm="{ span: 4}">
              <div class="partner-item"><img src="/static/img/partner4.png" alt="" class=""></div>
            </Col>
            <Col :xs="{ span: 8}" :sm="{ span: 4}">
              <div class="partner-item"><img src="/static/img/partner4.png" alt="" class=""></div>
            </Col>
            <Col :xs="{ span: 8}" :sm="{ span: 4}">
              <div class="partner-item"><img src="/static/img/partner4.png" alt="" class=""></div>
            </Col>
            <Col :xs="{ span: 8}" :sm="{ span: 4}">
              <div class="partner-item"><img src="/static/img/partner4.png" alt="" class=""></div>
            </Col>
          </Row>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="bg-white">
          <Row :gutter="16">
            <Col :xs="{ span: 8}" :sm="{ span: 4}">
              <div class="partner-item"><img src="/static/img/partner7.png" alt="" class=""></div>
            </Col>
            <Col :xs="{ span: 8}" :sm="{ span: 4}">
              <div class="partner-item"><img src="/static/img/partner7.png" alt="" class=""></div>
            </Col>
            <Col :xs="{ span: 8}" :sm="{ span: 4}">
              <div class="partner-item"><img src="/static/img/partner7.png" alt="" class=""></div>
            </Col>
            <Col :xs="{ span: 8}" :sm="{ span: 4}">
              <div class="partner-item"><img src="/static/img/partner7.png" alt="" class=""></div>
            </Col>
            <Col :xs="{ span: 8}" :sm="{ span: 4}">
              <div class="partner-item"><img src="/static/img/partner7.png" alt="" class=""></div>
            </Col>
            <Col :xs="{ span: 8}" :sm="{ span: 4}">
              <div class="partner-item"><img src="/static/img/partner7.png" alt="" class=""></div>
            </Col>
          </Row>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="bg-white">
          <Row :gutter="16">
            <Col :xs="{ span: 8}" :sm="{ span: 4}">
              <div class="partner-item"><img src="/static/img/partner14.png" alt="" class=""></div>
            </Col>
            <Col :xs="{ span: 8}" :sm="{ span: 4}">
              <div class="partner-item"><img src="/static/img/partner14.png" alt="" class=""></div>
            </Col>
            <Col :xs="{ span: 8}" :sm="{ span: 4}">
              <div class="partner-item"><img src="/static/img/partner14.png" alt="" class=""></div>
            </Col>
            <Col :xs="{ span: 8}" :sm="{ span: 4}">
              <div class="partner-item"><img src="/static/img/partner14.png" alt="" class=""></div>
            </Col>
            <Col :xs="{ span: 8}" :sm="{ span: 4}">
              <div class="partner-item"><img src="/static/img/partner14.png" alt="" class=""></div>
            </Col>
            <Col :xs="{ span: 8}" :sm="{ span: 4}">
              <div class="partner-item"><img src="/static/img/partner14.png" alt="" class=""></div>
            </Col>
          </Row>
        </div>
      </CarouselItem>
    </Carousel>

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
