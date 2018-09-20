<template>
  <div>
    <!--导航栏-->
    <Menu mode="horizontal" :theme="theme" :active-name="activeName" class="pl-20">
      <router-link tag="a" to="/" target="_blank"><img class="logo-pc" src="/static/img/logo.jpg"></router-link>
      <div class="nav-pc" v-if="isPc">
        <!--首页-->
        <MenuItem name="1" to="/">
          首页
        </MenuItem>
        <!--本所介绍-->
        <Submenu name="2">
          <template slot="title">
            <router-link to="/agency" tag="span">
              本所介绍
            </router-link>
          </template>
          <MenuItem name="2-1" to="/agency">
            <Icon type="ios-construct"/>
            机构介绍
          </MenuItem>
          <MenuItem name="2-2" to="/speech">
            <Icon type="ios-construct"/>
            领导致辞
          </MenuItem>
          <MenuItem name="2-3" to="/history">
            <Icon type="ios-construct"/>
            发展历程
          </MenuItem>
          <MenuItem name="2-4">
            <Icon type="ios-construct"/>
            组织架构
          </MenuItem>
          <MenuItem name="2-5">
            <Icon type="ios-construct"/>
            企业文化
          </MenuItem>
          <MenuItem name="2-6">
            <Icon type="ios-construct"/>
            大事记
          </MenuItem>
          <MenuItem name="2-7">
            <Icon type="ios-construct"/>
            合作机构
          </MenuItem>
          <MenuItem name="2-8">
            <Icon type="ios-construct"/>
            人才招聘
          </MenuItem>
        </Submenu>
        <!--业务频道-->
        <Submenu name="3">
          <template slot="title">
            业务频道
          </template>
          <MenuItem name="3-1">
            <Icon type="ios-construct"/>
            产权交易
          </MenuItem>
          <MenuItem name="3-2">
            <Icon type="ios-construct"/>
            资产项目
          </MenuItem>
          <MenuItem name="3-3">
            <Icon type="ios-construct"/>
            增值项目
          </MenuItem>
          <MenuItem name="3-4">
            <Icon type="ios-construct"/>
            托融中心
          </MenuItem>
          <MenuItem name="3-5">
            <Icon type="ios-construct"/>
            股权托管
          </MenuItem>
          <MenuItem name="3-6">
            <Icon type="ios-construct"/>
            碳排放权
          </MenuItem>
        </Submenu>
        <!--交易系统-->
        <Submenu name="4">
          <template slot="title">
            交易系统
          </template>
          <MenuItem name="4-1">
            <Icon type="ios-construct"/>
            产权交易系统
          </MenuItem>
          <MenuItem name="4-2">
            <Icon type="ios-construct"/>
            报价系统
          </MenuItem>
          <MenuItem name="4-3">
            <Icon type="ios-construct"/>
            股权托管查询
          </MenuItem>
        </Submenu>
        <!--政策法规-->
        <Submenu name="5">
          <template slot="title">
            政策法规
          </template>
          <MenuItem name="5-1">
            <Icon type="ios-construct"/>
            国家政策法规
          </MenuItem>
          <MenuItem name="5-2">
            <Icon type="ios-construct"/>
            江西省政策法规
          </MenuItem>
          <MenuItem name="5-3">
            <Icon type="ios-construct"/>
            交易规则
          </MenuItem>
          <MenuItem name="5-4">
            <Icon type="ios-construct"/>
            业务流程
          </MenuItem>
          <MenuItem name="5-5">
            <Icon type="ios-construct"/>
            文档下载
          </MenuItem>
        </Submenu>
        <!--市场动态-->
        <Submenu name="6">
          <template slot="title">
            市场动态
          </template>
          <MenuItem name="6-1">
            <Icon type="ios-construct"/>
            本所新闻
          </MenuItem>
          <MenuItem name="6-2">
            <Icon type="ios-construct"/>
            市场动态
          </MenuItem>
          <MenuItem name="6-3">
            <Icon type="ios-construct"/>
            产权研究
          </MenuItem>
        </Submenu>
        <!--市场动态-->
        <Submenu name="7">
          <template slot="title">
            会员中心
          </template>
          <MenuItem name="7-1">
            <Icon type="ios-construct"/>
            会员名录
          </MenuItem>
          <MenuItem name="7-2">
            <Icon type="ios-construct"/>
            会员风采
          </MenuItem>
          <MenuItem name="7-3">
            <Icon type="ios-construct"/>
            会员管理
          </MenuItem>
          <MenuItem name="7-4">
            <Icon type="ios-construct"/>
            会员制度
          </MenuItem>
          <MenuItem name="7-5">
            <Icon type="ios-construct"/>
            入会指引
          </MenuItem>
          <MenuItem name="7-6">
            <Icon type="ios-construct"/>
            通知公告
          </MenuItem>
        </Submenu>
      </div>
      <div class="fr mr-20" v-else>
        <Button type="primary" shape="circle" icon="ios-menu" @click="drawer = true"></Button>
      </div>
    </Menu>

    <Drawer :closable="false" :title="drawerTitle" v-model="drawer" :width="drawerWidth">
      <Menu :theme="theme" :width="verticalMenuWidth" mode="vertical" :accordion="true" active-name="1"
            @on-select="selectDrawerMenu" style="margin: -16px">
        <!--首页-->
        <MenuItem name="1" to="/">
          首页
        </MenuItem>
        <!--本所介绍-->
        <Submenu name="2">
          <template slot="title">
            本所介绍
          </template>
          <MenuItem name="2-1" to="/agency">
            <Icon type="ios-construct"/>
            机构介绍
          </MenuItem>
          <MenuItem name="2-2" to="/speech">
            <Icon type="ios-construct"/>
            领导致辞
          </MenuItem>
          <MenuItem name="2-3" to="/history">
            <Icon type="ios-construct"/>
            发展历程
          </MenuItem>
          <MenuItem name="2-4">
            <Icon type="ios-construct"/>
            组织架构
          </MenuItem>
          <MenuItem name="2-5">
            <Icon type="ios-construct"/>
            企业文化
          </MenuItem>
          <MenuItem name="2-6">
            <Icon type="ios-construct"/>
            大事记
          </MenuItem>
          <MenuItem name="2-7">
            <Icon type="ios-construct"/>
            合作机构
          </MenuItem>
          <MenuItem name="2-8">
            <Icon type="ios-construct"/>
            人才招聘
          </MenuItem>
        </Submenu>
        <!--业务频道-->
        <Submenu name="3">
          <template slot="title">
            业务频道
          </template>
          <MenuItem name="3-1">
            <Icon type="ios-construct"/>
            产权交易
          </MenuItem>
          <MenuItem name="3-2">
            <Icon type="ios-construct"/>
            资产项目
          </MenuItem>
          <MenuItem name="3-3">
            <Icon type="ios-construct"/>
            增值项目
          </MenuItem>
          <MenuItem name="3-4">
            <Icon type="ios-construct"/>
            托融中心
          </MenuItem>
          <MenuItem name="3-5">
            <Icon type="ios-construct"/>
            股权托管
          </MenuItem>
          <MenuItem name="3-6">
            <Icon type="ios-construct"/>
            碳排放权
          </MenuItem>
        </Submenu>
        <!--交易系统-->
        <Submenu name="4">
          <template slot="title">
            交易系统
          </template>
          <MenuItem name="4-1">
            <Icon type="ios-construct"/>
            产权交易系统
          </MenuItem>
          <MenuItem name="4-2">
            <Icon type="ios-construct"/>
            报价系统
          </MenuItem>
          <MenuItem name="4-3">
            <Icon type="ios-construct"/>
            股权托管查询
          </MenuItem>
        </Submenu>
        <!--政策法规-->
        <Submenu name="5">
          <template slot="title">
            政策法规
          </template>
          <MenuItem name="5-1">
            <Icon type="ios-construct"/>
            国家政策法规
          </MenuItem>
          <MenuItem name="5-2">
            <Icon type="ios-construct"/>
            江西省政策法规
          </MenuItem>
          <MenuItem name="5-3">
            <Icon type="ios-construct"/>
            交易规则
          </MenuItem>
          <MenuItem name="5-4">
            <Icon type="ios-construct"/>
            业务流程
          </MenuItem>
          <MenuItem name="5-5">
            <Icon type="ios-construct"/>
            文档下载
          </MenuItem>
        </Submenu>
        <!--市场动态-->
        <Submenu name="6">
          <template slot="title">
            市场动态
          </template>
          <MenuItem name="6-1">
            <Icon type="ios-construct"/>
            本所新闻
          </MenuItem>
          <MenuItem name="6-2">
            <Icon type="ios-construct"/>
            市场动态
          </MenuItem>
          <MenuItem name="6-3">
            <Icon type="ios-construct"/>
            产权研究
          </MenuItem>
        </Submenu>
        <!--市场动态-->
        <Submenu name="7">
          <template slot="title">
            会员中心
          </template>
          <MenuItem name="7-1">
            <Icon type="ios-construct"/>
            会员名录
          </MenuItem>
          <MenuItem name="7-2">
            <Icon type="ios-construct"/>
            会员风采
          </MenuItem>
          <MenuItem name="7-3">
            <Icon type="ios-construct"/>
            会员管理
          </MenuItem>
          <MenuItem name="7-4">
            <Icon type="ios-construct"/>
            会员制度
          </MenuItem>
          <MenuItem name="7-5">
            <Icon type="ios-construct"/>
            入会指引
          </MenuItem>
          <MenuItem name="7-6">
            <Icon type="ios-construct"/>
            通知公告
          </MenuItem>
        </Submenu>
      </Menu>
    </Drawer>
  </div>
</template>

<script>
  export default {
    name: 'TopNav',
    props: {
      activeName: {
        type: String,
        default: '1'
      }
    },
    data() {
      return {
        theme: 'light',
        drawer: false,
        drawerTitle: '江西省产权交易中心',
        drawerWidth: '200',
        verticalMenuWidth: '200',
        value: 0
      }
    },
    mounted() {

    },
    computed: {
      isPc() {
        return this.$store.state.base.isPc
      }
    },
    methods: {
      selectDrawerMenu() {
        this.drawer = false
      }
    }
  }
</script>

<style scoped>
  .logo-pc {
    float: left;
    height: 40px;
    margin-top: 10px;
  }

  .nav-pc {
    float: right;
    height: 60px;
    line-height: 60px
  }
</style>
