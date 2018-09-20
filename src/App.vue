<style scoped>
  @import 'styles/common.css';
</style>
<template>
  <div>
    <!--导航栏-->
    <top-nav activeName="1"></top-nav>

    <router-view></router-view>

    <div class="bg-dark">
      <BottomView></BottomView>
    </div>
  </div>
</template>
<script>
  import TopNav from '@/components/TopNav'
  import BottomView from '@/components/BottomView'

  export default {
    data() {
      return {}
    },

    components: {
      TopNav,
      BottomView
    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {}
  }
</script>
