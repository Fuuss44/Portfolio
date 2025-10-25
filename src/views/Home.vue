<!-- Moyen de custom la barre de scroll ? -->
<template>
  <section class="home-hero">
    <div class="home-inner hero-grid">
      <figure class="hero-figure">
        <img src="/assets/paul-photo.jpg" alt="Photo" class="hero-photo" />
        <figcaption class="sr-only">Paul</figcaption>
      </figure>

      <div class="hero-content">
        <h1>Paul Orieux</h1>
        <p class="lead">From archaeology to analytics: different tools, same curiosity for understanding data.</p>

        <p class="contact-line">
          <span class="contact-link">paul.orieux@gmail.com • Nantes</span>
          <!-- <a href="tel:+33123456789" class="contact-link" aria-label="Appeler">hmm</a> -->
        </p>



        <p class="contact-social" aria-label="Social links">
          <span class="social-actions">
            <a class="icon" href="https://github.com/Fuuss44" target="_blank" rel="noopener" aria-label="Github">
              <img src="/icons/github.png" alt="GitHub" />
            </a>
            <a class="icon" href="https://www.linkedin.com/in/paul-orieux/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <img src="/icons/linkedin.png" alt="LinkedIn" />
            </a>
          </span>
        </p>

      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.home-hero {
  /* full-bleed background that spans the viewport width even if the page has a centered container */
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
  /* ici */
  background-image: url('/images/parchemin.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow-x: hidden; /* contre bleed */
}

.home-inner {
  /* Revoir ici pour le responsive */
  max-width: 1100px;
  padding: 2rem 1rem; /* hmmm */
  margin: 0 auto;
  text-align: center;
  color: var(--ink, #3A2A18);
  /* Tester ici */
  font-family: var(--font-display, 'Cormorant Garamond'), serif;
}


      /* Hero grid: image + content */
      .hero-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; align-items: center; }
  .hero-figure { margin: 0; display:flex; justify-content:center }
  .hero-photo { width: 300px; height: 300px; object-fit: cover; border-radius: 12px}
      .sr-only { position:absolute; left:-10000px; top:auto; width:1px; height:1px; overflow:hidden }
      .hero-content { text-align: left; color: var(--ink,#3A2A18); }
  .hero-content h1 { margin:0 0 0.5rem; font-family: 'Dancing Script', 'Patrick Hand', cursive; font-size:3.2rem; line-height:1 }
  .contact-line { margin: 0.75rem 0; color: var(--ink); font-size:1.20rem }
  .contact-link { color: var(--ink); text-decoration: none; font-weight: 700; font-size:1.5rem }
      .sep { margin: 0 0.5rem; color: rgba(0,0,0,0.35) }

  .btn { background: var(--digital-bg); color: #e4ddb8; padding: 0.95rem 1.2rem; border-radius:10px; text-decoration:none; font-weight:700; font-size:1rem; transition: transform .18s ease, box-shadow .18s ease, background-color .18s ease }
  .btn-outline { background: transparent; border:1px solid rgba(0,0,0,0.08); color: var(--ink); padding: 0.85rem 1.05rem; border-radius:10px; font-size:1rem; transition: transform .18s ease, box-shadow .18s ease, background-color .18s ease }

  /* Hover */
  .btn-outline:hover, .btn-outline:focus {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(95, 66, 21, 0.12);
    background-color: rgba(95, 66, 21, 0.12);
    border-color: rgba(95, 66, 21, 0.12);
    outline: none;
  }

      @media (min-width: 900px) {
        .hero-grid { grid-template-columns: 40% 60%; }
        .home-inner { padding: 4rem 1rem }
        .hero-photo { width: 480px; height: 480px; border-radius: 16px }
        .hero-content h1 { font-size:3.8rem }
        .lead { font-size: 2rem }
      }
.lead { color:var(--ink,#3A2A18); max-width:720px; margin:1rem auto; }

      @media (max-width: 900px) {
        /* mieux pour l'aspect responsive */
        .lead { font-size: 1.4rem; }
      }

/* J'ai changé les boutons pour des icons, c'est mieux pour le user je pense + transparence pour l'effet cliquable ? */
.contact-social { margin-top: 0.5rem; display:block }
.contact-social .social-actions { display:flex; gap:0.6rem; align-items:center }
.contact-social .icon { display:inline-flex; width:56px; height:56px; padding:10px; border-radius:10px; background: rgba(0,0,0,0.04); align-items:center; justify-content:center; transition: transform .12s ease, background .12s ease }
.contact-social .icon img { width:32px; height:32px; object-fit:contain; display:block }
.contact-social .icon:hover { transform: translateY(-2px); background: rgba(0,0,0,0.06) }
.contact-social .icon:focus { outline:2px solid rgba(0,0,0,0.08); outline-offset:2px }
</style>