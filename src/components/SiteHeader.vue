<template>
  <header class="site-header">
    <div class="container header-inner">
  <a class="brand" href="/" aria-label="Home">
        <!-- optional logo -->
        <!-- <img src="/assets/logo.svg" alt="Logo" class="logo" /> -->
        <span class="brand-name">Paul Orieux</span>
      </a>

  <button class="nav-toggle" aria-expanded="false" aria-controls="primary-navigation" aria-label="Open menu">
        <span class="burger-box"><span class="burger-inner"></span></span>
      </button>

      <nav id="primary-navigation" class="site-nav" aria-label="Primary navigation" data-open="false">
        <router-link to="/" exact>Home</router-link>
        <router-link to="/studies">Studies</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const navOpen = ref(false)

function setNavAttributes(open) {
  const btn = document.querySelector('.nav-toggle')
  const nav = document.getElementById('primary-navigation')
  if (btn) btn.setAttribute('aria-expanded', String(open))
  if (nav) nav.setAttribute('data-open', String(open))
}

function toggleNav() {
  navOpen.value = !navOpen.value
  setNavAttributes(navOpen.value)
}

function onToggleClick(e) {
  e.stopPropagation()
  toggleNav()
}

function onDocClick() {
  if (navOpen.value) {
    navOpen.value = false
    setNavAttributes(false)
  }
}

onMounted(() => {
  const btn = document.querySelector('.nav-toggle')
  if (btn) btn.addEventListener('click', onToggleClick)
  document.addEventListener('click', onDocClick)
})

onBeforeUnmount(() => {
  const btn = document.querySelector('.nav-toggle')
  if (btn) btn.removeEventListener('click', onToggleClick)
  document.removeEventListener('click', onDocClick)
})
</script>

<style scoped>
.site-header {
  background: var(--parchment, #EFE1C8);
  border-bottom: 1px solid rgba(0,0,0,0.02);
  position: relative;
  z-index: 50;
}
.header-inner {
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:1rem 1.25rem;
}
.brand { display:flex; align-items:center; gap:.5rem; text-decoration:none; color:inherit; }
.logo { width:40px; height:auto; }
.site-nav { display:flex; align-items:center }
.site-nav a { margin-left:1rem; text-decoration:none; color:var(--ink,#3A2A18); padding:0.35rem 0.5rem; border-radius:6px; transition: transform .16s ease, box-shadow .16s ease, background-color .16s ease; }

/* Hover */
.site-nav a:hover,
.site-nav a:focus {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(95, 66, 21, 0.12);
  background-color: rgba(95, 66, 21, 0.12);
  outline: none;
}

/* Visible focus for keyboard users */
.site-nav a:focus-visible {
  box-shadow: 0 10px 26px rgba(95, 66, 21, 0.12), 0 0 0 3px rgba(228,221,184,0.18);
}

/* Nav toggle (mobile) */
.nav-toggle { display:none; align-items:center; justify-content:center; background:transparent; border:0; padding:0.25rem; cursor:pointer }
.burger-box { width:28px; height:20px; display:inline-block; position:relative }
.burger-inner, .burger-inner::before, .burger-inner::after { display:block; background:var(--ink,#3A2A18); height:2px; border-radius:2px; position:absolute; left:0; right:0 }
.burger-inner { top:50%; transform:translateY(-50%) }
.burger-inner::before { content:''; top:-8px }
.burger-inner::after { content:''; top:8px }

/* Mobile styles: hide nav by default and show toggle */
@media (max-width: 767px) {
  .nav-toggle { display:flex }
  .site-nav { position:absolute; right:1rem; top:100%; background: var(--parchment, #EFE1C8); border:1px solid rgba(0,0,0,0.04); padding:0.75rem 1rem; border-radius:8px; display:flex; flex-direction:column; gap:0.5rem; transform-origin: top right; box-shadow: 0 8px 20px rgba(0,0,0,0.06); opacity:0; pointer-events:none; transform: translateY(-6px) scale(.98); transition: opacity .18s ease, transform .18s ease }
  .site-nav[data-open="true"] { opacity:1; pointer-events:auto; transform: translateY(6px) scale(1) }
  .site-nav a { margin-left:0 }
}
</style>