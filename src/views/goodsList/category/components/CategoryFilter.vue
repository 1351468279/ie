<template>
  <div class="category-page">
    <div class="filter_wraper" :class="{ open: showall }">
      <div class="filter_title">
        <div class="left">
          <div class="tag">全部分类</div>
        </div>
        <div class="right">
          <div class="hotwords">
            <div class="item">合同管理</div>
            <div class="item">合同管理</div>
            <div class="item">合同管理</div>
            <div class="item">合同管理</div>
            <div class="item">合同管理</div>
          </div>
          <div class="search">
            <el-input class="el-input" v-model="input">
              <template slot="suffix">
                <div @click="ceshi"><i class="el-icon-search"></i></div>
              </template>
            </el-input>
          </div>
        </div>
      </div>
      <div class="filter_content">
        <div class="left">
          <span class="title">筛选条件:</span>
          <div class="filter_item">全部</div>
        </div>
        <div class="right">
          <span class="num_title"
            >为您找到 <span class="num">x</span> 条数据</span
          >
          <div class="clearfilter">
            <span><i class="el-icon-delete"></i>清空筛选</span>
          </div>
        </div>
      </div>
      <div class="core-filter" :class="{ open: showall }">
        <div class="product_category">
          <div class="title">商品分类</div>
          <div class="content">
            <div class="item">全部</div>
            <div
              class="item"
              v-for="item in cateTagList"
              :key="item.category_id"
            >
              {{ item.category_name }}
            </div>
          </div>
        </div>
        <div
          class="product_category"
          ref="productCategory"
          v-for="item in tagList"
          :id="item.group_id"
          :key="item.group_id"
        >
          <div class="title">{{ item.group_name }}</div>
          <div class="content" :class="{ show: showMore }" ref="content">
            <div class="item">全部</div>

            <el-popover
              :disabled="items.child_list.length == 0"
              class="item"
              v-for="items in item.child_list"
              :key="items.group_id"
              placement="bottom-start"
              :width="200"
              trigger="hover"
            >
              <div class="childtag" v-if="items.child_list.length > 0"></div>
              <div
                class="moreItem"
                v-if="items.group_id == showMoreItemId"
              ></div>
              <template #reference>
                <el-button class="m-2">{{ items.group_name }}</el-button>
                <div class="childtag" v-if="items.child_list.length > 0"></div>
              </template>
              <template #default>
                <div id="childList">
                  <span
                    class="childListItem"
                    v-for="itemss in items.child_list"
                    :key="itemss.group_id"
                  >
                    {{ itemss.group_name }}
                  </span>
                </div>
              </template>
            </el-popover>
          </div>
          <div
            class="more"
            v-if="showMoreHtml(item.group_id)"
            @click="toggleShowMore(item.group_id)"
          >
            更多
          </div>
        </div>
      </div>
      <div class="more" @click="showAll">
        <div class="text">展开</div>
        <div class="tag"></div>
      </div>
    </div>
    <div class="filterItem_wraper">
      <div class="sort">
        <el-checkbox v-model="checked1">可体验</el-checkbox>
        <div class="sortRuler">
          <div
            class="ruleritem"
            :class="{ active: activeRulerId == item.id }"
            v-for="item in rulerData"
            :key="item.id"
            @click="activeRulerId = item.id"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="goodsList">
        <div
          class="goodsItem"
          v-for="item in goodsList"
          :key="item.goodsId"
          @click="viewProjectDetail(item.goodsId)"
        >
          <div class="wrape">
            <div class="left">
              <div class="top">
                <div class="imgBox">
                  <img class="img" :src="item.pictureUrl" alt="" />
                </div>
                <div class="info">
                  <div class="name">{{ item.goodsName }}</div>
                  <div class="func">
                    <div class="smallFunc tiyan">
                      <div class="icon el-icon-circle-check"></div>
                      <div class="text">可体验</div>
                    </div>
                    <div class="dot"></div>
                    <div class="smallFunc view">
                      <div class="icon el-icon-view"></div>
                      <div class="text">11</div>
                    </div>
                    <div class="dot"></div>
                    <div class="smallFunc download">
                      <div class="icon el-icon-download"></div>
                      <div class="text">22</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bottom">
                <div class="text">查看详情</div>
                <div class="icon el-icon-right"></div>
              </div>
            </div>
            <div class="middle"></div>
            <div class="right"></div>
          </div>
        </div>
      </div>

      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next"
        :total="40"
      >
      </el-pagination>
    </div>
  </div>
</template>
<style scoped lang="scss">
#childList::v-deep {
  .childListItem {
    display: inline-block;
    padding: 0.25vw 0.4vw;
    margin: 0.2vw 0;
  }
  .childListItem:hover {
    color: #007aff;
    cursor: pointer;
    background-color: #e5f1ff;
    border-radius: 5px;
  }
}

.category-page {
  width: 100%;
  overflow: hidden;

  .filter_wraper {
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 1vh 0;
    width: 60vw;
    .filter_title {
      width: 60vw;
      height: 4vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f0f2f5;

      .left {
        display: flex;
        justify-content: center;
        align-items: center;
        .tag {
          font-size: 0.8vw;
          color: #262626;
          display: flex;
          justify-content: center;
          align-items: center;
          &::before {
            margin-right: 5px;
            display: inline-block;
            content: '';
            width: 4px;
            height: 13px;
            border-radius: 2px;
            background-color: #007aff;
          }
        }
      }
      .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .hotwords {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .item {
            cursor: pointer;
            color: #ababab;
            font-size: 0.75vw;
            &:hover {
              color: #007aff;
            }
            &::after {
              margin: 0 4px;
              display: inline-block;
              content: '';
              width: 1px;
              height: 10px;
              background-color: #ababab;
            }
            &:last-child::after {
              display: none;
            }
          }
        }
        .search {
          padding-left: 1vw;
          display: flex;
          justify-content: center;
          align-items: center;
          .el-input::v-deep {
            border-radius: 20px;
            .el-input__inner {
              width: 13vw;
              height: 3vh;
              line-height: 3vh;
            }
            .el-input__suffix {
              width: 2vw;
              right: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #007aff;
              .el-input__suffix-inner {
                color: white;
              }
            }
          }
        }
      }
    }
    .filter_content {
      width: 60vw;
      height: 4vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ececec;
      padding: 1vh 0;
      .left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          margin-right: 1vw;
          color: #717171;
          font-size: 0.8vw;
        }
        .filter_item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 0 0.75vw;
          font-size: 0.8vw;
          color: #717171;
        }
      }
      .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .num_title {
          margin-right: 1vw;
          color: #717171;
          .num {
            color: #007aff;
          }
        }
        .clearfilter {
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            cursor: pointer;
            color: #ababab;
            font-size: 0.8vw;
            &:hover {
              color: #007aff;
            }
          }
        }
      }
    }
    .core-filter {
      padding-top: 2vh;
      width: 60vw;
      height: auto;
      position: relative;
      .product_category {
        padding: 0.5vh 0;
        display: flex;
        justify-content: flex-start;
        .title {
          width: 4vw;
          padding: 0.25vw 0;
          color: #717171;
          font-size: 0.8vw;
          margin-right: 1.6vw;
        }
        .content {
          height: 1.55vw;
          overflow: hidden;
          width: 50vw;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: center;
          .item {
            position: relative;
            display: flex;
            justify-content: space-around;
            align-items: center;
            color: #333333;
            font-size: 0.8vw;
            cursor: pointer;

            padding: 0.25vw 0.6vw;
            border-radius: 5px;
            margin-right: 0.3vw;
            .childtag {
              margin-left: 0.5vw;
              display: inline-block;
              width: 0.3vw;
              height: 0.3vw;
              border-right: 1px solid #333333;
              border-bottom: 1px solid #333333;
              transform: rotate(45deg);
            }
            &:hover::v-deep {
              color: #007aff;
              background-color: #e5f1ff;
              .childtag {
                border-right: 1px solid #007aff;
                border-bottom: 1px solid #007aff;
                transform: rotate(225deg);
              }
              .el-popover__reference-wrapper {
                background-color: #e5f1ff;
                .el-popover__reference {
                  background-color: #e5f1ff;
                  color: #007aff;
                }
              }
            }
          }
          .item::v-deep {
            .el-popover__reference-wrapper {
              font-size: 0.8vw;
              padding: 0;
              .el-popover__reference {
                padding: 0;
                font-size: 0.8vw;
                border: none;
                color: #333333;
              }
            }
          }
        }
        .more {
          padding: 0.5vh 0;

          left: 0;
          right: 0;
          margin: 0 auto;
          color: #007aff;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          font-size: 0.8vw;
        }
        .show {
          height: auto;
        }
      }
    }
    .more {
      left: 0;
      right: 0;
      margin: 0 auto;
      color: #007aff;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        width: 2vw;
        height: 2vw;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8vw;
      }
      .tag {
        width: 0.2vw;
        height: 0.2vw;
        border-bottom: 1px solid #007aff;
        border-right: 1px solid #007aff;
        transform: rotate(45deg);
      }
    }
    .sort {
      display: flex;
      justify-content: space-between;
    }
  }
  .filterItem_wraper {
    padding: 1vh 0;
    width: 60%;
    left: 0;
    right: 0;
    margin: 0 auto;
    .sort {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      padding-bottom: 0.5vw;
      .sortRuler {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1vw;
        .ruleritem {
          background: #f7f8fa;
          padding: 0.5vw 0.5vw;
          font-size: 0.8vw;
          margin-left: 0.5vw;
          border-radius: 5px;
          cursor: pointer;
        }
        .active {
          color: #007aff;
        }
      }
    }
    .goodsList {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      .goodsItem {
        cursor: pointer;
        width: 19vw;
        height: 11vh;
        margin: 1vh 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .wrape {
          width: 17vw;
          height: 8vh;
          .left {
            width: 13.6vw;
            height: 8vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .top {
              width: 13.6vw;
              height: 4vh;
              display: flex;
              justify-content: flex-start;

              .imgBox {
                width: 2.7vw;
                margin-right: 0.7vw;
                .img {
                  width: 2.7vw;
                }
              }
              .info {
                width: 10.2vw;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: flex-start;
                .name {
                  color: #333333;
                  font-size: 0.75vw;
                  font-weight: 600;
                  &:hover {
                    color: #1983ff;
                  }
                }
                .func {
                  padding-top: 0.5vw;
                  width: 10.2vw;
                  width: 95%;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  font-size: 0.7vw;
                  color: #666666;

                  .smallFunc {
                    display: flex;
                    .icon {
                      margin-right: 0.2vw;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    }
                  }
                  .dot {
                    width: 4px;
                    height: 4px;
                    background-color: #666666;
                    border-radius: 50%;
                  }
                }
              }
            }
            .bottom {
              width: 5vw;
              color: #007aff;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #f7f8fa;
              padding: 0 1vw;
              margin-left: 3vw;
              font-size: 0.8vw;
              border-radius: 5px;
              cursor: pointer;
              .icon {
                transform: translate(5px);
                transition: all 0.3s;
              }
              &:hover {
                .icon {
                  transform: translate(10px);
                }
              }
            }
          }
        }
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.06);
        &:hover {
          box-shadow: 0 10px 20px 0 rgba(40, 44, 48, 0.16);
          border-radius: 5px;
        }
      }
    }
    .pagination {
      padding-top: 1.5vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

<script>
import { tagList, cateTagList, totalGoodsList } from '@/utils/data'
export default {
  name: '',
  components: {},
  data() {
    return {
      data: {
        groupIds: '',
        keyword: '',
        order: '',
        page: '1',
        size: 30,
        sort: '',
        terminal: '',
        experiences: null,
        categoryId: '',
      },
      input: '',
      tagList: [],
      cateTagList: cateTagList,
      showall: false,
      showMoreButton: false,
      showMore: false,
      arrMore: [],
      showMoreItemId: '',
      checked1: '',
      appliEnd: {
        group_id: '999',
        pid: 0,
        level: 1,
        description: '适用于政企商品',
        sort: 99,
        group_name: '适用端',
        short_name: '适用端',
        is_visible: 1,
        shop_id: 0,
        access_identity: '1,2',
        child_list: [
          {
            group_id: '9991',
            pid: 999,
            level: 2,
            description: '',
            sort: 1,
            group_name: 'PC端',
            short_name: 'PC端',
            is_visible: 1,
            shop_id: 0,
            access_identity: '1,2',
            child_list: [],
          },
          {
            group_id: '9992',
            pid: 999,
            level: 2,
            description: '',
            sort: 1,
            group_name: '移动端',
            short_name: '移动端',
            is_visible: 1,
            shop_id: 0,
            access_identity: '1,2',
            child_list: [],
          },
        ],
      },
      goodsList: [],
      activeRulerId: 1,
      rulerData: [
        {
          id: 1,
          name: '综合排序',
        },
        {
          id: 2,
          name: '浏览量',
        },
        {
          id: 3,
          name: '销量',
        },
        {
          id: 4,
          name: '上架时间',
        },
      ],
    }
  },
  created() {
    this.tagList = tagList.filter((item, index) => index == 0)
    console.log(this.tagList)
    this.goodsList = totalGoodsList.data
  },
  mounted() {
    this.checkShowMoreButton()
    window.addEventListener('resize', this.checkShowMoreButton) // 监听窗口大小变化
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkShowMoreButton) // 移除监听器
  },
  methods: {
    ceshi() {
      console.log('测试')
    },
    viewProjectDetail(id) {
      this.$router.push({ path: `/projectDetail/${id}` })
    },
    showAll() {
      if (this.showall) {
        this.showall = false
        this.tagList = tagList.filter((item, index) => index == 0)
      } else {
        this.showall = true
        this.tagList = tagList.filter((item) => item)
        this.tagList.push(this.appliEnd)
      }
      setTimeout(() => {
        this.checkShowMoreButton()
      }, 10)
    },
    checkShowMoreButton() {
      const product_categoryDom = document.querySelectorAll('.product_category')
      console.log(product_categoryDom)
      for (let i = 0; i < product_categoryDom.length; i++) {
        console.log(product_categoryDom[i].children[1])
        console.log(product_categoryDom[i].children[1].offsetWidth)
        let width = 0
        for (
          let j = 0;
          j < product_categoryDom[i].children[1].children.length;
          j++
        ) {
          width += product_categoryDom[i].children[1].children[j].offsetWidth
        }
        if (width > product_categoryDom[i].children[1].offsetWidth) {
          console.log(product_categoryDom[i].id)
          this.arrMore.push(product_categoryDom[i].id)
          console.log(this.arrMore)
        } else {
          console.log('没有超出')
        }
      }
    },

    toggleShowMore(id) {
      if (this.arrMore.includes(id)) {
        let idDom = document.getElementById(id)
        if (idDom.children[1].style.height == 'auto') {
          idDom.children[1].style.height = '1.55vw'
          idDom.children[2].innerText = '更多'
          return
        }
        idDom.children[1].style.height = 'auto'
        idDom.children[2].innerText = '收起'
      } else {
        console.log('不包含')
      }
    },
    showMoreHtml(id) {
      console.log(id)
      console.log(this.arrMore)
      if (this.arrMore.includes(id)) {
        return true
      } else {
        return false
      }
    },
    showMoreItem(id) {
      this.showMoreItemId = id
    },
    closeMoreItem() {
      this.showMoreItemId = ''
    },
  },
}
</script>
