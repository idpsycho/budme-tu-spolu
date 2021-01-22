
//import Vue from 'vue'
import categories from './modules/todos'
import todos from './modules/todos'


import { createStore } from 'vuex'
// import { IonicVuex } from 'vuex'
// import { IonicVue } from '@ionic/vue'


//Loading vuex
//Vue.use(Vuex)

// const store = createStore({ - creating store using the imported ionic createStore function (too little info to continue)
//     state(){
//         return {};
//     }
// });

const store = createStore({
    modules: {
        categories,
        todos,
        
    }
});

export default store