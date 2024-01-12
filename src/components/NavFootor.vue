<template>
  <div class="applyfoot_apge">
    <div class="wrape">
      <div class="left">
        <div class="img"></div>
        <div class="content">
          <div class="title">服务热线</div>
          <div class="phone">{{ webInfo.web_phone }}</div>
        </div>
      </div>
      <div class="right">
        <div class="item" v-for="item in helperList" :key="item.class_id">
          {{ item.class_name }}
          <div class="childwrape">
            <a
              class="childItem"
              v-for="items in item.document_list"
              :key="items.id"
              :href="items.link_url"
            >
              {{ items.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { webSiteInfo, helpList } from '@/utils/data'

export default {
  name: '',
  components: {},
  data() {
    return {
      webInfo: {},
      helperList: [],
    }
  },
  created() {
    this.webInfo = webSiteInfo
    this.helperList = helpList
  },
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss">
.applyfoot_apge {
  width: 100%;
  height: 22vh;
  background-color: #050d16;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrape {
    width: 60vw;
    height: 15vh;
    display: flex;
    align-items: center;
    .left {
      width: 17vw;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .img {
        display: inline-block;
        width: 3vw;
        height: 3vw;
        margin-right: 10px;
        margin-top: 7px;
        background: url(https://pcmall.seeyoncloud.com/c/static/img/ser_hotline.9bdecc13.png)
          no-repeat 50%;
        background-size: contain;
      }
      .content {
        margin-left: 0.5vw;
        .title {
          font-size: 1.25vw;
          color: #fff;
        }
        .phone {
          font-size: 1.25vw;
          color: #fff;
        }
      }
      border-right: 1px solid #4a5056;
    }
    .right {
      width: 40vw;
      height: 100%;
      display: flex;
      justify-content: space-around;
      .item {
        margin-left: 1vw;
        font-size: 1.25vw;
        color: #fff;
        .childwrape {
          margin-top: 0.25vw;
          display: flex;
          flex-direction: column;
          .childItem {
            text-decoration: none;
            margin-top: 0.5vh;
            font-size: 0.75vw;
            color: #fff;
            &:hover {
              cursor: pointer;
              color: #00a0e9;
            }
          }
        }
      }
    }
  }
}
</style>
