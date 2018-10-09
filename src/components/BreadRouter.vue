<style scoped lang="less">
  .bread-router {
    position: absolute;
    top: 50%;
    left: 20px;
    color: #fff;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    span:last-child {
      color: #fff;
    }
  }
</style>
<template>
  <div class="rel">
    <img :src="bgImageSrc" alt="" class="w">
    <Breadcrumb class="bread-router">
      <BreadcrumbItem v-for="(item, index) in breadRouter" :key="index">{{item}}</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'BreadRouter',
    props: {
      bgImageSrc: {
        type: String,
        default: '/static/img/banner-bg.jpg'
      },
      breadRouter: {
        type: Array
      }
    },
    data() {
      return {}
    },
    mounted() {

    },
    computed: {}
  }
</script>
