export default {
  state: {
    brands: [
      {
        id: 1,
        brand: 'visa',
        regex: '^4[0-9]{12}(?:[0-9]{3})?$',
      },
      {
        id: 2,
        brand: 'mastercard',
        regex:
          '^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$',
      },
      {
        id: 3,
        brand: 'american_express',
        regex: '^3[47][0-9]{13}$',
      },
      {
        id: 4,
        brand: 'diners_club',
        regex: '^3(?:0[0-5]|[68][0-9])[0-9]{11}$',
      },
      {
        id: 5,
        brand: 'discover',
        regex: '^6(?:011|5[0-9]{2})[0-9]{12}$',
      },
      {
        id: 6,
        brand: 'jbc',
        regex: '^(?:2131|1800|35d{3})d{11}$',
      },
      {
        id: 7,
        brand: 'others',
        regex: '',
      },
    ],
  },
  mutations: {},
  actions: {
    // eslint-disable-next-line no-unused-vars
    getBrandByNumberCard: ({ commit, state }, numberCard) => {
      const brands = state.brands;

      brands.forEach(element => {
        console.log('test rergex element' + element.id, numberCard.match(element.regex));
      });
    },
  },
  getters: {
    getBrands: state => {
      return state.brands;
    },
  },
  modules: {},
};
