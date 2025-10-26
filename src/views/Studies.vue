<template>
  <div class="etudes-page" :class="{ revealed }" ref="rootEl">
  
    
    <!-- Section Archéologie + fix h1 -->
    <section class="archaeo section-parchment" aria-labelledby="archaeo-title">
      <div class="container archae-extras"> 
        <header class="archae-header">
          <h1 id="archaeo-title">Studies - Cultural Heritage</h1>
        </header>


                <div class="diplomas archae-diplomas">
    <h2>Degrees</h2>
          <div class="diploma-cards">
            <article class="diploma-card">
              <h4 class="diploma-title"><strong>MASTER - Archaeology, Sciences for Archaeology</strong></h4>
              <p class="diploma-date">2020-2022 - Nantes</p>
            </article>
            <article class="diploma-card">
              <h4 class="diploma-title"><strong>University Diploma - Art & Cultural Law</strong></h4>
              <p class="diploma-date">2022-2023 - Nantes</p>
              
            </article>
            <p></p>
          </div>
        </div>

        <h2 class="archae-title">Brief view of what I've learned</h2>
        <div class="learnings-grid">
          <div class="learning-card">
            <h4>Fieldwork & Excavations</h4>
            <p>Surveying techniques, stratigraphy, sampling and field documentation.</p>
          </div>
          <div class="learning-card">
            <h4>Materials Analysis</h4>
            <p>Microscopic observation and characterization of ceramics, organic and non-organic materials.</p>
          </div>
          <div class="learning-card">
            <h4>Spatial Mapping</h4>
            <p>Using GIS for spatial analysis and producing thematic maps.</p>
          </div>
          <div class="learning-card">
            <h4>Conservation & Archiving</h4>
            <p>Conservation practices, description and metadata for collections management.</p>
          </div>
        </div>

          <!-- Soft skills: render as chips for better wrapping on small screens -->
          <div class="softskills">
            <h3 class="visually-hidden">Soft skills</h3>
            <ul class="softskills-list">
              <li class="chip">Attentive observation</li>
              <li class="chip">Methodical rigor</li>
              <li class="chip">Communication & outreach</li>
              <li class="chip">Organization & time management</li>
            </ul>
          </div>


      </div>
    </section>

  <!-- Transition -->
  <section class="transition-reveal full-bleed" aria-hidden="true" ref="transitionEl">
      <div class="reveal-layer parch-layer" aria-hidden="true"></div>
      <div class="reveal-layer digital-layer" aria-hidden="true"></div>

      <!-- Mask -->
      <div class="reveal-mask" ref="mask" aria-hidden="true"></div>

    </section>

    <!-- Data + compétences -->
    <section class="data section-digital" aria-labelledby="data-title-data">
      <div class="container">
  
        <header class="it-header">
          <h1 id="it-title">Studies - IT</h1>
        </header>
        <div class="diplomas it-diplomas">
    <h2>IT Degrees</h2>
          <div class="diploma-cards">
            <article class="diploma-card">
              <h4 class="diploma-title"><strong>MASTER - Information Systems Architect</strong></h4>
              <p class="diploma-date">EPITECH - Nantes - 2025-2028</p>
              <p class="diploma-meta">Skills: RNCP 38114, NSF Code 326</p>
            </article>

            <article class="diploma-card">
              <h4 class="diploma-title"><strong>RNCP Level 6 - Data Analyst Title</strong></h4>
              <p class="diploma-date">Wild Code School - Nantes - 2024-2025</p>
              <p class="diploma-meta">Skills: RNCP 37429, NSF Code 326</p>
              <ul class="diploma-list">
                <li>Set up data collection pipelines;</li>
                <li>Process data according to goals;</li>
                <li>Model structured data and produce forecasts;</li>
                <li>Deliver a dashboard based on client requirements.</li>
              </ul>
            </article>
          </div>
        </div>
  <h2 id="data-title-data">Data Skills</h2>
        <div class="skills-grid">
          <details class="skill-card" role="group" aria-label="Data exploration">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/archaeology.png" alt="Archaeology icon" width="64" height="64" />
              </div>

              <h3 class="skill-title">Exploration</h3>
            </summary>
            <div class="skill-body">
              <p class="skill-label"><strong>Description</strong></p>
              <p class="skill-excerpt">Data processing and first visualization, cleaning, EDA and data preparation.</p>
              <p class="skill-label"><strong>Tools</strong></p>
              <p class="skill-tools-list">SQL · Python (NumPy, Pandas, YData-profiling) · Folium · Matplotlib</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="Modeling">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/predictive-models.png" alt="Predictive models icon" width="64" height="64" />
              </div>

              <h3 class="skill-title">Modeling</h3>
            </summary>
            <div class="skill-body">
              <p class="skill-label"><strong>Description</strong></p>
              <p class="skill-excerpt">Modeling structured data and building forecasts.</p>
              <p class="skill-label"><strong>Tools</strong></p>
              <p class="skill-tools-list">Feature engineering · Validation · Interpretation · scikit-learn</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="Machine Learning">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/classification.png" alt="Classification icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">Machine Learning</h3>
            </summary>
            <div class="skill-body">
              <p class="skill-label"><strong>Description</strong></p>
              <p class="skill-excerpt">Machine learning (regression, classification, NLP): training pipelines and validation.</p>
              <p class="skill-label"><strong>Tools</strong></p>
              <p class="skill-tools-list">scikit-learn · Pipelines</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="Visualization">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/visual-data.png" alt="Data visualization icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">Visualization</h3>
            </summary>
            <div class="skill-body">
              <p class="skill-label"><strong>Description</strong></p>
              <p class="skill-excerpt">Creating dashboards and interactive visualizations for data analysis.</p>
              <p class="skill-label"><strong>Tools</strong></p>
              <p class="skill-tools-list">Power BI · Streamlit · Plotly · Seaborn · Matplotlib</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="Databases">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/database.png" alt="Database icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">Databases</h3>
            </summary>
            <div class="skill-body">
              <p class="skill-label"><strong>Description</strong></p>
              <p class="skill-excerpt">Design and optimization of databases, ingestion and ETL pipelines.</p>
              <p class="skill-label"><strong>Tools</strong></p>
              <p class="skill-tools-list">SQL · MySQL · ORM (SQLAlchemy) · ETL</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="Governance">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/data.png" alt="Data governance icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">Governance</h3>
            </summary>
            <div class="skill-body">
              <p class="skill-label"><strong>Description</strong></p>
              <p class="skill-excerpt">Quality, traceability and ethical aspects related to data.</p>
              <p class="skill-label"><strong>Tools</strong></p>
              <p class="skill-tools-list">Intellectual property law · GDPR</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="Tools & Infrastructure">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/server.png" alt="Infrastructure icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">Tools & Infrastructure</h3>
            </summary>
            <div class="skill-body">
              <p class="skill-label"><strong>Description</strong></p>
              <p class="skill-excerpt">Orchestration and deployment of infrastructure for data pipelines.</p>
              <p class="skill-label"><strong>Tools</strong></p>
              <p class="skill-tools-list">AWS · DBT · MageAI</p>
            </div>
          </details>

        </div>
      </div>
    </section>
    
    <section class="data section-digital" aria-labelledby="data-title-dev">
      <div class="container">
  <h2 id="data-title-dev">Developer Skills</h2>
        <div class="skills-grid">
          <details class="skill-card" role="group" aria-label="Frontend">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/ux.png" alt="Frontend / UX icon" width="64" height="64" />
              </div>

              <h3 class="skill-title">Frontend</h3>
            </summary>
            <div class="skill-body">
              <p class="skill-label"><strong>Description</strong></p>
              <p class="skill-excerpt">HTML, CSS, Vue and accessibility (simple interface, accessible colors).</p>
              <p class="skill-label"><strong>Tools</strong></p>
              <p class="skill-tools-list">Vite · Pinia · Vue Router · SCSS</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="Backend">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/programming.png" alt="Bash and Linux icon" width="64" height="64" />
              </div>
              
              <h3 class="skill-title">Backend</h3>
            </summary>
            <div class="skill-body">
              <p class="skill-label"><strong>Description</strong></p>
              <p class="skill-excerpt">Connecting the backend to the frontend with APIs and databases.</p>
              <p class="skill-label"><strong>Tools</strong></p>
              <p class="skill-tools-list">Node.js · Express · JWT · ORM (SQLAlchemy)</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="Git & version control">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/github.png" alt="Git and GitHub icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">Git & GitHub</h3>
            </summary>
            <div class="skill-body">
              <p class="skill-label"><strong>Description</strong></p>
              <p class="skill-excerpt">Branching, workflows, pull requests and GitHub Actions.</p>
              <p class="skill-label"><strong>Tools</strong></p>
              <p class="skill-tools-list">Github</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="Bash Linux">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/window.png" alt="Window / tooling icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">Bash / Linux</h3>
            </summary>
            <div class="skill-body">
              <p class="skill-label"><strong>Description</strong></p>
              <p class="skill-excerpt">Command line, shell scripting, server management and automation.</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="Docker CI JWT">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/docker.png" alt="Docker icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">Docker & more </h3>
            </summary>
            <div class="skill-body">
              <p class="skill-label"><strong>Description</strong></p>
              <p class="skill-excerpt">Docker containers, GitHub Actions / CI pipelines · Auth (JWT / OAuth2).</p>
              <!-- <p class="skill-label"><strong>Tools</strong></p>
              <p class="skill-tools-list">Mettre à jour quand xp</p> -->
            </div>
          </details>

          <!-- <details class="skill-card" role="group" aria-label="DevOps">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="8" fill="rgba(255,255,255,0.04)"/>
                  <path d="M20 40 H44" stroke="rgba(255,255,255,0.18)" stroke-width="2"/>
                </svg>
              </div>
              <h3 class="skill-title">DevOps</h3>
            </summary>
            <div class="skill-body">
              <p class="skill-excerpt">CI/CD, containers, monitoring.</p>
            </div>
          </details> -->

          <!-- Language -->
          <details class="skill-card" role="group" aria-label="JavaScript">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/js.png" alt="JavaScript icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">JavaScript</h3>
            </summary>
            <div class="skill-body">
              <p class="skill-label"><strong>Description</strong></p>
              <p class="skill-excerpt">DOM, fetch, frontend frameworks.</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="TypeScript">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/typescript.png" alt="TypeScript icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">TypeScript</h3>
            </summary>
            <div class="skill-body">
              <p class="skill-label"><strong>Description</strong></p>
              <p class="skill-excerpt">Static typing, interfaces, front/back integration.</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="Python">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/python.png" alt="Python icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">Python</h3>
            </summary>
            <div class="skill-body">
              <p class="skill-label"><strong>Description</strong></p>
              <p class="skill-excerpt">Scripting, data, web (Flask).</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="Java">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/java.png" alt="Java icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">Java</h3>
            </summary>
            <div class="skill-body">
              <p class="skill-label"><strong>Description</strong></p>
              <p class="skill-excerpt">OOP (in progress)</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="SQL">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/SQL.png" alt="SQL icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">SQL</h3>
            </summary>
            <div class="skill-body">
              <p class="skill-label"><strong>Description</strong></p>
              <p class="skill-excerpt">Queries, joins, optimization.</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="Rust">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/r.png" alt="R language icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">R (in progress)</h3>
            </summary>
            <div class="skill-body">
              <p class="skill-label"><strong>Description</strong></p>
              <p class="skill-excerpt">(in progress)</p>
            </div>
          </details>

        </div>
      </div>
    </section>

    <section class="data section-digital" aria-labelledby="data-title-diverse">
      <div class="container">
  <h2 id="data-title-diverse">Other Skills</h2>
        <div class="skills-grid">
          <details class="skill-card" role="group" aria-label="Mapping">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/map-location.png" alt="Mapping / GIS icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">Mapping</h3>
            </summary>
            <div class="skill-body">
          <p class="skill-label"><strong>Description</strong></p>
          <p class="skill-excerpt">GIS (QGIS) and spatial representations.</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="Archiving">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/file.png" alt="Archiving / file icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">Archiving</h3>
            </summary>
            <div class="skill-body">
          <p class="skill-label"><strong>Description</strong></p>
          <p class="skill-excerpt">Physical and digital conservation, metadata.</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="Communication">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/communication.png" alt="Communication icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">Communication</h3>
            </summary>
            <div class="skill-body">
          <p class="skill-label"><strong>Description</strong></p>
          <p class="skill-excerpt">Writing and outreach - clear, effective information exchange.</p>
              <p class="skill-label"><strong>Tools</strong></p>
              <p class="skill-tools-list">Trello · Agile methods · Cross-team communication</p>
            </div>
          </details>

          <!-- Keep as-is? -->
          <details class="skill-card" role="group" aria-label="Software">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/app-settings.png" alt="Software icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">Common Softwares</h3>
            </summary>
            <div class="skill-body">
          <p class="skill-label"><strong>Description</strong></p>
          <p class="skill-excerpt">Microsoft Office · Adobe (Photoshop, Illustrator) · Agisoft Metashape</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="Project management">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/management.png" alt="Project management icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">Project management (junior)</h3>
            </summary>
            <div class="skill-body">
          <p class="skill-label"><strong>Description</strong></p>
          <p class="skill-excerpt">Agile methods, coordination.</p>
            </div>
          </details>

          <!-- ++ skills -->
          <details class="skill-card" role="group" aria-label="Statistics">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/exploration.png" alt="Statistics icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">Statistics</h3>
            </summary>
            <div class="skill-body">
          <p class="skill-label"><strong>Description</strong></p>
          <p class="skill-excerpt">Statistical analysis, hypothesis testing, interpretation of results.</p>
            </div>
          </details>

          

          <details class="skill-card" role="group" aria-label="Languages">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/languages.png" alt="Languages icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">Languages</h3>
            </summary>
            <div class="skill-body">
          <p class="skill-label"><strong>Description</strong></p>
          <p class="skill-excerpt">English (fluent) - German (beginner)</p>
            </div>
          </details>

          <details class="skill-card" role="group" aria-label="Driving license">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <img src="/icons/driving-licence.png" alt="Driving license icon" width="64" height="64" />
              </div>
              <h3 class="skill-title">Driving license (Category B)</h3>
            </summary>
            <div class="skill-body">
          <p class="skill-label"><strong>Description</strong></p>
          <p class="skill-excerpt">Category B driving license.</p>
            </div>
          </details>

          <!-- <details class="skill-card" role="group" aria-label="Tests et QA">
            <summary class="skill-summary" role="button">
              <div class="skill-media" aria-hidden="true">
                <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="8" fill="rgba(255,255,255,0.04)"/>
                  <path d="M20 36 L28 28 L44 44" stroke="rgba(255,255,255,0.22)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="skill-title">Tests & QA (in progress)</h3>
            </summary>
            <div class="skill-body">
          <p class="skill-label"><strong>Description</strong></p>
          <p class="skill-excerpt">(Learning)</p>
            </div>
          </details> -->



        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const mask = ref(null)
const transitionEl = ref(null)
const rootEl = ref(null)
const revealed = ref(false)
let io = null

function smoothScrollTo(selector) {
  const el = document.querySelector(selector)
  if (!el) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.scrollIntoView({ block: 'start' })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function prefersReducedMotion() {
  try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches }
  catch (e) { return false }
}

function triggerReveal() {
  if (!mask.value) return
  if (prefersReducedMotion()) {
    mask.value.classList.add('no-motion')
    revealed.value = true
  } else {
    mask.value.classList.add('animate')
    // toggle root revealed state slightly after animation starts for smoother effect
    setTimeout(() => { revealed.value = true }, 300)
  }
}

onMounted(() => {
  if (prefersReducedMotion()) {
    // Respect user preference: reveal immediately without motion
    if (mask.value) mask.value.classList.add('no-motion')
    return
  }

  if ('IntersectionObserver' in window && mask.value && transitionEl.value) {
    io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          triggerReveal()
          if (io) { io.disconnect(); io = null }
        }
      })
    }, { threshold: 0.25 })

    io.observe(transitionEl.value)
  } else {
    // Fallback
    setTimeout(() => triggerReveal(), 700)
  }
})


onBeforeUnmount(() => {
  if (io) { io.disconnect(); io = null }
})
</script>

<style scoped>


/* Transition: vertical reveal (top -> bottom) */
.transition-reveal { position: relative; min-height: 30vh; display:block; overflow: hidden; }
.reveal-layer { position:absolute; inset:0; }
.parch-layer { background: var(--parchment); z-index:1 }
.digital-layer { background: #2F4752; z-index:0 }

/* Vertical mask that moves down */
.reveal-mask { position:absolute; left:0; right:0; top:0; height:100%; transform: translateY(-100%); background: linear-gradient(180deg, rgba(47,71,82,0) 0%, rgba(47,71,82,1) 70%); transition: transform 1.2s cubic-bezier(.2,.9,.2,1); z-index:2; pointer-events:none }
.reveal-mask.animate { transform: translateY(0); }
.reveal-mask.no-motion { transform: translateY(0); transition:none }

/* Data section */
.section-digital { background: var(--digital-bg); color: #e4ddb8; padding: 3rem 0 }
.skills-grid { display:grid; grid-template-columns: repeat(4,1fr); gap:1rem }
.skill-card { background: rgba(255,255,255,0.04); padding:1rem; border-radius:8px; border: 1px solid rgba(255,255,255,0.06); text-align:center; display:flex; flex-direction:column; gap:0.5rem; align-items:center }
.skill-media { width:80px; height:80px; flex:0 0 80px; display:flex; align-items:center; justify-content:center }
.skill-title { margin:0; font-size:1.05rem; color: #e4ddb8 }
.skill-excerpt { margin:0; color: #e4ddb8; font-size:0.92rem; text-align:center }

@media (max-width: 1023px) { .skills-grid { grid-template-columns: repeat(2,1fr) } }

/* Archéologie extras styles */
.archae-extras { padding: 2rem 0 3rem; }
.archae-title { margin: 0 0 1rem; color: var(--ink); font-size: 1.25rem }
.learnings-grid { display:grid; grid-template-columns: repeat(4,1fr); gap:1rem; margin-bottom:1.25rem }
  .learning-card { background: var(--parchment-dark); padding:1rem; border-radius:6px; border:1px solid rgba(0,0,0,0.08); color: var(--ink) }
.learning-card h4 { margin:0 0 0.5rem; font-size:1rem }
  .learning-card p { margin:0; font-size:0.9rem; color: rgba(0,0,0,0.7) }
  .diplomas { margin-top:1rem; }
  /* stacked diploma cards */
  .diploma-cards { display:flex; flex-direction:column; gap:0.75rem }
  .diploma-card { background: rgba(255,255,255,0.02); border-radius:8px; padding:0.75rem 1rem; border:1px solid rgba(255,255,255,0.04); color: #e4ddb8 }
  .diploma-card .diploma-title { margin:0; font-size:1.05rem }
  .diploma-card .diploma-date { margin:0.25rem 0 0; font-size:0.92rem; color: rgba(228,221,184,0.9) }

  /* Archaeology */
  .archae-diplomas .diploma-card { background: var(--parchment-dark); border:1px solid rgba(0,0,0,0.08); color: var(--ink) }
  .archae-diplomas .diploma-card .diploma-date { color: rgba(58,42,24,0.85) }

  /* IT diplomas heading  */
  .it-diplomas h3 { margin: 0 0 0.5rem; color: #e4ddb8; font-size: 1.05rem; font-weight: 600 }

  /* Archaeology diplomas */
  .archae-diplomas h3 { margin: 0 0 0.5rem; color: var(--ink); font-size: 1rem }

@media (max-width: 1023px) { .learnings-grid { grid-template-columns: repeat(2,1fr) } }
@media (max-width: 767px) { .learnings-grid { grid-template-columns: 1fr } }

/* Pb réglé, vérifier le padding des autres éléments */
@media (max-width: 1300px) {
  .archae-extras { padding-left: 1rem; padding-right: 1rem; }
  .learnings-grid { padding-left: 0.5rem; padding-right: 0.5rem; }
}

/* Test pour implémenter les soft skills... */
.softskills { margin: 0.75rem 0 1rem }
.softskills-list { display:flex; flex-wrap:wrap; gap:0.5rem; padding:0; margin:0; list-style:none }
.softskills .chip { background: rgba(255,255,255,0.06); color: var(--ink); padding:0.35rem 0.6rem; border-radius:999px; font-size:0.9rem; border:1px solid rgba(0,0,0,0.06) }

@media (max-width: 767px) {
  .softskills { margin-top: 0.6rem }
  .softskills .chip { font-size:0.86rem; padding:0.32rem 0.5rem }
}

/* details/summary styling for interactive cards */
details.skill-card { background: rgba(255,255,255,0.02); border-radius:8px; padding:0; border: 1px solid rgba(255,255,255,0.04); overflow:hidden }
details.skill-card[open] { background: rgba(255,255,255,0.04) }
details.skill-card summary.skill-summary { list-style: none; cursor: pointer; display:block; width:100%; padding:0; margin:0 }
details.skill-card summary.skill-summary > .skill-media, details.skill-card summary.skill-summary > .skill-title { pointer-events:none }
details.skill-card summary.skill-summary .skill-media { margin: 0.75rem auto 0.25rem auto }
details.skill-card summary.skill-summary .skill-title { text-align:center; padding:0.25rem 0 }
details.skill-card summary.skill-summary::-webkit-details-marker { display:none }
details.skill-card .skill-body { max-height:0; overflow:hidden; transition: max-height 0.28s ease, padding 0.2s ease }
details.skill-card[open] .skill-body { max-height: 12rem; padding: 0.5rem 0.75rem }

/* description */
.skill-label { margin: 0.25rem 0 0.25rem; color: rgba(228,221,184,0.95); font-size:0.92rem; text-align:center }
.skill-tools-list { margin: 0; color: rgba(228,221,184,0.9); font-size:0.9rem; text-align:center }

/* test */
.skill-body { display:flex; flex-direction:column; align-items:center }

@media (max-width: 1023px) {
  .skill-body { align-items:center }
}

/* hover state */
details.skill-card:hover, details.skill-card[open] { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(213, 208, 182, 0.18) }

/* Responsive */
@media (max-width: 1023px) { .two-col { flex-direction: column } .col, .aside { width: 100% } .skills-grid { grid-template-columns: repeat(2,1fr) } }
@media (max-width: 767px) { .skills-grid { grid-template-columns: 1fr } .transition-reveal { min-height: 40vh } }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .reveal-mask, .particles, .reveal-btn { transition: none !important }
  .reveal-mask { transform: translateY(0) !important }
  .particles { opacity: 1 !important; transform: none !important }
}

</style>