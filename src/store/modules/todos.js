import axios from 'axios'
//import store from '..'
//import { defineAsyncComponent } from 'vue'

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async getCategories({commit}) {
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos') //https://budme-tu-spolu-admin.hybridlab.dev/api/v1/campaign/tag/BEENTHERETOGETHER - real response url
        commit('setTodos', response.data)
    }
}
//let x = []
        

//        console.log(response.data);
//     //   .then(
//     //     response => {response.data.cards.forEach(element => {
//     //       if (!x.includes(element.category.id)) {
//     //         x.push(element.category)
//     //       }
//     //     }),
//     //       this.state.categories =
//     //       Array.from(new Set(x.map(a => a.id)))
//     //         .map(id => {
//     //         return x.find(a => a.id=== id);
//     //       })
//     //     }
//     //   )
//     }

const mutations = {
    setTodos: (state, todos) => (state.todos = todos)
};

export default{
    state,
    getters,
    actions,
    mutations,
};