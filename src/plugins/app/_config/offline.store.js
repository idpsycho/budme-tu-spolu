import axios from 'axios'

export default {
    namespaced: true,

    state: {
        categories: [],
        cards: []
    },
    mutations: {
        categoriesLoaded(state, categories) {
            state.categories = categories
        },
        cardsLoaded(state, cards) {
            state.cards = cards
        }
        // loadedCardsByCategoryId(state, categoryId) {
        //     console.log(state.categories);
        //     state.cards = state.categories.filter(category => category.id == categoryId).cards
        // }
    },
    actions: {
        async loadCategories({ commit }) {
            const categories = []
            let cardsData = []

            //Should try to load from server if it fails it should load from storage
            try {
                const { data: { data: { cards } } } = await axios.get('https://budme-tu-spolu-admin.hybridlab.dev/api/v1/campaign/tag/BEENTHERETOGETHER')
                cardsData = cards
                let addedCategoryNames = []
                cards.forEach(category => {
                    if (!addedCategoryNames.includes(category.category.name)) {
                        categories.push(category.category)
                        addedCategoryNames.push(category.category.name)
                    }
                })
                
            } catch (error) {
                //Load from storage here
                //Maybe add an offline flag into state?
                console.error(error);
            }
            commit('categoriesLoaded', categories)
            commit('cardsLoaded', cardsData)
        }
    }
}