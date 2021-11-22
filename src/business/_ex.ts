export const XXXXX = 'XXXX' // 这是一个例子
const state = () => {
  return {
    xxx: 'xxx',
  }
}

const actions = {
  /**
   * 系统登录
   */
  xxxx(context: any, payload: any) {
    // code
    context.commit(XXXXX, payload)
  },
}

const getters = {
  xxx(sta: any) {
    return sta.xxx
  },
}

const mutations = {
  [XXXXX](sta: any, payload: any) {
    sta.xxx = 'xxx'
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
