import { mapActions, mapGetters } from 'vuex';
import Swal from 'sweetalert2';

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
    this.cards = this.getAllCards.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    console.log('Cards', this.cards);
  },
  methods: {
    ...mapActions({
      delete$: 'deleteCard',
    }),
    goEdit(id) {
      console.log('Edit', id);
      this.$router.push(`/card-details/${id}`);
    },
    goNew() {
      console.log('New');
      this.$router.push(`/card-details`);
    },
    deleteCard(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(result => {
        if (result.isConfirmed) {
          console.log('Deleted!', id);
          this.delete$(id);
        }
      });
    },
  },
};
