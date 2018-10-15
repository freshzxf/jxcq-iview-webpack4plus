<template>

  <error-content code="404" desc="Oh~~您的页面好像飞走了~" :src="src" style="padding: 60px 0"/>

</template>

<script>
  import errorContent from './components/errorContent'
  export default {
    name: 'error_404',
    components: {
      errorContent
    },
    data () {
      return {
        src: '/static/img/error-500.svg'
      }
    },
    mounted () {
      console.log(this.$route.query)
    }
  }
</script>
