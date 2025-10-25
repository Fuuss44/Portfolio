<script setup>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <div id="app" class="site-root">
    <SiteHeader />
    <main class="site-main">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<!-- Retirer le padding : padding:2rem 1rem; -->
<style>
.site-root { display:flex; min-height:100vh; flex-direction:column; background:var(--parchment,#EFE1C8); }
.site-main { flex:1 0 auto; max-width:1280px; margin:0 auto; width:100%; }
</style>

<!-- https://animejs.com/ -->