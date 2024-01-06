<template>
  <div class="category_page">
    <div class="filter_wraper">
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
                <div @click="ceshi"><i class="el-icon-delete"></i></div>
              </template>
            </el-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      input: '',
    }
  },
  created() {},
  mounted() {},
  methods: {
    ceshi() {
      console.log('测试')
    },
  },
  computed: {},
}
</script>
<style scoped lang="scss">
.category_page {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  .filter_wraper {
    padding: 1vh 0;
    width: 60vw;
    height: 20vh;
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
            color: #ababab;
            font-size: 0.75vw;
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
            .el-input__inner {
              width: 13vw;
              height: 3vh;
              line-height: 3vh;
            }
            .el-input__suffix {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
    }
  }
}
</style>
