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
          v-for="item in tagList"
          :key="item.group_id"
        >
          <div class="title">{{ item.group_name }}</div>
          <div class="content">
            <div class="item">全部</div>
            <div
              class="item"
              v-for="items in item.child_list"
              :key="items.group_name"
            >
              <div>{{ items.group_name }}</div>
              <div class="childtag" v-if="items.child_list.length > 0"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="more" @click="showAll">
        <div class="text">展开</div>
        <div class="tag"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { tagList, cateTagList } from '@/utils/data'
export default {
  name: '',
  components: {},
  data() {
    return {
      input: '',
      tagList: [],
      cateTagList: cateTagList,
      showall: false,
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
    }
  },
  created() {
    console.log(this.tagList)
    console.log(tagList)
    this.tagList = tagList.filter((item, index) => index == 0)
    console.log(this.tagList)
  },
  mounted() {},
  methods: {
    ceshi() {
      console.log('测试')
    },
    showAll() {
      console.log('121212')
      if (this.showall) {
        this.showall = false
        this.tagList = tagList.filter((item, index) => index == 0)
      } else {
        this.showall = true
        this.tagList = tagList.filter((item) => item)
        this.tagList.push(this.appliEnd)
        console.log(this.tagList)
        console.log(this.appliEnd)
      }
    },
  },
  computed: {},
}
</script>
<style scoped lang="scss">
.category-page {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  .filter_wraper {
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
      border-bottom: 1px solid #f0f2f5;
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
          font-size: 1vw;
          span {
            cursor: pointer;
            color: #ababab;
            font-size: 1vw;
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
        width: 60vw;
        display: flex;
        justify-content: flex-start;
        .title {
          padding: 0.25vw 0;
          color: #717171;
          font-size: 0.8vw;
          margin-right: 1.6vw;
        }
        .content {
          overflow: hidden;
          height: 3vh;
          flex-wrap: wrap;
          width: 50vw;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .item {
            width: auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
            cursor: pointer;
            color: #333333;
            font-size: 0.8vw;
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
            &:hover {
              color: #007aff;
              background-color: #e5f1ff;
              .childtag {
                border-right: 1px solid #007aff;
                border-bottom: 1px solid #007aff;
                transform: rotate(225deg);
              }
            }
          }
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
  }
}
</style>
