<template>
  <div class="projectDetail_page">
    <NavBar></NavBar>
    <div class="page">
      <div class="baner" :style="{ 'background-image': `url(${banerUrl})` }">
        <div class="header">
          <div class="path">
            <div class="pathIwrape">
              <span class="pathItem">首页</span>
              <span class="pathItem">云市场</span>
              <span class="pathItem">{{ goodsName }}</span>
            </div>
            <div class="content">
              <div class="t1">
                <span class="title">{{ goodsName }}</span>
                <span class="titles">{{ goodsName }}</span>
              </div>
              <div class="t2">
                {{ introduction }}
              </div>
              <div class="func">
                <span class="btn love">
                  <span class="iconfont icon-aixin"></span>
                  <span>{{ collections }}</span>
                </span>
                <span class="btn transmit">
                  <span class="iconfont icon-zhuanfa"></span>
                  <span>{{ shareNum }}</span>
                </span>
              </div>
              <div class="clickNum">
                <span class="iconfont icon-eye"></span>
                <span class="clickNum">{{ clicks }}浏览</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="anchor">
        <div class="see-anchor">
          <div class="anchorwrapper">
            <div class="anchorFixed">
              <div class="anchorItem">11</div>
              <div class="anchorItem">11</div>
              <div class="anchorItem">11</div>
              <div class="anchorItem">11</div>
              <div class="anchorItem">11</div>
              <div class="anchorItem">11</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavFootor />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import NavFootor from '@/components/NavFootor.vue'
import { getGoodsDetail } from '@/service/projectDetail'
export default {
  name: '',
  components: { NavBar, NavFootor },
  data() {
    return {
      banerUrl: '',
      goodsName: '',
      introduction: '',
      shareNum: '',
      collections: '',
      clicks: '',
    }
  },
  async created() {
    const res = await getGoodsDetail(this.$route.params.id)
    console.log(res.data.pcImg)
    this.banerUrl = res.data.pcImg
    this.goodsName = res.data.goodsName
    this.introduction = res.data.introduction
    this.shareNum = res.data.shareNum
    this.collections = res.data.collections
    this.clicks = res.data.clicks
  },
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss">
.projectDetail_page {
  width: 100%;
  .page {
    width: 100%;
    height: 1000px;
    position: relative;
    .baner {
      position: absolute;
      top: 0;
      width: 100%;
      height: 344px;
      z-index: 0;
      background-repeat: no-repeat;
      background-size: auto 100%;
      background-position: 50%;
      .header {
        height: 100%;
        width: 1124px;
        margin: 0 auto;
        color: white;
        .pathIwrape {
          padding-top: 10px;
          padding-bottom: 12px;
          font-size: 12px;
          .pathItem {
            cursor: pointer;
            &::after {
              display: inline-block;
              content: '';
              width: 6px;
              height: 6px;
              border-right: 1px solid white;
              border-bottom: 1px solid white;
              transform: rotate(-45deg);
              margin: 0 6px;
            }
            &:last-child::after {
              display: none;
            }
          }
        }
        .content {
          margin-left: 28px;
          margin-top: 28px;
          .t1 {
            .title {
              font-size: 36px;
              font-weight: 600;
              margin-right: 14px;
            }
            .titles {
              display: inline-block;
              margin-right: 14px;
              padding: 5px 14px;
              border-radius: 20px;
              background-color: white;
              font-size: 14px;
              color: #595959;
            }
          }
          .t2 {
            padding: 18px 0;
            font-size: 24px;
          }
          .func {
            margin: 18px 0;
            .btn {
              cursor: pointer;
              margin-right: 18px;
              display: inline-block;
              padding: 6px 18px;
              border-radius: 30px;
              background-color: white;
              color: #595959;
              .iconfont {
                margin-right: 12px;
              }
            }
          }
          .clickNum {
            .iconfont {
              display: inline-block;
              font-size: 14px;
              margin-right: 12px;
            }
            .clickNum {
              font-size: 14px;
            }
          }
        }
      }
    }
    .anchor {
      position: fixed;
      left: 0;
      top: 170px;
      width: 154px;
      height: 165px;
      .see-anchor {
        padding: 24px 0 36px 0;
        background: linear-gradient(1turn, #fff, hsla(0, 0%, 100%, 0.3));
        border-image: linear-gradient(180deg, #fff 4%, #fff 99%) 2 2;
        border-radius: 0 28px 28px 0;
        box-shadow: 0 10px 19px 0 rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(2px);
        max-height: calc(100vh - 340px);
        width: 154px;
        .anchorwrapper {
          padding: 0 20px 0 16px;
          background: transparent;
          .anchorfixed {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            color: rgba(0, 0, 0, 0.65);

            font-size: 14px;
            font-variant: tabular-nums;
            line-height: 1.5;
            list-style: none;
            font-feature-settings: 'tnum';
            position: relative;
            padding-left: 2px;
            .anchorItem {
              color: pink;
            }
          }
        }
      }
    }
  }
}
</style>
