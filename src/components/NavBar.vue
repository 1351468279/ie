<template>
  <div class="category_bar">
    <el-menu
      router
      text-color="#606266"
      active-text-color="#007aff"
      class="menu"
      mode="horizontal"
    >
      <li
        style="
          float: left;
          height: 60px;
          line-height: 60px;
          margin: 0;
          border-bottom: 2px solid transparent;
          color: #909399;
        "
      >
        <img
          style="height: 28px"
          src="https://asset.seeyoncloud.com/logo_169139686420750000.png"
          alt=""
        />
      </li>
      <template v-for="(item, index) in menuLeft">
        <el-menu-item
          class="el-menu-item"
          v-if="item.children == null && !item.hidden"
          :index="item.route"
          :key="index"
          >{{ item.name }}</el-menu-item
        >
        <el-submenu
          class="el-submenu-1"
          :show-timeout="100"
          v-else-if="!item.hidden"
          :index="item.route"
          :key="index"
        >
          <template #title>{{ item.name }}</template>
          <div
            class="header"
            id="headerId"
            style="width: 100vw; height: 40vh; overflow-y: auto"
          >
            <div
              class="wrape"
              id="wrapeId"
              style="width: 63vw; left: 0; right: 0; margin: 0 auto"
            >
              <el-row
                class="el-row"
                :gutter="20"
                style="width: 63vw; left: 0; right: 0; margin: 0 auto"
              >
                <el-col
                  :span="6"
                  v-for="items in item.children"
                  :key="items.id"
                  style="margin-bottom: 20px"
                >
                  <el-card
                    class="el-card"
                    style="border: none"
                    shadow="hover"
                    :body-style="{ padding: '0px' }"
                  >
                    <div slot="header" class="clearfix">
                      <span style="color: #1887ff; font-weight: 600">{{
                        items.name
                      }}</span>
                    </div>
                    <div class="content" style="padding: 10px">
                      <div
                        style="cursor: pointer"
                        v-for="o in items.children"
                        :key="o.id"
                        class="text item"
                        @mouseenter="enter"
                        @mouseleave="leave"
                      >
                        {{ o.name }}
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-submenu>
      </template>
      <div class="func-container app-func">
        <div class="menu-search" @click.stop="showSearch">
          <i
            style="color: #1887ff; font-weight: 600"
            class="el-icon-search"
          ></i>
          <div
            class="mask"
            :class="{ active: showmask }"
            @click.stop="closeSeacch"
          ></div>
          <div class="search-dropdown" :class="{ active: showmask }">
            <div class="search-bar">
              <el-input
                ref="mysearch"
                class="elinput"
                style="border: none"
                :placeholder="searchHistory.presetWord"
                v-model="input1"
              >
              </el-input>
              <div class="search-bar-btns">
                <div class="search-bar-btn">
                  <i
                    style="color: #1887ff; font-weight: 600"
                    class="el-icon-search"
                  ></i>
                </div>
                <div class="search-bar-btn" @click.stop="closeSeacch">
                  <i style="font-weight: 600" class="el-icon-close"></i>
                </div>
              </div>
            </div>
            <div class="search-result" :class="{ isopen: showmask }">
              <div class="hot-words">
                <p class="title">热门搜索</p>
                <ul class="list">
                  <li
                    class="word"
                    v-for="(i, index) in searchHistory.hotWords"
                    :key="index"
                  >
                    {{ i }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="system-btn">
          <div class="item">
            <div class="icon">
              <i
                style="color: #e40613; font-weight: 600"
                class="el-icon-s-home"
              />
            </div>
            <div class="text" style="color: #e40613">政务</div>
            <div class="endtag"></div>
          </div>
        </div>
        <div class="split-line">
          <div class="tag"></div>
        </div>
        <div class="register">
          <div class="item">注册</div>
        </div>
        <div class="login">
          <div class="item">
            <el-button>登录</el-button>
          </div>
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mineData, searchDetail } from '@/utils/data'
export default {
  name: '',
  components: {},
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      menuLeft: [],
      input1: '',
      showmask: false,
      searchHistory: {},
    }
  },
  created() {
    this.menuLeft = mineData
    this.searchHistory = searchDetail
  },
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    leave(e) {
      console.log(e)
      e.target.classList.remove('highlight')
    },
    enter(e) {
      console.log(e)
      e.target.classList.add('highlight')
    },
    showSearch(e) {
      this.showmask = true
      console.log(this)
      this.$refs.mysearch.focus()
    },
    closeSeacch() {
      this.showmask = false
    },
  },
  computed: {},
}
</script>
<style scoped lang="scss">
.inputDeep >>> .el-input__inner {
  border: 0;
}
.highlight {
  color: #007aff;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
//此处
.category_bar {
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 99vw;
  .menu {
    .func-container {
      float: right;
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 60px;
      .menu-search {
        margin-left: 5px;
        background-color: #f7f8fa;
        height: 100%;
        width: 47px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .mask {
          visibility: hidden;
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
        .search-dropdown {
          visibility: hidden;
          position: absolute;
          right: 0;
          top: 0;
          z-index: 2002;
          width: 15vw;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.06);
          .search-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 64px;
            box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.06);
            padding: 0 100px 0 10px;
            position: relative;
            .search-bar-btns {
              height: 100%;
              display: flex;
              align-items: center;
              position: absolute;
              top: 0;
              right: 20px;
              display: flex;
              justify-content: space-around;
              align-items: center;
              width: 3vw;
              cursor: pointer;
            }
            .elinput ::v-deep {
              .el-input__inner {
                border-left: none;
                border-right: none;
                border-top: none;
                border-radius: 0;
                width: 100%;
              }
            }
          }
          .search-result {
            opacity: 0;
            .hot-words {
              padding: 24px 24px 32px;
              .title {
                font-size: 14px;
                font-weight: 600;
                color: #666;
                line-height: 20px;
              }

              .list {
                display: flex;
                flex-wrap: wrap;
                .word {
                  font-size: 12px;
                  color: #666;
                  line-height: 16px;
                  background: #f7f8fa;
                  border-radius: 12px;
                  padding: 4px 8px;
                  margin-top: 12px;
                  margin-right: 16px;
                  cursor: pointer;
                }
              }
            }
          }
          .isopen {
            opacity: 1;
            transition: all 0.3s ease-in-out;
            transition-delay: 0.1s;
          }
        }

        .active {
          visibility: visible;
        }
      }
      .system-btn {
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        .item {
          border-radius: 2px;
          padding-right: 5px;
          margin: 0;
          height: 25px;
          width: 70px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          border: 1px solid #e40613;
          cursor: pointer;
          .endtag {
            width: 5px;
            height: 5px;
            border-right: 1px solid #e40613;
            border-bottom: 1px solid #e40613;
            transform: rotate(-45deg);
          }
        }
      }
      .split-line {
        margin-left: 10px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        .tag {
          height: 20px;
          width: 1px;
          background-color: #ececec;
        }
      }
      .register {
        margin: 0 20px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;

        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 25px;
          margin: 0;
          cursor: pointer;
          font-size: 14px;
        }
        .item:hover {
          color: #007aff;
        }
      }
      .login {
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        .item {
          margin: 0;
        }
        .item ::v-deep {
          .el-button {
            width: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            height: 20px;
            border: none;
            background-color: #007aff;
            border-radius: 2px;
          }
        }
      }
    }
  }
}

#headerId::-ms-scrollbar {
  width: 4px;
  background-color: #fff;
}
#headerId::-ms-scrollbar-thumb {
  background-color: #8b8b8b;
}
</style>
