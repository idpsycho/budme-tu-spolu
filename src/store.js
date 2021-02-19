import Vuex from 'vuex'

import offline from '@/plugins/app/_config/offline.store.js'
import game from '@/plugins/app/_config/game.store.js'

export default new Vuex.Store({
    modules: {
        offline,
        game
    }
})