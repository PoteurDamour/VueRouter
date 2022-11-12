import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import HelloWorld from '../src/components/HelloWorld.vue'

const Detail = { template:'<h1>Detalles de mi App</h1>'}

const routes = [{
    path:'/', component: HelloWorld,
},{
    path:'/detail', component: Detail,
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
