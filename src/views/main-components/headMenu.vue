<template>
  <div class="head-menu">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
          v-for="(item, index) in breadCrumbList"
          :key="index"
          :to="item.components.default.name === 'ParentView' ? null : { path: item.path }"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div style="flex: 1"></div>
    <el-button type="primary" @click="exitHandler">退出</el-button>
  </div>
</template>

<script>

export default {
  name: 'HeadMenu',
  data() {
    return {
      breadCrumbList: []
    }
  },
  watch: {
    $route(to, from) {
      this.breadCrumbList = to.matched
    }
  },
  created() {
    this.breadCrumbList = this.$route.matched
  },
  methods: {
    exitHandler() {
      this.$router.push({ name: 'Login' })
      sessionStorage.clear()
    }
  }
}
</script>

<style scope>
.head-menu {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
