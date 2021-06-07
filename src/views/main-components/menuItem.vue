<template>
  <div>
    <el-menu-item v-if="!item.children" :index="item.url">
      <i class="el-icon-menu"></i>
      <span slot="title">{{ item.name }}</span>
    </el-menu-item>
    <el-submenu v-else :index="item.url">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ item.name }}</span>
      </template>
      <menu-item v-for="(subItem, subIndex) in item.children" :key="subIndex" :item="subItem" />
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    item: {
      type: Object,
      default: {},
    },
  },
};
</script>
