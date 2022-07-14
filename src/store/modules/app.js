import Global from '@/utils/global.js'
import AES from '@/utils/aes'
import $ws from '../../socket/ws2'
import {login} from '@/network/allApi'
export default {

  state: () => ({

    user: {},
    login: false,
    // token: sessionStorage.getItem('t') || '',
    // userId: sessionStorage.getItem('u_i') || '',
    token: '',
    userId: '',
    gameEn: {
      key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
      iv: '1234567890123456'
    },
  }),

  getters: {
    USERID: state => state.userId,
    LToken: state => state.token,
    USER: state => state.user,
    Game_En: state => state.gameEn
  },

  mutations: {
    IS_LOGIN(state, payload) {
      state.login = payload
    },
    /* User */
    SET_USERINFO(state, payload) {
      state.user = payload
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
  },

  actions: {
    login({ commit }, sendStr) {
      console.log(sendStr.JsonData.name + "sendstr *****");
      // const { username, password } = sendStr
      return new Promise((resolve, reject) => {
        const en = Global.gameEn
        login({ data: AES.encrypt(JSON.stringify(sendStr), en) }).then(response => {
          var body = response.data
          var msg = JSON.parse(AES.decrypt(body, en))
           console.log('login response ', msg)
          if (msg.router === 'LoginErr') {
            // Message.info(msg.reason)
            console.error(msg.reason);
            reject()
          }
          if (msg.JsonData.enable === 0) {
            // Message.info('亲, 您的帐户被锁定, 请联系上级!')
            console.error('亲, 您的帐户被锁定, 请联系上级!');
            reject()
          }
          if (msg.JsonData.level === 3) {
            console.error('账号或密码错误!');
            // Message.info('账号或密码错误!')
            reject()
          }
          commit('SET_TOKEN', msg.JsonData.token)
          commit('SET_USERINFO', msg.JsonData)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  },
  namespaced: true
}
