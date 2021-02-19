// import axios from 'axios'
import shuffle from 'lodash.shuffle'

export default {
    namespaced: true,
    state: {
        shuffledCards: []
    },
    mutations: {
        cardsShuffled(state, rootState) {
            console.log(rootState);
            state.shuffledCards = shuffle(rootState.cards)                    
        }
    },
    actions: {
        shuffleCards({commit, rootState}) {
            console.log(rootState.offline);
        }
        
    }
}