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
          <span>Python · SQL · R · TypeScript</span>
          <span>Projets sélectionnés 2026</span>
        </div>
      </section>

      <section className="projects section-shell" id="projets">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Selected work</p>
            <h2>Cinq projets.<br />Cinq problèmes réels.</h2>
          </div>
          <p>
            Une sélection qui relie ingénierie des données, IA, développement produit
            et analyse décisionnelle à des besoins concrets.
          </p>
        </div>

        <article className="project project-moremovies project-featured">
          <div className="project-copy">
            <div className="project-meta">
              <span>01</span>
              <span>Data engineering · Business Intelligence</span>
            </div>
            <h3>MoreMovies</h3>
            <p className="project-lead">
              Réconcilier trois systèmes incompatibles pour créer une vision métier commune.
            </p>
            <p>
              Une chaîne décisionnelle complète qui harmonise les données de trois enseignes,
              construit un entrepôt ROLAP et expose des analyses multidimensionnelles sur les
              ventes, les locations, les produits et les profils clients.
            </p>
            <ul className="project-points">
              <li>40 transformations Pentaho PDI et 37 tables SQL</li>
              <li>4 dimensions, 2 tables de faits et 3 agrégats mensuels</li>
              <li>3 cubes Mondrian, 5 requêtes MDX et exports Power BI</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/Bocoum1/moremovies" target="_blank" rel="noreferrer">
                Explorer le projet <ArrowUpRight />
              </a>
              <a href="https://github.com/Bocoum1/moremovies#architecture" target="_blank" rel="noreferrer">
                Voir l&apos;architecture <GithubMark />
              </a>
            </div>
            <div className="tags">
              <span>MySQL</span><span>Pentaho PDI</span><span>Mondrian</span><span>MDX</span><span>Power BI</span>
            </div>
          </div>
          <a
            className="project-visual screenshot-visual moremovies-screenshot"
            href="https://github.com/Bocoum1/moremovies"
            target="_blank"
            rel="noreferrer"
            aria-label="Explorer le dépôt MoreMovies"
          >
            <div className="screenshot-window">
              <div className="screenshot-bar"><i /><i /><i /><span>MoreMovies · architecture décisionnelle</span></div>
              <Image
                src={`${basePath}/projects/moremovies.svg`}
                alt="Architecture de la plateforme décisionnelle MoreMovies"
                width="1400"
                height="650"
                unoptimized
              />
            </div>
            <span className="screenshot-caption">Architecture et code source <ArrowUpRight /></span>
          </a>
        </article>

        <article className="project project-atlas">
          <div className="project-copy">
            <div className="project-meta">
              <span>02</span>
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
          <a
            className="project-visual screenshot-visual atlas-screenshot"
            href="https://atlas-sigma-gold.vercel.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="Ouvrir la démonstration Atlas"
          >
            <div className="screenshot-window">
              <div className="screenshot-bar"><i /><i /><i /><span>atlas-sigma-gold.vercel.app</span></div>
              <Image
                src={`${basePath}/projects/atlas.webp`}
                alt="Page d'accueil et création de compte de l'application Atlas"
                width="1280"
                height="800"
                unoptimized
              />
            </div>
            <span className="screenshot-caption">Application en ligne <ArrowUpRight /></span>
          </a>
        </article>

        <article className="project project-rag">
          <div className="project-copy">
            <div className="project-meta">
              <span>03</span>
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
              <span>04</span>
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
          <a
            className="project-visual screenshot-visual ukra-screenshot"
            href="https://datascienceappli.shinyapps.io/Securite_routiere/"
            target="_blank"
            rel="noreferrer"
            aria-label="Ouvrir le tableau de bord UKRA"
          >
            <div className="screenshot-window">
              <div className="screenshot-bar"><i /><i /><i /><span>UKRA · R Shiny</span></div>
              <Image
                src={`${basePath}/projects/ukra.webp`}
                alt="Vue globale du tableau de bord R Shiny UKRA"
                width="1440"
                height="760"
                unoptimized
              />
            </div>
            <span className="screenshot-caption">Dashboard interactif <ArrowUpRight /></span>
          </a>
        </article>

        <article className="project project-pathfinding">
          <div className="project-copy">
            <div className="project-meta">
              <span>05</span>
              <span>Algorithmique · Laboratoire Julia</span>
            </div>
            <h3>Pathfinding Lab</h3>
            <p className="project-lead">
              Voir un algorithme réfléchir, étape par étape.
            </p>
            <p>
              Un laboratoire pédagogique qui compare cinq stratégies de recherche sur des
              cartes pondérées. Julia calcule les traces réelles, puis l&apos;interface anime
              l&apos;exploration et la reconstruction du chemin.
            </p>
            <ul className="project-points">
              <li>BFS, Dijkstra, A*, glouton et A* pondéré</li>
              <li>Coût, étapes, états explorés et terrains pondérés</li>
              <li>Tests automatisés et déploiement GitHub Pages</li>
            </ul>
            <div className="project-links">
              <a href="https://bocoum1.github.io/Pathfinding-Lab/" target="_blank" rel="noreferrer">
                Lancer la démonstration <ArrowUpRight />
              </a>
              <a href="https://github.com/Bocoum1/Pathfinding-Lab" target="_blank" rel="noreferrer">
                Code source <GithubMark />
              </a>
            </div>
            <div className="tags">
              <span>Julia</span><span>Algorithmes</span><span>A*</span><span>GitHub Actions</span>
            </div>
          </div>
          <a
            className="project-visual screenshot-visual pathfinding-screenshot"
            href="https://bocoum1.github.io/Pathfinding-Lab/"
            target="_blank"
            rel="noreferrer"
            aria-label="Lancer la démonstration Pathfinding Lab"
          >
            <div className="screenshot-window">
              <div className="screenshot-bar"><i /><i /><i /><span>A* · exploration 15 / 43</span></div>
              <Image
                src={`${basePath}/projects/pathfinding-lab.webp`}
                alt="Animation de l'exploration A* dans Pathfinding Lab"
                width="1440"
                height="676"
                unoptimized
              />
            </div>
            <span className="screenshot-caption">Démonstration interactive <ArrowUpRight /></span>
          </a>
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
