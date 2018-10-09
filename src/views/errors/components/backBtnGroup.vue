<template>
  <div style="display: table;margin: 50px auto 0">
    <Button size="large" @click="backHome" class="mr-30">返回首页</Button>
    <Button size="large" type="text" @click="backPrev">{{ second }}s后自动返回</Button>
  </div>
</template>

<script>
  export default {
    name: 'backBtnGroup',
    data () {
      return {
        second: 5,
        timer: null
      }
    },
    methods: {
      backHome () {
        this.$router.replace({
          name: 'home'
        })
      },
      backPrev () {
        this.$router.go(-1)
      }
    },
    mounted () {
      this.timer = setInterval(() => {
        if (this.second === 0) this.backPrev()
        else this.second--
      }, 1000)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    }
  }
</script>
