/* eslint-disable no-unused-vars */
export default {
  state: {
    cards: [],
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
  },
  getters: {
    getAllCards: state => {
      return state.cards;
    },
    getOneCard: (state, id) => {
      return state.cards.find(card => card.id === id);
    },
  },
  modules: {},
};
