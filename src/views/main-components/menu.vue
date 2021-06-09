<template>
  <el-menu
    :default-active="$route.path"
    exact
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
    class="menu"
  >
    <menu-item v-for="(item, index) in menu" :key="index" :item="item" />
  </el-menu>
</template>

<script>
import MenuItem from "./menuItem.vue";

export default {
  name: "Menu",
  components: { MenuItem },
  data() {
    return {
      menu: [
        {
          url: "/home",
          name: "首页"
        },
        {
          url: "/statistics",
          name: "数据统计",
        },
        {
          url: "/system",
          name: "系统管理",
          children: [
            {
              url: "/system/user",
              name: "用户管理",
            },
            {
              url: "/system/setting",
              name: "设置",
            },
          ],
        },
      ],
    }
  },
};
</script>

<style scoped>
.menu {
  height: 100%;
}
</style>
