<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>© {{ new Date().getFullYear() }} Paul Orieux</div>
      <div class="footer-links">
        
  <!-- Lien de téléchargement vers le PDF placé dans public/assets -->
  <a class="footer-cv" href="/assets/Paul Orieux - CV 10_2025.pdf" download="Paul_Orieux_Cv.pdf" type="application/pdf" rel="noopener">Download CV (PDF)</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.site-footer {
  background: var(--parchment, #EFE1C8);
  /* tester ici */
  border-top: 3px solid rgba(0,0,0,0.02);
  padding:1rem;
  color:var(--ink,#3A2A18);
}
.footer-inner { display:flex; justify-content:space-between; align-items:center; max-width:1280px; margin:0 auto; padding:0 1.25rem; }
.footer-links .footer-cv { color: var(--ink, #3A2A18); text-decoration: none; font-weight: 700; padding: 0.35rem 0.6rem; border-radius: 8px; transition: transform .14s ease, box-shadow .14s ease, background-color .14s ease }
.footer-links .footer-cv:hover, .footer-links .footer-cv:focus { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(47,71,82,0.06); background-color: rgba(47,71,82,0.03); outline: none }
</style>