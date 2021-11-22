const state = {
  testBus: '我是默认数据',
}

const actions = {
  testBusiness({ commit }: any, params: any) {
    console.info('进来了开始执行自己想逃的吧')
    commit('testBusinessmutations', params + '-我是action')
  },
}

const mutations = {
  testBusinessmutations: (state: any, params: any) => {
    state.testBus = params
  },
}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
}
