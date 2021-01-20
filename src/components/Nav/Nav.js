export default {
  data() {
    return {
      title: 'NavText!',
    };
  },
  props: {},
  computed: {},
  methods: {
    setTitle(nameRoute) {
      switch (nameRoute) {
        case 'Home':
          this.title = 'Admin - Home';
          break;
        case 'Card-Details':
          this.title = 'Admin - Creating Card';
          break;
        case 'Card-Details-Prop':
          this.title = 'Admin - Updating Card';
          break;
      }
    },
  },
  created() {
    console.log('atual route', this.$route);
    this.setTitle(this.$route.name);
  },
  watch: {
    $route(to) {
      this.setTitle(to.name);
    },
  },
};
