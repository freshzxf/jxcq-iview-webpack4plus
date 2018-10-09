<style scoped lang="less">

</style>
<template>
  <Layout class="">

    <Content>

      <!--焦点图-->
      <Carousel v-model="setting1.value"
                :autoplay="setting1.autoplay"
                :autoplay-speed="setting1.autoplaySpeed"
                :dots="setting1.dots"
                :radius-dot="setting1.radiusDot"
                :trigger="setting1.trigger"
                :loop="setting1.loop"
                :arrow="setting1.arrow">
        <CarouselItem>
            <img class="w" src="/static/img/banner1.jpg" alt="">
        </CarouselItem>
        <CarouselItem>
            <img class="w" src="/static/img/banner2.jpg" alt="">
        </CarouselItem>
        <CarouselItem>
            <img class="w" src="/static/img/banner3.jpg" alt="">
        </CarouselItem>
        <CarouselItem>
            <img class="w" src="/static/img/banner4.jpg" alt="">
        </CarouselItem>
      </Carousel>

      <!--快捷菜单-->
      <icon-menu></icon-menu>

      <div class="bg-blue">
        <!--各模块头条-->
        <top-news></top-news>
      </div>

      <div class="bg-white">
        <partner></partner>
      </div>

    </Content>

  </Layout>
</template>
<script>
  import IconMenu from './components/IconMenu'
  import TopNews from './components/TopNews'
  import Partner from './components/Partner'
  export default {
    data () {
      return {
        setting1: {
          value: 0,
          autoplay: true,
          autoplaySpeed: 5000,
          loop: true,
          dots: 'inside',
          radiusDot: false,
          trigger: 'click',
          arrow: 'hover'
        }
      }
    },
    components: {
      IconMenu,
      TopNews,
      Partner
    },
    methods: {

    }
  }
</script>
