export default {
  state: {
    credentials: [
      {
        id: 1,
        username: 'admin',
        password: 'admin',
      },
    ],
    authenticated: false,
  },
  mutations: {
    LOGIN: state => {
      state.authenticated = true;
    },
    LOGOUT: state => {
      state.authenticated = false;
    },
  },
  actions: {
    populateAuthState: ({ commit }) => {
      console.log('POPULATE Auth State...');
      const isAuthenticated = JSON.parse(window.localStorage.getItem('isAuthenticated'));

      if (!isAuthenticated) {
        commit('LOGOUT');
        window.localStorage.setItem('isAuthenticated', false);
      } else {
        commit('LOGIN');
      }
    },
    checkLogin: ({ state, commit }, user) => {
      try {
        console.log('CHECKING LOGIN...', user);
        const userIndex = state.credentials.findIndex(
          credential => credential.username === user.username
        );

        console.log('USER?', userIndex);
        if (userIndex < 0) throw { msg: 'User not found' };

        console.log('CRERDENTIALS?', state.credentials);
        const credential = state.credentials[userIndex];

        console.log('CRERDENTIAL?', credential);
        if (credential.password !== user.password)
          throw { msg: 'Username/password incorrect, please verify' };

        console.log('ALL OK!');
        window.localStorage.setItem('isAuthenticated', true);
        commit('LOGIN');
        return { status: true, msg: 'Login Sucessfull!' };
      } catch (error) {
        console.log('Error throw', error);
        window.localStorage.setItem('isAuthenticated', false);
        commit('LOGOUT', null);
        return { ...error, status: false };
      }
    },
  },
  getters: {
    isAuthenticated: state => {
      return JSON.parse(state.authenticated);
    },
  },
  modules: {},
};
