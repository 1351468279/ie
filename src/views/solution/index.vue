<template>
  <div class="category_bar">
    <div class="headerwrape">
      <div class="leftimg">
        <img
          class="img"
          src="https://asset.seeyoncloud.com/logo_169139686420750000.png"
          alt=""
        />
      </div>
      <div class="leftmenu">
        <div
          class="firMenu"
          :class="{ active: activeId == item.id }"
          @mouseenter="activeId = item.id"
          @mouseleave="activeId = ''"
          v-for="item in menuLeft"
          :key="item.id"
          @click.stop="onclickMenu(item)"
        >
          <div class="name">{{ item.name }}</div>
          <div class="arrow" v-show="item.children"></div>
          <div class="secMenu" v-if="item.children && activeId == item.id">
            <div class="secMenuWrape">
              <div
                class="secItem"
                v-for="items in item.children"
                :key="items.id"
              >
                <div class="top">
                  <div class="icon">
                    <i class="iconfont">&#xe640;</i>
                  </div>
                  <div class="title">{{ items.name }}</div>
                </div>
                <div class="bottom">
                  <div
                    class="title"
                    v-for="itemss in items.children"
                    :key="itemss.id"
                    :class="{ actives: secActiveId == itemss.id }"
                    @mouseenter="secActiveId = itemss.id"
                    @mouseleave="secActiveId = ''"
                    @click.stop="onclickSecMenu(itemss)"
                  >
                    {{ itemss.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rightmenu">
        <div class="rightmenuWrape">
          <div
            class="item search iconfont"
            style="font-size: 26px"
            @click="showSearch"
          >
            &#xe6e1;
            <div class="searchBar" v-if="showmask"></div>
          </div>

          <div class="mask" v-if="showmask" @click.stop="closeSeacch"></div>
          <div class="item system">
            <div class="sysbtn">
              <div class="icon iconfont">&#xe603;</div>
              <div class="text">政务</div>
              <div class="endtag"></div>
            </div>
          </div>
          <div class="item line"></div>
          <div class="item register">注册</div>
          <div class="item login">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mineData, searchDetail } from '@/utils/data'
export default {
  name: '',
  components: {},
  data() {
    return {
      activeId: '',
      secActiveId: '',
      menuLeft: [],
      input1: '',
      showmask: false,
      searchHistory: {},
    }
  },
  created() {
    console.log(mineData)
    for (let i = 0; i < mineData.length; i++) {
      if (mineData[i].hidden != true) {
        this.menuLeft.push(mineData[i])
      }
    }
    this.activeIndex = this.menuLeft[0].id
    this.searchHistory = searchDetail
  },
  mounted() {},
  methods: {
    showSearch(e) {
      this.showmask = true
      console.log(this)
      this.$refs.mysearch.focus()
    },
    closeSeacch() {
      this.showmask = false
    },

    onclickMenu(item) {
      this.activeId = item.id
      if (this.$route.fullPath == item.route) {
        return
      }
      this.$router.push(item.route)
    },
    onclickSecMenu(item) {
      this.secActiveId = item.id
      if (this.$route.fullPath == item.route) {
        return
      }
      this.$router.push(item.route)
    },
  },
  computed: {},
}
</script>
<style scoped lang="scss">
@font-face {
  font-family: 'iconfont'; /* Project id 4400915 */
  /* Color fonts */
  src: url('//at.alicdn.com/t/c/font_4400915_p10nhq6bjz.woff2?t=1704450222576')
      format('woff2'),
    url('//at.alicdn.com/t/c/font_4400915_p10nhq6bjz.woff?t=1704450222576')
      format('woff'),
    url('//at.alicdn.com/t/c/font_4400915_p10nhq6bjz.ttf?t=1704450222576')
      format('truetype');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-louceng:before {
  content: '\e640';
}

.icon-wangluo:before {
  content: '\e642';
}

.icon-dalou:before {
  content: '\e6bc';
}

.icon-fuwu:before {
  content: '\e611';
}

.icon-jingwuicon_svg-:before {
  content: '\e603';
}

.icon-search:before {
  content: '\e6e1';
}

.icon-zhiliang-:before {
  content: '\e668';
}

.category_bar {
  width: 100%;
  height: 5vh;
  .headerwrape {
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 5vh;
    width: 98vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    .leftimg {
      height: 5vh;
      display: flex;
      justify-content: center;
      align-items: center;
      .img {
        width: 7vw;
      }
    }
    .leftmenu {
      padding: 0 2vw;
      height: 5vh;
      font-size: 0.8vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .firMenu {
        height: 5vh;
        margin: 0 0.8vw;
        cursor: pointer;
        transition: all 0.3s;
        position: relative;
        &::after {
          position: absolute;
          bottom: 0;
          display: block;
          content: '';
          width: 0;
          height: 2px;
          background-color: #007aff;
          transition: width 0.2s;
        }
        .name {
          display: inline-block;
          height: 5vh;
          line-height: 5vh;
        }
        .arrow {
          display: inline-block;
          margin-left: 6px;
          width: 5px;
          height: 5px;
          line-height: 5vh;
          border: 1px solid black;
          border-top: none;
          border-left: none;
          transform: rotate(45deg);
          transition: transform 0.2s;
        }
      }

      .active {
        color: #007aff;
        position: relative;
        &::after {
          left: 0;
          right: 0;
          margin: 0 auto;
          position: absolute;
          bottom: 0;
          display: block;
          content: '';
          width: 80%;
          height: 2px;
          background-color: #007aff;
        }
        .arrow {
          margin-left: 6px;
          width: 5px;
          height: 5px;
          border: 1px solid #007aff;
          border-top: none;
          border-left: none;
          transform: rotate(225deg);
        }
        .secMenu {
          color: black;
          cursor: default;
          position: absolute;
          left: -14vw;
          top: 5vh;
          width: 100vw;
          height: 40vh;
          overflow-y: auto;
          background: #fff
            url('https://pcmall.seeyoncloud.com/c/static/img/menu-bg.1ece67d0.png')
            no-repeat 50%;
          background-size: 58.24vw 20.8333vw;
          border-top: 1px solid #ececec;
          box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.06);
          .secMenuWrape {
            width: 65vw;
            height: 40vh;
            left: 0;
            right: 0;
            margin: 0 auto;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            .secItem {
              margin: 1vh 0;
              margin-right: 1vw;
              width: 15vw;
              .top {
                width: 15vw;
                height: 7vh;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .icon {
                  width: 3vw;
                  height: 3vw;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 2vw;
                }
                .title {
                  flex: 1;
                  height: 3vw;
                  line-height: 3vw;
                  color: #007aff;
                  font-weight: 600;
                  font-size: 0.85vw;
                  border-bottom: 1px solid #ececec;
                }
              }
              .bottom {
                width: 15vw;
                padding-left: 3vw;
                .title {
                  color: #333333;
                  padding: 1vh 0;
                  cursor: pointer;
                }
                .actives {
                  color: #007aff;
                }
              }
            }
          }
        }
      }
    }
    .rightmenu {
      position: absolute;
      right: 0;
      top: 0;
      .rightmenuWrape {
        width: 17vw;
        height: 5vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .mask {
          width: 100vw;
          height: 100vh;
          background-color: rgba(73, 87, 112, 0.2);
          opacity: 1;
          transition: all 0.2s ease-in-out;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 2000;
        }
        .item {
          cursor: pointer;
          width: 2.5vw;
          height: 5vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .search {
          background-color: #f7f8fa;
          position: relative;
          .searchBar {
            position: absolute;
            width: 22vw;
            height: 22vh;
            background-color: skyblue;
            right: 0;
            top: 0;
            z-index: 99999999;
          }
        }

        .system {
          width: 4.5vw;
          .sysbtn {
            width: 4.5vw;
            height: 2.5vh;
            border: 1px solid #e40613;
            border-radius: 2px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            color: #e40613;
            .icon {
              width: 0.7vw;
              height: 0.7vw;
            }
            .text {
              font-size: 0.75vw;
            }
            .endtag {
              width: 0.3vw;
              height: 0.3vw;
              border-right: 1px solid #e40613;
              border-bottom: 1px solid #e40613;
              transform: rotate(-45deg);
            }
          }
        }
        .line {
          width: 1px;
          height: 1vw;
          background-color: #ececec;
        }
        .register {
          font-size: 0.8vw;
          &:hover {
            color: #007aff;
          }
        }
        .login {
          font-size: 0.7vw;
          width: 3vw;
          border-radius: 2px;
          height: 2.8vh;
          background-color: #007aff;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          &:hover {
            background-color: #3395ff;
          }
        }
      }
    }
  }
}
</style>
