import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)

const app = createApp(App)

app.use(router).component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
