import Image from "next/image";

const githubUrl = "https://github.com/Bocoum1";
const email = "bocoumoumar535@gmail.com";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
    <path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const GithubMark = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
    <path
      fill="currentColor"
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.55 9.55 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
    />
  </svg>
);

const skillGroups = [
  {
    number: "01",
    title: "Construire",
    text: "Des applications complètes, de l'interface à l'API et aux données.",
    skills: "Next.js · FastAPI · PostgreSQL · Firebase",
  },
  {
    number: "02",
    title: "Raisonner",
    text: "Des systèmes IA inspectables qui rendent leurs sources visibles.",
    skills: "Python · RAG · FAISS · Ollama · Qdrant",
  },
  {
    number: "03",
    title: "Décider",
    text: "Des analyses qui relient une question métier à des indicateurs utiles.",
    skills: "R · Shiny · Plotly · Leaflet · BI",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Retour en haut">
          AB<span>.</span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#projets">Projets</a>
          <a href="#approche">Approche</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href={githubUrl} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal reveal-1">
          <p className="eyebrow"><span /> Data, IA &amp; produit</p>
          <h1>
            Je transforme les données en produits <em>utiles.</em>
          </h1>
          <p className="hero-intro">
            Je suis <strong>Amadou Bocoum</strong>, Data &amp; AI Engineer. Je conçois des
            applications qui rendent les systèmes complexes plus compréhensibles,
            actionnables et respectueux des données.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projets">
              Découvrir mes projets <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-ghost" href={`mailto:${email}`}>
              Me contacter
            </a>
          </div>
        </div>

        <div className="hero-visual reveal reveal-2" aria-label="Aperçu des domaines d'expertise">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <figure className="hero-portrait">
            <div className="hero-portrait-frame">
              <Image
                src={`${basePath}/amadou-bocoum.webp`}
                alt="Portrait d'Amadou Bocoum"
                width="800"
                height="1000"
                priority
                unoptimized
              />
            </div>
            <figcaption>
              <strong>Amadou Bocoum</strong>
              <span>Data &amp; AI Engineer</span>
            </figcaption>
          </figure>
          <div className="signal-card signal-card-main">
            <span className="signal-label">Fil conducteur</span>
            <strong>discover → understand → act</strong>
            <p>Partir d&apos;un besoin réel, rendre le système lisible, livrer un usage.</p>
          </div>
          <div className="signal-card signal-card-data">
            <span className="pulse" />
            <small>DATA</small>
            <strong>Structurer</strong>
          </div>
          <div className="signal-card signal-card-ai">
            <small>AI</small>
            <strong>Augmenter</strong>
          </div>
          <div className="signal-card signal-card-bi">
            <small>BI</small>
            <strong>Décider</strong>
          </div>
        </div>

        <div className="hero-foot reveal reveal-3">
          <span>Basé en France</span>
          <span>Python · R · TypeScript</span>
          <span>Projets sélectionnés 2026</span>
        </div>
      </section>

      <section className="projects section-shell" id="projets">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Travaux sélectionnés</p>
            <h2>Trois projets.<br />Trois problèmes réels.</h2>
          </div>
          <p>
            Une sélection qui montre la chaîne complète : comprendre le besoin,
            construire le système et présenter une solution utilisable.
          </p>
        </div>

        <article className="project project-atlas">
          <div className="project-copy">
            <div className="project-meta">
              <span>01</span>
              <span>Produit full-stack · Démonstration en ligne</span>
            </div>
            <h3>Atlas</h3>
            <p className="project-lead">
              Rendre les bonnes rencontres plus faciles pour les étudiants.
            </p>
            <p>
              Une plateforme de mise en relation qui combine profils, recherche,
              matching vectoriel et graphe relationnel pour faire émerger des connexions
              pertinentes autour de l&apos;orientation, de l&apos;intégration et des opportunités.
            </p>
            <ul className="project-points">
              <li>Architecture Next.js, FastAPI, PostgreSQL et Qdrant</li>
              <li>Matching hybride et recherche sémantique</li>
              <li>Authentification Firebase et socle de production documenté</li>
            </ul>
            <div className="project-links">
              <a href="https://atlas-sigma-gold.vercel.app/" target="_blank" rel="noreferrer">
                Ouvrir l&apos;application <ArrowUpRight />
              </a>
            </div>
            <div className="tags">
              <span>Next.js</span><span>FastAPI</span><span>PostgreSQL</span><span>Qdrant</span>
            </div>
          </div>
          <div className="project-visual atlas-visual" aria-hidden="true">
            <div className="atlas-topbar"><span /><span /><span /></div>
            <div className="atlas-search">Rechercher une compétence, une université...</div>
            <div className="profile-card profile-one">
              <div className="avatar">ML</div><div><strong>Marie L.</strong><small>Data Science · Paris</small></div>
              <span className="match">92%</span>
            </div>
            <div className="profile-card profile-two">
              <div className="avatar alt">YK</div><div><strong>Yanis K.</strong><small>Product · Lyon</small></div>
              <span className="match">87%</span>
            </div>
            <svg className="network-lines" viewBox="0 0 560 260">
              <path d="M80 180 C180 75 345 220 480 90" />
              <path d="M120 60 C260 180 360 35 505 175" />
              <circle cx="80" cy="180" r="8" /><circle cx="480" cy="90" r="8" />
              <circle cx="120" cy="60" r="8" /><circle cx="505" cy="175" r="8" />
              <circle cx="285" cy="130" r="13" />
            </svg>
          </div>
        </article>

        <article className="project project-rag">
          <div className="project-copy">
            <div className="project-meta">
              <span>02</span>
              <span>IA locale · Open source</span>
            </div>
            <h3>Local Hybrid RAG</h3>
            <p className="project-lead">
              Interroger ses documents sans les envoyer à une grande plateforme.
            </p>
            <p>
              Une application RAG locale et transparente pour les PDF, DOCX et TXT.
              La recherche hybride, le reranking et les citations rendent chaque réponse
              plus vérifiable, tandis qu&apos;Ollama conserve la génération sur la machine.
            </p>
            <ul className="project-points">
              <li>Recherche FAISS + BM25 fusionnée par Reciprocal Rank Fusion</li>
              <li>Sources, pages et passages consultables</li>
              <li>Suite de tests et CI GitHub</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/Bocoum1/Retrieval-Augmented-Generation" target="_blank" rel="noreferrer">
                Voir le code <ArrowUpRight />
              </a>
            </div>
            <div className="tags">
              <span>Python</span><span>Streamlit</span><span>FAISS</span><span>Ollama</span>
            </div>
          </div>
          <div className="project-visual rag-visual" aria-hidden="true">
            <div className="rag-window">
              <div className="rag-window-head"><span /><strong>Local RAG</strong><small>● Local</small></div>
              <div className="rag-question">Quels sont les risques identifiés dans ce document ?</div>
              <div className="rag-answer">
                <span className="answer-line long" /><span className="answer-line" />
                <span className="answer-line medium" />
                <div className="citation">[1] rapport.pdf · page 12</div>
                <div className="citation">[2] annexe.docx · section 4</div>
              </div>
              <div className="rag-pipeline">
                <span>BM25</span><i>+</i><span>FAISS</span><i>→</i><span>Rerank</span><i>→</i><span>Ollama</span>
              </div>
            </div>
          </div>
        </article>

        <article className="project project-ukra">
          <div className="project-copy">
            <div className="project-meta">
              <span>03</span>
              <span>Business Intelligence · Projet en binôme</span>
            </div>
            <h3>UKRA</h3>
            <p className="project-lead">
              Comprendre où, quand et dans quelles conditions les accidents surviennent.
            </p>
            <p>
              Un tableau de bord décisionnel construit sur 307 973 accidents routiers au
              Royaume-Uni. Les vues territoriales, temporelles et factorielles relient les
              indicateurs aux questions des acteurs de la sécurité routière.
            </p>
            <ul className="project-points">
              <li>Filtres transversaux et KPI réactifs</li>
              <li>Cartographie des districts et facteurs de risque</li>
              <li>Application R Shiny déployée publiquement</li>
            </ul>
            <div className="project-links">
              <a href="https://datascienceappli.shinyapps.io/Securite_routiere/" target="_blank" rel="noreferrer">
                Ouvrir l&apos;application <ArrowUpRight />
              </a>
              <a href="https://github.com/Bocoum1/UKRA" target="_blank" rel="noreferrer">
                Code source <GithubMark />
              </a>
            </div>
            <div className="tags">
              <span>R</span><span>Shiny</span><span>Plotly</span><span>Leaflet</span>
            </div>
          </div>
          <div className="project-visual ukra-visual" aria-hidden="true">
            <div className="dashboard-head">UKRA <span>2021—2022</span></div>
            <div className="kpi-row">
              <div><small>ACCIDENTS</small><strong>307 973</strong></div>
              <div><small>VICTIMES</small><strong>417 883</strong></div>
              <div><small>GRAVE / FATAL</small><strong>14,5%</strong></div>
            </div>
            <div className="chart-panel">
              <small>ÉVOLUTION MENSUELLE</small>
              <svg viewBox="0 0 480 160">
                <path className="grid" d="M0 30H480M0 80H480M0 130H480" />
                <path className="line" d="M0 88 28 120 55 80 82 96 110 74 138 69 166 60 194 78 222 70 250 42 278 74 306 118 334 132 362 110 390 98 418 106 446 86 480 76" />
              </svg>
            </div>
            <div className="bar-panel">
              <small>PAR GRAVITÉ</small>
              <div className="bars"><i /><i /><i /></div>
            </div>
          </div>
        </article>
      </section>

      <section className="approach section-shell" id="approche">
        <div className="approach-intro">
          <p className="eyebrow light"><span /> Manière de travailler</p>
          <h2>La technologie vient après la question.</h2>
          <p>
            Je cherche d&apos;abord ce qui doit devenir plus simple pour l&apos;utilisateur.
            Les modèles, les architectures et les visualisations servent ensuite cette
            intention, avec une attention particulière à la clarté et à la confidentialité.
          </p>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.number}>
              <span className="skill-number">{group.number}</span>
              <h3>{group.title}</h3>
              <p>{group.text}</p>
              <small>{group.skills}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="about section-shell">
        <p className="eyebrow"><span /> À propos</p>
        <div className="about-grid">
          <h2>Curieux du système entier, attentif à la personne qui l&apos;utilise.</h2>
          <div className="about-copy">
            <p>
              Mon travail se situe à l&apos;intersection de la donnée, de l&apos;intelligence
              artificielle et du développement produit. J&apos;aime autant comprendre un besoin
              métier que concevoir le pipeline, l&apos;API ou l&apos;interface qui permettra d&apos;y répondre.
            </p>
            <p>
              Je construis actuellement des projets autour de la recherche sémantique, de
              l&apos;IA locale et des outils capables d&apos;aider sans rendre leur fonctionnement opaque.
            </p>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div>
          <p className="eyebrow light"><span /> Travaillons ensemble</p>
          <h2>Un problème intéressant à transformer en produit&nbsp;?</h2>
        </div>
        <a className="contact-mail" href={`mailto:${email}`}>
          <span>{email}</span><ArrowUpRight />
        </a>
      </section>

      <footer className="site-footer">
        <span>© 2026 Amadou Bocoum</span>
        <span>Conçu et développé avec attention.</span>
        <a href={githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
      </footer>
    </main>
  );
}
