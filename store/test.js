// import { resolve } from "core-js/fn/promise"

// データで扱う初期値を決める
export const state = () => ({
  txt: '',
})

// 実際に表示に使う値を決める
export const getters = {
  txt(state) {
    return state.txt
  },
}

// stateの値を更新する関数を定義する
export const mutations = {
  setTxt(state, txt) {
    state.txt = txt
  },
}

// 非同期処理など mutationsの前に行いたいことがある場合に使う
export const actions = {
  async saveTxt({ commit }, { text }) {
    // const txt = await this.$axios.post(...)// サーバーへのリクエスト
    const txt = await getValueAfter100ms(text)
    commit('setTxt', txt)
  },
}

function getValueAfter100ms(txt) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(txt)
    }, 100)
  })
}
