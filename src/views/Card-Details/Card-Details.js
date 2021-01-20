import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      id: +this.$route.params.id,
      card: {},
      brands: [],
      categories: [],
      handleErrors: {
        name: {
          valid: false,
          required: false,
          minLength: false,
          showStatus: false,
          msg: '',
        },
        image: {
          valid: false,
          required: false,
          showStatus: false,
          msg: '',
        },
        brand: {
          valid: false,
          required: false,
          showStatus: false,
          msg: '',
        },
        category: {
          valid: false,
          required: false,
          showStatus: false,
          msg: '',
        },
      },
      handleImage: null,
    };
  },
  created() {
    this.setCard();

    if (this.id) this.checkForm();
    this.brands = this.brands$;
    this.categories = this.categories$;
  },
  computed: {
    ...mapGetters({
      getCard: 'getCardById',
      brands$: 'getBrands',
      categories$: 'getCategories',
    }),
  },
  methods: {
    ...mapActions({
      newCard: 'createNewCard',
    }),
    setCard() {
      if (this.id) {
        this.card = this.getCard(this.id);
      } else {
        this.card = this.newCard();
      }

      console.log(this.card);
    },
    // Form Handles
    checkForm() {
      Object.keys(this.card)
        .filter(
          key => key !== 'id' && key !== 'slug' && key !== 'creditCardLimit' && key !== 'feeAmount'
        )
        .forEach(key => {
          console.log('key', key);
          this.checkInput(key, key.charAt(0).toUpperCase() + key.slice(1));
        });
    },
    checkInput(input, field, event) {
      let valid = true;
      console.log('input', input);
      console.log('value to verify', this.card[input]);

      // Name validate
      switch (input) {
        case 'name':
          {
            // Required
            if (!this.card.name) {
              valid = false;
              this.handleErrors.name.required = true;
            } else {
              this.handleErrors.name.required = false;
            }

            if (this.card.name.length > 80) {
              valid = false;
              this.handleErrors.name.minLength = true;
            } else {
              this.handleErrors.name.minLength = false;
            }

            this.handleErrors.name.valid = valid;
            this.handleErrors.name.msg = valid
              ? 'Name is valid'
              : this.handleErrors.name.required
              ? 'Name is required!'
              : 'Name cannot exceed 80 characters';
            this.handleErrors.name.showStatus = true;
          }

          break;

        case 'image':
          {
            console.log('image log', event);
            let file;
            if (event) {
              file = event.target.files[0];
            }

            if (file || this.card.image) {
              this.handleErrors.image.required = false;
              if (file) this.card.image = file.name;
            } else {
              valid = false;
              this.handleErrors.image.required = true;
            }

            this.handleErrors.image.valid = valid;
            this.handleErrors.image.msg = valid ? 'Image is valid' : 'Image is required!';
            this.handleErrors.image.showStatus = true;
          }

          break;

        default:
          {
            console.log('Default!', input);
            if (!this.card[input]) {
              valid = false;
              this.handleErrors[input].required = false;
            } else {
              this.handleErrors[input].required = true;
            }
            this.handleErrors[input].msg = valid ? `${field} is valid` : `${field} is required!`;
            this.handleErrors[input].valid = valid;
            this.handleErrors[input].showStatus = true;
          }
          break;
      }

      console.log(`my handle's error`, this.handleErrors);
    },
  },
};
