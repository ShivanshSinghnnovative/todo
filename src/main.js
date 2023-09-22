import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faTrash, faPen } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faTrash)
library.add(faPen)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
