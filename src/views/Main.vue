<template>
  <el-container class="container">
    <el-aside>
      <Menu />
    </el-aside>
    <el-container>
      <el-header class="header">
        <HeadMenu />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menu from './main-components/menu.vue'
import HeadMenu from './main-components/headMenu'

export default {
  name: 'Main',
  components: { Menu, HeadMenu },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
@import "styles/theme.less";
.container {
  height: 100%;
  background-color: @body-background;
}
.header {
  border-bottom: 1px solid @subsidiary-color ;
}
</style>
