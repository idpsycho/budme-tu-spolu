// import axios from 'axios'
import shuffle from 'lodash.shuffle'

export default {
    namespaced: true,
    state: {
        shuffledCards: [],
        skippedCards: []
    },
    mutations: {
        cardsShuffled(state, { cards, categoryId }) {
            const categoryCards = cards.filter(card => card.category.id == categoryId)
            state.shuffledCards = shuffle(categoryCards)                    
        },
        cardSkipped(state, card) {
            state.skippedCards.push(card)
        }
    },
    actions: {
        shuffleCardsFromCategory({ commit, rootState }, categoryId) {
            commit('cardsShuffled', {cards: rootState.offline.cards, categoryId: categoryId})
        },
        
    }
}