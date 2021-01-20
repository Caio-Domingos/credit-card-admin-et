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
};
