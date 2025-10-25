<!-- Rogner les images !! et le ratio !!! -->
<template>
  <main class="page section-digital">
    <div class="container">
      <header class="page-header">
        <h1>Projects</h1>
        <p class="lead">A selection of my work (personal & group projects), repository links will be available once they are made public.</p>
      </header>

      <!-- Bouton vers le repo github quand ils seront à jour... -->

  <section class="projects-grid" aria-label="List of projects">

        <article class="project-card">
          <div class="project-thumb" aria-hidden="true">
            <img src="/screenshoots/workinprogress.png" alt="Preview - in progress" loading="lazy">
            <!-- Si plusieurs voir en dessous, par contre attention ratio et responsive... -->
            <!--
            <img class="two" src="/screenshoots/credit-score-1.png" alt="Aperçu 1" loading="lazy">
            <img class="two" src="/screenshoots/credit-score-2.png" alt="Aperçu 2" loading="lazy">
            -->
          </div>
          <h3>Ongoing project - Credit scoring</h3>
          <p class="meta"><strong>Status</strong>: in progress • <strong>Role</strong>: analysis & modeling</p>
          <ul>
            <li>• Exploratory data analysis;</li>
            <li>• Visualization and modeling of a credit scoring system;</li>
            <li>• Classification model (in progress).</li>
          </ul>
          <div class="project-why"><strong>Why</strong>: To practice end-to-end model building for financial risk, learn feature engineering, evaluation and fairness considerations, and explore how explainable models can support decision-making.</div>
          <div class="actions">
            <!-- <a class="btn" href="https://github.com/non-non-non/credit-score" target="_blank" rel="noopener">Voir le repo</a> vs erreur -->
          </div>
        </article>

        <article class="project-card">
          <div class="project-thumb" aria-hidden="true">
            <img src="/screenshoots/Burrowork_1.png" alt="Preview - BurroWork jobboard" loading="lazy">
          </div>

          <h3>Jobboard - BurroWork</h3>
          <p class="meta"><strong>Tech</strong>: Vue 3 · Pinia · axios · Flask · SQLAlchemy · MySQL · JWT</p>
          <ul>
            <li>• Relational DB - 4 tables;</li>
            <li>• Frontend: public job board (offers) & admin page;</li>
            <li>• Authentication: creator & admin accounts (JWT);</li>
            <li>• CRUD API (Flask & MySQL) to manage job postings;</li>
            <li>• Workflow: Trello · Discord · Agile.</li>
          </ul>
          <div class="project-why"><strong>Why</strong>: Built to understand full‑stack constraints for a practical product: user flows for job posting, authentication, and a lightweight admin panel, good practice for product thinking and API design.</div>
          <div class="actions">
            <!-- repo link placeholder, rajouter si le temps -->
          </div>
        </article>

        <article class="project-card">
          <div class="project-thumb" aria-hidden="true">
            <img src="/screenshoots/domaine-des-croix.png" alt="Preview - Domaine des Croix market study" loading="lazy">
          </div>

          <h3>Market study - Domaine des Croix (US positioning)</h3>
          <p class="meta"><strong>Tech</strong>: Python (Pandas, Matplotlib, Seaborn) · Power BI · Power Query · DAX</p>
          <ul>
            <li>• Analyze > 130,000 wines (varieties, country, region, vintage, scores, prices in USD);</li>
            <li>• Compare Pinot Noir vs other Bourgogne wines on price and ratings;</li>
            <li>• Identify competitive pricing for US market while preserving margin;</li>
            <li>• Data cleaning and feature extraction in Python; visualizations in Matplotlib/Seaborn;</li>
            <li>• Interactive reporting with Power BI (accessible color palette, Power Query & DAX).</li>
          </ul>
          <div class="project-why"><strong>Why</strong>: To provide a data-driven pricing and positioning strategy for Domaine des Croix entering the US market, combining large-scale wine market analysis with interactive dashboards for stakeholders and actionable pricing recommendations.</div>
          <div class="actions">
          </div>
        </article>

        <article class="project-card">
          <div class="project-thumb" aria-hidden="true">
            <img src="/screenshoots/Nantesflem_0.png" alt="Preview - Nantes events pipeline" loading="lazy">
          </div>
          <h3>Data pipeline - Nantes events</h3>
          <p class="meta"><strong>Pipeline</strong>: MageAI → S3 (AWS) • <strong>Visualization</strong>: Streamlit, Folium • <strong>Reporting</strong>: Power BI</p>
          <ul>
            <li>• Data analysis application for Nantes events;</li>
            <li>• Data collection via APIs and web scraping;</li>
            <li>• Pipeline with MageAI: 6 inputs, 1 output to Amazon S3 (AWS);</li>
            <li>• Streamlit app with maps (Folium) and event descriptions;</li>
            <li>• Data analysis (Power BI): KPIs, trends, and reporting.</li>
          </ul>
          <div class="project-why"><strong>Why</strong>: An end‑to‑end data engineering exercise, collecting heterogeneous sources, building a reliable pipeline and producing visualizations to inform city stakeholders and show practical ETL/BI skills.</div>
          <div class="actions">
            <!-- <a class="btn" href="https://github.com/non-non-non/nantes-evenements" target="_blank" rel="noopener">Voir le repo</a> -->
          </div>
        </article>

        <article class="project-card">
          <div class="project-thumb" aria-hidden="true">
            <img src="/screenshoots/Creuse_1.png" alt="Preview - NLP recommendation" loading="lazy">
          </div>
          <h3>NLP & Recommendation - New cinema in La Creuse</h3>
          <p class="meta"><strong>Tech</strong>: NLP, scikit-learn, Streamlit • <strong>Phase</strong>: prototyping</p>
          <ul>
            <li>• Market study: client requests, location, region, target audience;</li>
            <li>• Assessment of available data sources;</li>
            <li>• Data collection from IMDB and TMDB;</li>
            <li>• Filtering data to match client requirements;</li>
            <li>• Building a recommendation system with machine learning (scikit-learn);</li>
            <li>• Deploying a Streamlit app and trend analysis.</li>
          </ul>
          <div class="project-why"><strong>Why</strong>: Prototype to test how NLP and simple recommenders can support local cultural projects, focusing on relevance, user needs and lightweight deployable demos for stakeholders.</div>
          <div class="actions">
            <!-- <a class="btn" href="https://github.com/non-non-non/nouveau-cinema" target="_blank" rel="noopener">Voir le repo</a> -->
          </div>
        </article>

        <article class="project-card">
          <div class="project-thumb" aria-hidden="true">
            <img src="/screenshoots/BI-Finance1.png" alt="Preview - BI and Finance" loading="lazy">
          </div>
          <h3>Analyses - Toys & Models</h3>
          <p class="meta"><strong>Domains</strong>: Finance / HR / Logistics • <strong>Tools</strong>: MySQL, Matplotlib, Seaborn, Power BI</p>
          <ul>
            <li>• Study of relational databases (MySQL);</li>
            <li>• Data analysis with Matplotlib and Seaborn;</li>
            <li>• Data modelling and dashboards in Power BI;</li>
            <li>• Interactive dashboards for finance, HR and logistics;</li>
            <li>• Communicating results and storytelling.</li>
          </ul>
          <div class="project-why"><strong>Why</strong>: Apply BI techniques to real datasets to produce actionable dashboards and narratives for decision‑makers; good practice for communicating insights and building stakeholder-focused reports.</div>
          <div class="actions">
            <!-- <a class="btn" href="https://github.com/non-non-non/toys-and-models" target="_blank" rel="noopener">Voir le repo</a> -->
          </div>
        </article>
      </section>
    </div>
  </main>
</template>

<script setup>
// Placeholder for future script: fetching projects or props
</script>

<style scoped>
.section-digital { background: var(--digital-bg); color: #e4ddb8; padding: 3rem 0 }
/* Régler pour le header  */
.lead { margin:0 0 1.25rem; color: rgba(228,221,184,0.95) }
.projects-grid { display:grid; grid-template-columns: 1fr; gap:1rem }
.project-card { background: rgba(255,255,255,0.02); padding:1rem; border-radius:8px; border:1px solid rgba(255,255,255,0.04); display:flex; flex-direction:column; align-items:center; text-align:center }
.project-card h3 { margin:0 0 0.5rem }
.meta { font-size:0.9rem; color: rgba(228,221,184,0.9); text-align:center }
.actions { margin-top:0.75rem; display:flex; gap:0.5rem; justify-content:center }

/* Center the list container while keeping list items left-aligned for readability */
.project-card > ul { list-style: none; padding: 0; margin: 0.5rem 0; display: inline-block; text-align: left }
.project-card > ul li { margin: 0.25rem 0 }
.btn { background: var(--accent); color: #072629; padding:0.4rem 0.7rem; border-radius:6px; text-decoration:none }
.btn.ghost { background: transparent; border:1px solid rgba(255,255,255,0.08); color: #e4ddb8 }

/* screenshots */
.project-thumb {
  width: 100%;
  height: 320px; /* mieux pour desktop */
  /* background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); ou pas ?, ça sépare mieux l'espace */
  border-radius: 6px;
  margin-bottom: 0.75rem;
  display: flex;
  gap: 0.5rem;
  overflow: hidden;
}

.project-thumb img { height: 100%; width: auto; max-width: 100%; display:block; object-fit: contain; object-position: center }
.project-thumb img { margin: 0 auto; }
.project-thumb img.contain { object-fit: contain; object-position: center; }
/* Moitié pour les deux images*/
.project-thumb img.two { max-width: calc(50% - 0.25rem); flex: 0 0 auto }

.project-why { margin-top: 0.5rem; color: rgba(228,221,184,0.95); font-size: 0.95rem; text-align: left; max-width: 56ch }


@media (max-width: 767px) {
  .project-thumb { height: 160px }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .project-thumb { height: 220px }
}




.projects { padding:2rem 1rem; }
</style>