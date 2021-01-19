export default {
  state: {
    crerdentials: [
      {
        id: 1,
        username: 'caio',
        password: '123',
      },
    ],
  },
  mutations: {},
  actions: {
    checkLogin: ({ state }, user) => {
      const userIndex = state.crerdentials.findIndex(
        credential => credential.username === user.username
      );

      if (userIndex < 0) throw { msg: 'User not found' };

      const credential = state.credentials[userIndex];

      if (credential.password !== user.password)
        throw { msg: 'Username/password incorrect, please verify' };

      return;
    },
  },
  getters: {},
  modules: {},
};
