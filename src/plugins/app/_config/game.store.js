// import axios from 'axios'
import shuffle from 'lodash.shuffle'

export default {
    namespaced: true,
    state: {
        shuffledCards: [],
        skippedCards: [],
        finishedCategories: JSON.parse(localStorage.getItem('finishedCategories')) || []
    },
    mutations: {
        cardsShuffled(state, { cards, categoryId }) {
            const categoryCards = cards.filter(card => card.category.id == categoryId)
            state.shuffledCards = shuffle(categoryCards)                    
        },
        cardSkipped(state, card) {
            state.skippedCards.push(card)
        },
        skippedCardsPlayed(state) {
            state.skippedCards = []
        },
        categoryFinished(state, categoryId) {
            state.finishedCategories.push(categoryId)
            localStorage.setItem('finishedCategories', JSON.stringify(state.finishedCategories))
        },
        allCategoriesFinished(state) {
            state.finishedCategories = []
            localStorage.removeItem('finishedCategories')
        }
    },
    actions: {
        shuffleCardsFromCategory({ commit, rootState }, categoryId) {
            commit('cardsShuffled', {cards: rootState.offline.cards, categoryId: categoryId})
        }
        
    }
}