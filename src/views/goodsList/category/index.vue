<template>
  <div class="category_page">
    <NavBar></NavBar>
    <div class="banner">
      <div class="item"></div>
    </div>
    <CategoryFilter />
    <NavFootor />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import CategoryFilter from './components/CategoryFilter.vue'
import NavFootor from '@/components/NavFootor.vue'
export default {
  name: '',
  components: { NavBar, CategoryFilter, NavFootor },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss">
.category_page {
  width: 100%;
  .banner {
    width: 100%;
    height: 15vh;
    .item {
      width: 100%;
      height: 100%;
      transform: translateX(0px) scale(1);
      background-image: url(https://asset.seeyoncloud.com:443/%E4%BA%91%E5%B8%82%E5%9C%BA%402x_165484767313710000.jpg);
      background-color: rgb(212, 227, 246);
      background-size: cover;
    }
  }
}
</style>
