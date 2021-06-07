<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import './views/styles/common';
html,
body {
  width: 100%;
  height: 100%;
  background: @body-background;
  overflow: hidden;
  margin: 0;
  padding: 0
}
.app {
  width: 100%;
  height: 100%;
}
</style>
