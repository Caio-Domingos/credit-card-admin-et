<template>
  <div id="app">
    <Nav />
    <div class="content" v-if="isAuthenticated">
      <router-view />
    </div>
    <div class="content" v-else>
      <Authentication />
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import Nav from './components/Nav/Nav.vue';
  import Authentication from './components/Authentication/Authentication.vue';

  export default {
    data() {
      return {};
    },
    components: { Nav, Authentication },
    computed: {
      ...mapGetters(['isAuthenticated']),
    },
    methods: {
      ...mapActions(['populateCards', 'populateAuthState']),
    },
    created() {
      console.log('CREATING APP...');
      this.populateCards();
      this.populateAuthState();
    },
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  #app {
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    min-height: 100vh;

    .content {
      margin: 0 auto;
      max-width: 960px;
      padding: 8px;
    }
  }

  .t-capitalize {
    text-transform: capitalize;
  }
</style>
