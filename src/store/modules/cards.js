/* eslint-disable no-unused-vars */
export default {
  state: {
    cards: [
      {
        id: 1,
        name: 'Teste Name',
        slug: 'teste_name',
        image: 'img',
        brand: 1,
        category: 1,
        creditCardLimit: '1000.00',
        feeAmount: '500.00',
      },
      {
        id: 2,
        name: 'Teste Name',
        slug: 'teste_name',
        image: 'img',
        brand: 2,
        category: 2,
        creditCardLimit: '1000.00',
        feeAmount: '500.00',
      },
      {
        id: 3,
        name: 'Teste Name',
        slug: 'teste_name',
        image: 'img',
        brand: 3,
        category: 3,
        creditCardLimit: '1000.00',
        feeAmount: '500.00',
      },
      {
        id: 4,
        name: 'Teste Name',
        slug: 'teste_name',
        image: 'img',
        brand: 4,
        category: 4,
        creditCardLimit: '1000.00',
        feeAmount: '500.00',
      },
      {
        id: 5,
        name: 'Teste Name',
        slug: 'teste_name',
        image: 'img',
        brand: 5,
        category: 5,
        creditCardLimit: '1000.00',
        feeAmount: '500.00',
      },
      {
        id: 6,
        name: 'Teste Name',
        slug: 'teste_name',
        image: 'img',
        brand: 6,
        category: 6,
        creditCardLimit: '1000.00',
        feeAmount: '500.00',
      },
    ],
  },
  mutations: {
    SET_CARD: (state, payload) => {
      state.cards.push(payload);
    },
    UPDATE_CARD: (state, payload) => {
      state.cards[payload.index] = payload.data;
    },
    REMOVE_CARD: (state, index) => {
      state.cards.splice(index, 1);
    },
  },
  actions: {
    setCard: ({ commit }, card) => {},
    updateCard: ({ commit }, card) => {},
    deleteCard: ({ commit }, cardIndex) => {},
    createNewCard: () => {
      return {
        id: null,
        name: '',
        slug: '',
        image: '',
        brand: 0,
        category: 0,
        creditCardLimit: '',
        feeAmount: '',
      };
    },
  },
  getters: {
    getAllCards: state => {
      return state.cards;
    },
    getCardById: state => id => {
      console.log('id', id);
      console.log('state cards', state.cards);
      return state.cards.find(card => card.id === id);
    },
  },
  modules: {},
};
