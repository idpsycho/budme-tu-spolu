import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        'campaignData': [],
        'acceptedCards': [],
        'declinedCards': [],
        'doneCategories': []
    },
    actions: {
        setCampaignData({ commit }, value) {
            commit('SET_CAMPAIGN_DATA', value)
        },
        addAcceptedCard({ commit }, value) {
            commit('PUSH_ACCEPTED_CARD', value)
        },
        addDeclinedCard({ commit }, value) {
            commit('PUSH_DECLINED_CARD', value)
        },
        addDoneCategory({ commit }, value) {
            commit('PUSH_DONE_CATEGORY', value)
        }
    },
    mutations: {
        SET_CAMPAIGN_DATA(state, value) {
            state.campaignData = value
        },
        PUSH_ACCEPTED_CARD(state, value) {
            state.acceptedCards.push(value)
        },
        PUSH_DECLINED_CARD(state, value) {
            state.declinedCards.push(value)
        },
        PUSH_DONE_CATEGORY(state, value) {
            state.doneCategories.push(value)
        }
    },
    getters: {
        getCategories: state => {
            let x = []
            for (let i = 0; i <= state.campaignData.data.cards.length - 1; i++) {
                if (!x.includes(state.campaignData.data.cards[i].category.id)) {
                    x.push(state.campaignData.data.cards[i].category)
                }
            }

            return Array.from(new Set(x.map(a => a.id)))
                        .map(id => {
                            return x.find(a => a.id === id)
                        });
        },
        //ToDo: Spravit si cardsByCategory - Done
        getCardsByCategory: state => id => {
            return state.campaignData.data.cards.filter(e => e.category.id == id)
        }
    }
})