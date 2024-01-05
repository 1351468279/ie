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
                  <div class="icon"></div>
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
          <div class="item search">1</div>
          <div class="item system">
            <div class="sysbtn">
              <div class="icon">1</div>
              <div class="text">2</div>
              <div class="endtag"></div>
            </div>
          </div>
          <div class="item">3</div>
          <div class="item">4</div>
          <div class="item">5</div>
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
                  background-color: #007aff;
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
        .item {
          width: 2.5vw;
          height: 5vh;
          background-color: yellow;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .search {
          background-color: #f7f8fa;
        }
        .system {
          background-color: #ffff;
          width: 4.5vw;
          .sysbtn {
            width: 4.5vw;
            height: 2.5vh;
            border: 1px solid #e40613;
            border-radius: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            .icon {
              width: 0.7vw;
              height: 0.7vw;
              background-color: #e40613;
            }
          }
        }
      }
    }
  }
}
</style>
