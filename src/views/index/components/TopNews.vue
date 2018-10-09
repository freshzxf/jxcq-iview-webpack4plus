<template>
  <div class="layout">
    <Row class="top-news" :gutter="16">
      <Col :xs="{ span: 24}" :sm="{ span: 12}">
        <Tabs value="name1" class="">
          <TabPane label="产权项目" name="name1">
            <CellGroup>

              <Cell title="玉山县瑞建水泥配料有限公司61玉山县瑞建水泥配料有限公司61玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>
              <Cell title="玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>
              <Cell title="玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>
              <Cell title="玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>
              <Cell title="玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>

            </CellGroup>
          </TabPane>
          <TabPane label="资产项目" name="name2">资产项目</TabPane>
          <TabPane label="增值项目" name="name3">增值项目</TabPane>
          <Button slot="extra" type="text">更多 >></Button>
        </Tabs>
      </Col>
      <Col :xs="{ span: 24}" :sm="{ span: 12}">

        <Tabs value="name1" class="">
          <TabPane label="银行优质资产" name="name1">
            <CellGroup>

              <Cell title="玉山县瑞建水泥配料有限公司61玉山县瑞建水泥配料有限公司61玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>
              <Cell title="玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>
              <Cell title="玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>
              <Cell title="玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>
              <Cell title="玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>

            </CellGroup>
          </TabPane>
          <TabPane label="托管公告" name="name2">托管公告</TabPane>
          <TabPane label="质押公告" name="name3">质押公告</TabPane>
          <Button slot="extra" type="text">更多 >></Button>
        </Tabs>

      </Col>
      <Col :xs="{ span: 24}" :sm="{ span: 12}">
        <Tabs value="name1" class="">
          <TabPane label="本所新闻" name="name1">
            <CellGroup>

              <Cell title="玉山县瑞建水泥配料有限公司61玉山县瑞建水泥配料有限公司61玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>
              <Cell title="玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>
              <Cell title="玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>
              <Cell title="玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>
              <Cell title="玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>

            </CellGroup>
          </TabPane>
          <TabPane label="市场动态" name="name2">资产项目</TabPane>
          <Button slot="extra" type="text">更多 >></Button>
        </Tabs>

      </Col>
      <Col :xs="{ span: 24}" :sm="{ span: 12}">
        <Tabs value="name1" class="">
          <TabPane label="通知公告" name="name1">
            <CellGroup>

              <Cell title="玉山县瑞建水泥配料有限公司61玉山县瑞建水泥配料有限公司61玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>
              <Cell title="玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>
              <Cell title="玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>
              <Cell title="玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>
              <Cell title="玉山县瑞建水泥配料有限公司61%国有股权转让" extra="2018-09-05" to="" target="_blank"/>

            </CellGroup>
          </TabPane>
          <TabPane label="交易公告" name="name2">资产项目</TabPane>
          <Button slot="extra" type="text">更多 >></Button>
        </Tabs>

      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'TopNav',
    data () {
      return {

      }
    },
    mounted () {

    },
    computed: {

    }
  }
</script>

<style lang="less">
  .top-news{
    margin-top: 60px;
    padding: 60px 0;
    .ivu-tabs{
      position: relative;
      .ivu-tabs-bar{
        .ivu-tabs-nav-right{
          position: absolute;
          z-index: 1;
          right: 5px;
          top: 13px;
          button{

          }
        }
        .ivu-tabs-nav-container{
          .ivu-tabs-nav-wrap{
            .ivu-tabs-nav-scroll{
              background-color: #fff;
              height: 70px;
              line-height: 44px;
              .ivu-tabs-nav{
                .ivu-tabs-tab.ivu-tabs-tab-active{
                }
                .ivu-tabs-ink-bar{
                  width: 0!important;
                  height: 0!important;
                  border: 10px solid transparent;
                  border-bottom: 0;
                  border-top-color: #fff;
                  background-color: transparent!important;
                  bottom: -9px;
                  left: 35px;
                }
              }
            }
          }
        }
      }
      .ivu-tabs-content{
        .ivu-tabs-tabpane{
          margin-top: -25px; // 实现遮盖bar白色底，显示三角形
          background-color: #2d8cf0; // 实现遮盖bar白色底，显示三角形
          padding-top: 25px;
          color: #fff;
        }

      }
    }
    .ivu-cell{
      padding: 16px;
      border-bottom: 1px solid #52abfa;
      color: #fff;
      &:hover{
        background-color: #2c88e9;
      }
      .ivu-cell-main{
        width: 100%;

        .ivu-cell-title{
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-right: 80px;
        }
      }
      .ivu-cell-footer{
        color: #cfe2e5;
      }
    }
  }
</style>
