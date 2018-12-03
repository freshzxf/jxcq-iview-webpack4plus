<style scoped lang="less">
  .side-menu {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    ul {
      height: 100%;
      &:after {
        background-color: #e8eaec;
      }
    }
  }
</style>
<template>
  <layout>
    <!--通过设置左填充为固定像素值配合某个子元素绝对定位不占空间来实现左右布局-->
    <div class="layout bg-white clear mt-20 mb-25 rel" style="padding-left: 200px;min-height: 398px;">

      <!--左菜单-->
      <div class="side-menu">
        <Menu :active-name="activeName" :theme="theme" mode="vertical" :width="sideMenuWidth">
          <!--交易系统-->
          <!--<Submenu name="4">
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
          </Submenu>-->
          <MenuItem name="1" to="/agency">
            <Icon type="ios-keypad"></Icon>
            机构简介
          </MenuItem>
          <MenuItem name="2" to="/speech">
            <Icon type="ios-keypad"></Icon>
            领导致词
          </MenuItem>
          <MenuItem name="3" to="/history">
            <Icon type="ios-keypad"></Icon>
            发展历程
          </MenuItem>
          <MenuItem name="4" to="/organization">
            <Icon type="ios-keypad"></Icon>
            组织架构
          </MenuItem>
          <MenuItem name="5" to="/agency">
            <Icon type="ios-keypad"></Icon>
            企业文化
          </MenuItem>
          <MenuItem name="6" to="/agency">
            <Icon type="ios-keypad"></Icon>
            大事记
          </MenuItem>
          <MenuItem name="7" to="/agency">
            <Icon type="ios-keypad"></Icon>
            合作机构
          </MenuItem>
          <MenuItem name="8" to="/agency">
            <Icon type="ios-keypad"></Icon>
            人才招聘
          </MenuItem>
        </Menu>
      </div>

      <!--无名内容插槽（）-->
      <slot class="bg-blue"></slot>

    </div>
  </layout>
</template>

<script>
  export default {
    name: 'BusinessLayout',
    props: {
      activeName: {
        type: String,
        default: '1'
      }
    },
    data () {
      return {
        theme: 'light',
        sideMenuWidth: '200px'
      }
    },
    mounted () {

    },
    computed: {}
  }
</script>
