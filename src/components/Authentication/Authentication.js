import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['checkLogin']),
    login(event) {
      event.preventDefault();

      this.checkLogin({ username: this.username, password: this.password }).then(result => {
        if (result.status) console.log('LOGIN SUCCESS', result);
        else console.log('LOGIN FAILED', result);
      });

      return;
    },
  },
};
