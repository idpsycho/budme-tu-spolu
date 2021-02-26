// import axios from 'axios'
import shuffle from 'lodash.shuffle'

export default {
    namespaced: true,
    state: {
        shuffledCards: []
    },
    mutations: {
        cardsShuffled(state, { cards, categoryId }) {
            const categoryCards = cards.filter(card => card.category.id == categoryId)
            state.shuffledCards = shuffle(categoryCards)                    
        }
    },
    actions: {
        shuffleCardsFromCategory({ commit, rootState }, categoryId) {
            console.log(rootState.offline);
            commit('cardsShuffled', {cards: rootState.offline.cards, categoryId: categoryId})
        }
        
    }
}