const user = {
    namespaced: true,
    state: {
        users: [],
        pageOptions: {
            totalCount: 0,
            current: 1,
            pageSize: 10
        }
    },
    mutations: {
        querySuccess(state, { payload }) {
            Object.assign(state, payload)
        },
        pageChange(state, { current, pageSize }) {
            state.pageOptions = { ...state.pageOptions, current, pageSize }
        }
    },
    actions: {
        // 模拟登录
        async getUsersHandler({ state, commit }, input) {
            const { unPaged = false } = input
            const { pageOptions } = state
            const { items = [], totalCount } = await getUsers({
                maxResultCount: pageOptions.pageSize,
                skipCount: (pageOptions.current - 1) * pageOptions.pageSize,
                unPaged
            })
            commit('querySuccess', { payload: { users: items, pageOptions: { ...pageOptions, totalCount } } })

            //模拟后端服务
            function getUsers(params) {
                const hostUsers = [
                    {
                        id: 1,
                        name: 'admin',
                        userName: 'admin'
                    },
                    {
                        id: 2,
                        name: 'test',
                        userName: '测试'
                    },
                    {
                        id: 3,
                        name: 'test',
                        userName: '测试'
                    },
                    {
                        id: 4,
                        name: 'test',
                        userName: '测试'
                    },
                    {
                        id: 5,
                        name: 'test',
                        userName: '测试'
                    },
                    {
                        id: 6,
                        name: 'test',
                        userName: '测试'
                    },
                    {
                        id: 7,
                        name: 'test',
                        userName: '测试'
                    },
                    {
                        id: 8,
                        name: 'test',
                        userName: '测试'
                    },
                    {
                        id: 9,
                        name: 'test',
                        userName: '测试'
                    },
                    {
                        id: 10,
                        name: 'test',
                        userName: '测试'
                    },
                    {
                        id: 11,
                        name: 'test',
                        userName: '测试'
                    },
                    {
                        id: 12,
                        name: 'test',
                        userName: '测试'
                    },
                    {
                        id: 13,
                        name: 'test',
                        userName: '测试'
                    }
                ]
                const { maxResultCount, skipCount, unPaged } = params
                const currentUsers = hostUsers.slice(skipCount, skipCount + maxResultCount)
                return {
                    items: currentUsers,
                    totalCount: hostUsers.length
                }
            }
        }
    }
}

export default user
