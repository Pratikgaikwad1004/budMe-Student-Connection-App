import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
        messages: [],
        contacts: [],
        cards: [],
        selectedCard: null,
        // initialize groups array
        groups: [],

        groupMessages: [],

        unreadNotifications: 0,
        notifications: [],

        user: null
    }
},
mutations: {
    setUser (state, user) {
        state.user = user
    },
    addCard(state, card) {
        state.cards.push(card);
      },
      removeCard(state, id) {
        state.cards = state.cards.filter((card) => card.id !== id);
      },
      setSelectedCard(state, card) {
        state.selectedCard = card;
      },

    setNotifications (state, notifications) {
        state.notifications = notifications
    },

    setUnreadNotifications (state, unreadNotifications) {
        state.unreadNotifications = unreadNotifications
    },

    // set the groups value
    setGroups (state, newGroups) {
        state.groups = newGroups
    },

    appendGroupMessage (state, newMessage) {
        state.groupMessages.push(newMessage)
    },

    appendMessage (state, newMessage) {
        state.messages.push(newMessage)
    },

    prependMessage (state, newMessage) {
        state.messages.unshift(newMessage)
    },

    prependGroupMessage (state, newMessage) {
        state.groupMessages.unshift(newMessage)
    },

    setGroupMessages (state, newMessages) {
        state.groupMessages = newMessages
    },

    setMessages (state, newMessages) {
        state.messages = newMessages
    },

    setContacts (state, newContacts) {
        state.contacts = newContacts
    }
},

getters: {
    getUser (state) {
        return state.user
    },
    
    getGroupMessages (state) {
        return state.groupMessages
    },

    getNotifications (state) {
        return state.notifications
    },

    getUnreadNotifications (state) {
        return state.unreadNotifications
    },

    // get the state groups
    getGroups (state) {
        return state.groups
    },

    getMessages (state) {
        return state.messages
    },

    getContacts (state) {
        return state.contacts
    }
},
actions: {
    addCard({ commit }, card) {
        commit("addCard", card);
      },
      removeCard({ commit }, id) {
        commit("removeCard", id);
      },
      selectCard({ commit }, card) {
        commit("setSelectedCard", card);
      },
  },
  modules: {},
})
