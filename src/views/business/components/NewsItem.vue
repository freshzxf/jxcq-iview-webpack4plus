<style scoped lang="less">
  .item{
    &:hover{
      div{color: #2d8cf0}
    }
  }
</style>
<template>
  <div>
    <router-link class="pointer item" style="" :to="{path: path,query:{id: id}}" tag="div">
      <div class="f-20">{{title}}</div>
      <p class="mt-20 ellipsis2">{{subTitle}}</p>
      <p class="mt-30">{{time}}</p>
    </router-link>
    <Divider orientation="center"></Divider>
  </div>
</template>

<script>
  export default {
    name: 'NewsItem',
    props: {
      path: String,
      id: null, // 任何类型,
      title: String,
      subTitle: String,
      time: null // 任何类型
    }
  }
</script>
