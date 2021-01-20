import { mapGetters } from 'vuex';
import Card from './../../components/Card/Card.vue';

export default {
  components: { Card },
  data() {
    return {
      cards: [],
    };
  },
  computed: {
    ...mapGetters({
      getAllCards: 'getAllCards',
    }),
  },
  created() {
    this.cards = this.getAllCards;
  },
  methods: {
    goEdit(id) {
      console.log('Edit', id);
      this.$router.push(`/card-details/${id}`);
    },
    goNew() {
      console.log('New');
      this.$router.push(`/card-details`);
    },
  },
};
