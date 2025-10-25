<template>
  <main class="page section-digital">
    <div class="container">
      <header class="page-header">
        <h1>Contact</h1>
        <p class="lead">Want to get in touch? Send a quick message or use the direct LinkedIn / email links.</p>
      </header>

      <section class="contact-area">
        <form class="contact-form" @submit.prevent="onSubmit">
          <label>
            Name
            <input v-model="form.name" type="text" required />
          </label>
          <label>
            Email
            <input v-model="form.email" type="email" required />
          </label>
          <label>
            Message
            <textarea v-model="form.message" rows="6" required></textarea>
          </label>
          <div class="actions">
            <button class="btn" type="submit">Send</button>
            <!-- <a class="btn ghost" :href="mailtoLink">Send by email</a> -->
          </div>
        </form>

        <aside class="contact-info">
          <h2>Other ways</h2>
          <p>Email address: paul.orieux@gmail.com</p>
          <!-- <p>Phone: <a href="tel:+33123456789">+33 1 23 45 67 89</a></p> non en fait -->
          <p>LinkedIn: <a class="linkedin-link" href="https://www.linkedin.com/in/paul-orieux/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </aside>
      </section>

      <!-- Toast, bon appetit -->
      <div v-if="toast.show" class="site-toast" role="status" aria-live="polite">
        <div class="site-toast__inner">
          <p class="site-toast__message">{{ toast.message }}</p>
          <button class="site-toast__close" @click="toast.show = false" aria-label="Close">✕</button>
        </div>
      </div>

    </div>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
const form = reactive({ name: '', email: '', message: '' })
// See here - placeholder for future API / Netlify Forms integration
// const mailtoLink = `mailto:paul@example.com?subject=${encodeURIComponent('Contact portfolio')}`

// Toast state
const toast = ref({ show: false, message: '' })

function showToast(message, ms = 8000) {
  toast.value.message = message
  toast.value.show = true
  
  setTimeout(() => { toast.value.show = false }, ms)
}

function onSubmit() {
  // Here you would call the API or Netlify forms endpoint // + clearing field
  showToast('Thanks ' + form.name + '!  your message has been received. This is a demo; please contact me directly by email or on LinkedIn. Thank you!')
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
.section-digital { background: var(--digital-bg); color: #e4ddb8; padding: 3rem 0 }
/* Deux prochaines ligne pour fix le problème, voir à l'usure */
.page.section-digital { min-height: 100vh; box-sizing: border-box; display: flex; flex-direction: column }
.page.section-digital > .container { flex: 1 }
.contact-area { display:grid; grid-template-columns: 1fr 320px; gap:1.25rem }
.contact-form { background: rgba(255,255,255,0.02); padding:1rem; border-radius:8px; border:1px solid rgba(255,255,255,0.04) }
.contact-form label { display:block; margin-bottom:0.75rem }
.contact-form input, .contact-form textarea { width:100%; padding:0.5rem; border-radius:6px; border:1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.02); color: #e4ddb8 }
.actions { margin-top:0.5rem; display:flex; gap:0.5rem }
.btn { background: var(--accent); color: #072629; padding:0.4rem 0.7rem; border-radius:6px; text-decoration:none }
.btn.ghost { background: transparent; border:1px solid rgba(255,255,255,0.08); color: #e4ddb8 }
.contact-info { background: rgba(255,255,255,0.02); padding:1rem; border-radius:8px; border:1px solid rgba(255,255,255,0.04) }

/* Hmmm */
.linkedin-link { color: #e4ddb8; text-decoration: underline }
.linkedin-link:visited { color: #e4ddb8 }

@media (max-width: 900px) { .contact-area { grid-template-columns: 1fr } }

/* Toast */
.site-toast { position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1000; width: min(92%, 640px); display:flex; justify-content:center }
.site-toast__inner { background: var(--accent); color: #072629; padding: 0.9rem 1.1rem; border-radius: 10px; box-shadow: 0 18px 48px rgba(0,0,0,0.6); display:flex; align-items:center; gap:0.75rem; width:100%; }
.site-toast__message { margin:0; color: #072629; font-weight:600; text-align:center }
.site-toast__close { background: transparent; border: none; color: rgba(7,38,41,0.85); font-size: 1.05rem; cursor:pointer; padding:0.2rem }
.site-toast__close:focus { outline: 2px solid rgba(228,221,184,0.6); border-radius:6px }
</style>
