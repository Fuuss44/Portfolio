import { createRouter, createWebHashHistory } from 'vue-router'
// J'ai laissé views comme dans le tuto sinon je changerai en pages comme dans l'autre projet
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Studies from '@/views/Studies.vue'

// Hmm, nom du pathing ?
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/studies', name: 'Studies', component: Studies },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router