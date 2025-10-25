<template>
  <main class="page section-digital">
    <div class="container">
      <header class="page-header">
        <h1>About</h1>
        <p class="lead">Who I am - my story & my background.</p>
      </header>

      <section class="about-grid about">
        <div class="about-bio">
          <p>I began with primary studies in archaeology, complemented by history and art history courses during my bachelor's degree. During that time I completed several field internships where I learned to adapt working methods depending on the task and context - fieldwork, laboratory, or analysis behind a screen.</p>

          <p>Archaeology is an interdisciplinary field that draws on many sciences, such as entomology, ceramic studies (ceramology), archaeozoology, palynology, metallurgy, and petrology. Many others exist, but these were my main interests during my student years.</p>

          <p>I also studied certain aspects of law, notably cultural heritage law and intellectual property (including concepts related to GDPR).</p>

          <p>I worked at Le Chronographe museum (Rezé) as a front-desk attendant and heritage mediator. This experience helped me strengthen interpersonal and organizational skills: public speaking, teamwork, and adapting to varied situations.</p>

          <p>In archaeology I have always been interested in the lifecycle of data, both physical and digital. This motivated me to dive deeper into exploring, preparing and exploiting datasets to create useful visualizations and analyses.</p>

          <p>I used to dig into the past, now I dig into data.</p>

          <h3>Interests</h3>
          <ul class="passions-list">
            <li>Theatre</li>
            <li>Guitar</li>
            <li>New technologies</li>
            <li>Heritage discovery</li>
            <li>Historical reenactment & conservation</li>
          </ul>
        </div>

      </section>
    </div>
  </main>
</template>

<script setup>

</script>

<style scoped>
.section-digital { background: var(--digital-bg); color: #e4ddb8; padding: 3rem 0 }

.about-bio { width: 100%; text-align: left }
.about-stats { display:none }
.lead { margin:0 0 1rem; color: rgba(228,221,184,0.95) }

.about-bio p { line-height:1.6; margin:0 0 1rem }
.about-bio h3 { margin-top: 4rem; margin-bottom: 0.5rem } /* + ?*/
.passions-lead { background: rgba(255,255,255,0.015); padding:0.6rem; border-radius:6px; color: rgba(228,221,184,0.95) }
.passions-list { list-style: disc; margin:0.5rem 0 1rem 1.25rem; color: rgba(228,221,184,0.95); line-height:1.6 }
.passions-list li { margin-bottom:0.4rem }


.about-stats ul { list-style: none; padding: 0; margin: 0.5rem 0 0; text-align: left }
.about-stats h4 { margin: 0 0 0.5rem }
.about-stats ul li { margin: 0.45rem 0 }

@media (max-width: 767px) { .about-stats ul { display: block; text-align: left } }

/* Hmmok */
.about { padding:4rem 1rem;}
</style>