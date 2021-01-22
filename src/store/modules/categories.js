import axios from 'axios';

const state = {
    categories: []
};

const getters = {
    allCategories: (state) => state.categories
};

const actions = {
    async getCategories({commit}) {
        let x = [];
        const response = await axios.get('https://budme-tu-spolu-admin.hybridlab.dev/api/v1/campaign/tag/BEENTHERETOGETHER')
        .then(
            response => {response.data.cards.forEach(element => {
            if (!x.includes(element.category.id)) {
                x.push(element.category)
            }
            }),
            this.state.categories =
            Array.from(new Set(x.map(a => a.id)))
                .map(id => {
                return x.find(a => a.id=== id);
            })
            }
        )
        commit('setCategories', response.data)
    }
    
};
        


const mutations = {
    setCategories: (state, categories) => (state.categories = categories)
};

export default{
    state,
    getters,
    actions,
    mutations,
};