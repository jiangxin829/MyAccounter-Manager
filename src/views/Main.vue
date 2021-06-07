<template>
  <el-container class="container">
    <el-aside>
      <Menu />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menu from './main-components/menu.vue'

export default {
  name: 'Main',
  components: { Menu },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.container {
  height: 100%;
}
</style>
