<template>
  <el-card>
    <div slot="header">
      <span>用户列表</span>
      <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="pageChangeHandler(1)">刷新</el-button>
    </div>
    <el-table
        :data="users"
        v-loading="loading"
        style="width: 100%">
      <el-table-column
          label="ID">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="名称">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top-start">
            <p>名称: {{ scope.row.name }}</p>
            <p>用户名: {{ scope.row.userName }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="editHandler(scope.$index, scope.row)">编辑</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="deleteHandler(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        layout="prev, pager, next, total"
        :page-size="pageOptions.pageSize"
        :total="pageOptions.totalCount"
        :current-page="pageOptions.current"
        @current-change="pageChangeHandler">
    </el-pagination>
  </el-card>
</template>
<script>

import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'User',
  data() {
    return {

    }
  },
  computed: {
    // ...mapState({
    //   users: state => state.users
    // }),
    ...mapState('user', ['users', 'pageOptions']),
    loading() {
      return this.$store.state.loading['user/getUsersHandler']
    }
  },
  created() {
    this.init()
  },
  methods: {
  ...mapActions('user', ['getUsersHandler']),
    ...mapMutations('user', ['pageChange']),
    init() {
      this.query()
    },
    async query() {
      await this.getUsersHandler({
        unPaged: false
      })
    },
    pageChangeHandler(current) {
      this.pageChange({
        current: current,
        pageSize: this.pageOptions.pageSize
      })
      this.query()
    },
    editHandler() {},
    deleteHandler() {}
  }
}
</script>
