import Vuex from 'vuex'
import axios from 'axios'


export default new Vuex.Store({
    state: {
        categories: []
    },
    mutations: {
        categories_loaded(state, categories) {
            state.categories = categories
        }
    },
    actions: {
        async loadCategories({ commit }) {
            try {
                const { data: {data: {cards}} } = await axios.get('https://budme-tu-spolu-admin.hybridlab.dev/api/v1/campaign/tag/BEENTHERETOGETHER')
                const categories = []
                let addedCategoryNames = []
                cards.forEach(card => {
                    if (!addedCategoryNames.includes(card.category.name)) {
                        categories.push(card.category)
                        addedCategoryNames.push(card.category.name)
                    }
                })
                commit('categories_loaded', categories)
                
            } catch (error) {
                console.error(error);
            }
        }
    },
})