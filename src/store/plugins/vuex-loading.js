/**
 * loading 插件
 * 使用方法 :
 * 通过 this.$store.loading.nameSpace 获取当前module的loading状态
 * 通过 this.$store.loading.global 获取全局的loading状态
 * @param store
 */
const loading = store => {
    const { _actions, commit } = store

    let loadingSate = {
        global: false
    }

    for (let [key, action] of Object.entries(_actions)) {
        const [nameSpace, actionName] = key.split('/')
        loadingSate[nameSpace] = false
        actionName && (loadingSate[`${nameSpace}/${actionName}`] = false)
        const oldAction = action[0]
        action[0] = async function() {
            let value = null
            // 异常捕获
            try {
                await commit('showLoading', { nameSpace, actionName })
                value = await oldAction.apply(this, arguments)
            } catch (error) {
                throw error
            } finally {
                await commit('hideLoading', { nameSpace, actionName })
            }
            return value
        }
    }

    // 注册 loading 的 module
    store.registerModule('loading', {
        state: loadingSate,
        mutations: {
            showLoading(state, { nameSpace, actionName }) {
                state[nameSpace] = true
                actionName && (state[`${nameSpace}/${actionName}`] = true)
                state.global = true
            },
            hideLoading(state, { nameSpace, actionName }) {
                state[nameSpace] = false
                actionName && (state[`${nameSpace}/${actionName}`] = false)
                state.global = false
            }
        }
    })
}

export default loading
