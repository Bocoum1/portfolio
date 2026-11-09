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
    title: "Modéliser",
    text: "Formuler une question statistique, choisir les hypothèses et comprendre l'estimation.",
    skills: "Inférence · GLM · Estimation non paramétrique · R",
  },
  {
    number: "02",
    title: "Évaluer",
    text: "Comparer les modèles, examiner les erreurs et distinguer ajustement et généralisation.",
    skills: "Machine learning · Deep learning · Python · PyTorch",
  },
  {
    number: "03",
    title: "Expliquer",
    text: "Rendre les résultats lisibles, reproductibles et utiles, sans masquer leurs limites.",
    skills: "Visualisation · Monte-Carlo · SQL · Shiny",
  },
];

type ResearchProject = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  repo: string;
  evidence: string;
  note: string;
  credit?: string;
  details?: { path: string; label: string };
  tags: string[];
};

const researchProjects: ResearchProject[] = [
  {
    id: "02",
    category: "Estimation non paramétrique",
    title: "Apprendre une variation locale.",
    description: "Estimer la dérivée d'une fonction de régression bruitée avec trois estimateurs récursifs à noyau. Comparer les erreurs plutôt que seulement regarder les courbes.",
    image: "kernel-derivative.png",
    imageWidth: 1440,
    imageHeight: 900,
    alt: "Dérivée analytique et estimations à noyau sur un même échantillon simulé",
    repo: "recursive-kernel-estimation",
    evidence: "3 noyaux · 200 répétitions Monte-Carlo · biais et MSE",
    note: "Simulation à vérité connue. Fonctions originales vérifiées et expérience complémentaire reproductible.",
    credit: "Travail en binôme avec Anya Levêque.",
    details: { path: "recursive-kernel-estimation/tree/main/reports", label: "Rapports" },
    tags: ["R", "Noyaux", "Biais / variance", "Simulation"],
  },
  {
    id: "03",
    category: "Modèles linéaires généralisés",
    title: "Comparer trois liens binomiaux.",
    description: "Passer de la vraisemblance à une implémentation du scoring de Fisher, puis comparer logit, probit et cloglog sur une étude dose-réponse.",
    image: "glm-dose-response.png",
    imageWidth: 1440,
    imageHeight: 900,
    alt: "Proportions observées et courbes logit, probit et complémentaire log-log ajustées",
    repo: "binomia-glm",
    evidence: "3 liens · calcul manuel · contrôle avec stats::glm",
    note: "Comparaison d'ajustement sur huit groupes, sans revendication de performance sur des données de test.",
    credit: "Travail en binôme avec Anya Levêque.",
    details: { path: "binomia-glm/tree/main/reports", label: "Rapports" },
    tags: ["R", "GLM", "Vraisemblance", "Diagnostics"],
  },
  {
    id: "04",
    category: "Deep learning · Classification d'images",
    title: "MNIST : du linéaire au CNN.",
    description: "Comparer un classifieur linéaire, un MLP et un CNN sur les mêmes images. Examiner les courbes d'apprentissage, les erreurs et le coût des architectures.",
    image: "mnist-learning-curves.png",
    imageWidth: 1650,
    imageHeight: 600,
    alt: "Pertes d'entraînement et de validation du modèle linéaire, du MLP et du CNN sur huit époques",
    repo: "Mnist",
    evidence: "3 architectures · 3 graines · CNN : 98,32 % sur le test interne",
    note: "Moyenne sur trois entraînements et un découpage fixe de Kaggle Digit Recognizer. Pas une validation externe ni un score de leaderboard.",
    tags: ["PyTorch", "CNN", "Validation", "Analyse des erreurs"],
  },
  {
    id: "05",
    category: "Machine learning · Régression tabulaire",
    title: "House Prices : au-delà du score.",
    description: "Comparer une référence constante, Ridge, une forêt et le gradient boosting. Apprendre les prétraitements dans chaque pli, puis analyser les erreurs du modèle retenu.",
    image: "house-prices-comparison.png",
    imageWidth: 1200,
    imageHeight: 600,
    alt: "Comparaison de la RMSE logarithmique en validation croisée pour quatre modèles de prix immobiliers",
    repo: "Kaggle/tree/main/house_prices",
    evidence: "5 plis · test séparé · sélection de Ridge sur la RMSE log",
    note: "Ridge réduit la MAE, mais une erreur d'extrapolation dégrade la RMSE en dollars et donne un R² négatif. Ce résultat est analysé, pas masqué.",
    details: { path: "Kaggle/blob/main/house_prices/RESULTS.md", label: "Résultats et discussion" },
    tags: ["scikit-learn", "Pipelines", "Validation croisée", "Résidus"],
  },
];

const appliedProjects = [
  {
    title: "Pathfinding",
    description: "Comparaison de BFS, Dijkstra, A* et de la recherche gloutonne sur des grilles avec obstacles.",
    repo: "Pathfinding",
    tools: "Julia · Algorithmes · Heuristiques",
  },
];

const projectDemos = [
  {
    id: "demo-moremovies",
    title: "MoreMovies",
    duration: "1 min 23",
    file: "moremovies",
    version: "2",
    width: 1080,
    height: 1350,
    description: "Des trois sources à l'entrepôt : suivre le nettoyage, l'intégration et l'analyse des données.",
    note: "Restitution pédagogique complémentaire, créée à partir des données du projet. Ce n'est pas une capture de Power BI ou de Spoon.",
    repo: "moremovies",
  },
  {
    id: "demo-rag",
    title: "Local Hybrid RAG",
    duration: "45 s",
    file: "rag",
    version: "1",
    width: 1080,
    height: 1350,
    description: "Poser des questions à ses documents, retrouver les passages utiles et consulter les sources des réponses.",
    note: "Capture de l'application avec Mistral. Temps d'attente raccourcis au montage ; exemple sélectionné, pas un benchmark.",
    repo: "Retrieval-Augmented-Generation",
  },
  {
    id: "demo-ukra",
    title: "UKRA",
    duration: "40 s",
    file: "ukra",
    version: "1",
    width: 1440,
    height: 1000,
    description: "Explorer les accidents, filtrer une année et comparer les territoires et les circonstances.",
    note: "Capture de l'application Shiny : vue globale, filtre 2022, facteurs et analyse temporelle. Travail en binôme avec Anya Levêque.",
    repo: "UKRA",
  },
];

function ProjectVideo({ demo }: { demo: (typeof projectDemos)[number] }) {
  return (
    <div className="project-video">
      <figure className="demo-card" id={demo.id}>
        <div className="demo-heading">
          <strong id={`${demo.id}-title`}>Démonstration · {demo.title}</strong>
          <span>{demo.duration} · Sans son</span>
        </div>
        {/* Le lecteur charge la vidéo à la demande ; WebM sert de repli au MP4. */}
        <video controls playsInline preload="none" width={demo.width} height={demo.height}
          style={{ aspectRatio: `${demo.width} / ${demo.height}` }}
          poster={`${basePath}/videos/${demo.file}-poster.png?v=${demo.version}`}
          aria-labelledby={`${demo.id}-title`} aria-describedby={`${demo.id}-description`}>
          <source src={`${basePath}/videos/${demo.file}.mp4?v=${demo.version}`} type="video/mp4" />
          <source src={`${basePath}/videos/${demo.file}.webm?v=${demo.version}`} type="video/webm" />
          Votre navigateur ne prend pas en charge la lecture vidéo.
        </video>
        <figcaption>
          <p className="demo-note" id={`${demo.id}-description`}>{demo.note}</p>
          <div className="project-links">
            <a href={`${basePath}/videos/${demo.file}.mp4?v=${demo.version}`} target="_blank" rel="noreferrer">
              Ouvrir la vidéo <ArrowUpRight />
            </a>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

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
          <p className="eyebrow"><span /> Data science · Statistiques · ML &amp; DL</p>
          <h1>
            Comprendre les données. Évaluer les <em>modèles.</em>
          </h1>
          <p className="hero-intro">
            Je suis <strong>Amadou Bocoum</strong>, étudiant en M2 Data Science et
            Modélisation Statistique à l&apos;Université Bretagne Sud. Je m&apos;intéresse
            à l&apos;inférence statistique, au machine learning et au deep learning,
            avec un intérêt pour les fondements algorithmiques : comprendre les méthodes,
            les mettre en œuvre et examiner leurs résultats.
            {" "}Je m&apos;intéresse également à la chaîne de traitement des données :
            concevoir des bases, construire des pipelines ETL et contrôler la qualité
            des données avant leur analyse.
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

        <div className="hero-visual reveal reveal-2" aria-label="Statistiques, machine learning et deep learning">
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
              <span>Data Science &amp; Statistiques</span>
            </figcaption>
          </figure>
          <div className="signal-card signal-card-main">
            <span className="signal-label">Fil conducteur</span>
            <strong>question → modèle → validation</strong>
            <p>Poser des hypothèses, mesurer les erreurs, expliquer les limites.</p>
          </div>
          <div className="signal-card signal-card-data">
            <span className="pulse" />
            <small>STATS</small>
            <strong>Estimer</strong>
          </div>
          <div className="signal-card signal-card-ai">
            <small>ML</small>
            <strong>Évaluer</strong>
          </div>
          <div className="signal-card signal-card-bi">
            <small>DL</small>
            <strong>Apprendre</strong>
          </div>
        </div>

        <div className="hero-foot reveal reveal-3">
          <span>Basé en France</span>
          <span>Python · R · PyTorch · SQL</span>
          <span>Projets sélectionnés 2026</span>
        </div>
      </section>

      <section className="projects section-shell" id="projets">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Travaux sélectionnés · Ingénierie des données · BI</p>
            <h2>Trois sources.<br />Une vision commune.</h2>
          </div>
          <p>Relier des données hétérogènes, contrôler leur cohérence et construire
            un entrepôt pour analyser les ventes et les locations.</p>
        </div>

        <article className="project project-moremovies project-with-video" id="moremovies">
          <div className="project-copy">
            <div className="project-meta">
              <span>01</span>
              <span>Data engineering · Projet universitaire réalisé seul</span>
            </div>
            <h3>MoreMovies</h3>
            <p className="project-lead">
              Des données sources à l&apos;analyse décisionnelle.
            </p>
            <p>
              Trois enseignes décrivent leurs clients, produits et transactions
              différemment. Ce projet consolide leurs données dans un modèle commun,
              puis alimente un entrepôt MySQL pour explorer l&apos;activité par magasin,
              produit et période.
            </p>
            <ul className="project-points">
              <li>Nettoyage et harmonisation des identifiants avec Pentaho PDI</li>
              <li>Entrepôt ROLAP : 4 dimensions, 2 tables de faits et 3 agrégats</li>
              <li>Cubes Mondrian, requêtes MDX et préparation du reporting</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/Bocoum1/moremovies" target="_blank" rel="noreferrer">
                Explorer le projet <ArrowUpRight />
              </a>
              <a href="https://github.com/Bocoum1/moremovies/blob/main/docs/architecture.md" target="_blank" rel="noreferrer">
                Architecture et choix techniques <GithubMark />
              </a>
            </div>
            <div className="tags">
              <span>MySQL</span><span>Pentaho PDI</span><span>ETL</span><span>Mondrian / MDX</span>
            </div>
          </div>
          <ProjectVideo demo={projectDemos[0]} />
        </article>

        <div className="section-heading complementary-heading">
          <div>
            <p className="eyebrow"><span /> Statistiques · Machine learning · Deep learning</p>
            <h2>Des hypothèses.<br />Des résultats vérifiables.</h2>
          </div>
          <p>Des questions précises, du code, des expériences et une lecture critique des résultats.</p>
        </div>
        <div className="research-grid">
          {researchProjects.map((project) => (
            <article className="research-card" key={project.repo}>
              <div className="research-body">
                <p className="research-category">{project.id} / {project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <a className="research-figure" href={`${githubUrl}/${project.repo}`} target="_blank" rel="noreferrer"
                 aria-label={`Consulter le projet : ${project.category}`}>
                <Image src={`${basePath}/projects/${project.image}`} alt={project.alt}
                       width={project.imageWidth} height={project.imageHeight} unoptimized />
              </a>
              <div className="research-body research-evidence">
                <strong>{project.evidence}</strong>
                <p>{project.note}</p>
                {project.credit && <p className="research-credit">{project.credit}</p>}
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  <a href={`${githubUrl}/${project.repo}`} target="_blank" rel="noreferrer">
                    Code et résultats <ArrowUpRight />
                  </a>
                  {project.details && (
                    <a href={`${githubUrl}/${project.details.path}`} target="_blank" rel="noreferrer">
                      {project.details.label} <ArrowUpRight />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rag-section section-shell" id="rag" aria-labelledby="rag-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> IA appliquée · Recherche documentaire</p>
            <h2 id="rag-title">Des documents.<br />Des réponses sourcées.</h2>
          </div>
          <p>{projectDemos[1].description}</p>
        </div>
        <article className="project project-with-video">
          <div className="project-copy">
            <div className="project-meta"><span>06</span><span>RAG · Projet personnel</span></div>
            <h3>Local Hybrid RAG</h3>
            <p className="project-lead">Interroger ses documents avec un modèle local.</p>
            <p>L&apos;application prépare et indexe les documents, recherche les passages
              pertinents, puis les transmet au modèle pour construire une réponse.
              Les sources restent consultables pour vérifier ce qu&apos;il avance.</p>
            <ul className="project-points">
              <li>Extraction du texte et découpage en passages</li>
              <li>Recherche hybride : similarité sémantique avec FAISS et mots-clés avec BM25</li>
              <li>Génération locale avec Ollama et interface Streamlit</li>
            </ul>
            <p>Un prototype local : les réponses et leurs citations doivent être vérifiées.</p>
            <div className="project-links">
              <a href={`${githubUrl}/Retrieval-Augmented-Generation`} target="_blank" rel="noreferrer">
                Explorer le projet <ArrowUpRight />
              </a>
            </div>
            <div className="tags"><span>Python</span><span>FAISS / BM25</span><span>Ollama</span><span>Streamlit</span></div>
          </div>
          <ProjectVideo demo={projectDemos[1]} />
        </article>
      </section>

      <section className="ukra-section section-shell" id="ukra" aria-labelledby="ukra-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Business intelligence · Visualisation</p>
            <h2 id="ukra-title">Où, quand,<br />dans quelles conditions ?</h2>
          </div>
          <p>Explorer les accidents routiers au Royaume-Uni en 2021 et 2022,
            du panorama national aux différences entre districts.</p>
        </div>
        <article className="ukra-showcase">
          <div className="ukra-summary">
            <div>
              <p className="research-category">07 / R Shiny · Projet universitaire</p>
              <h3>UKRA</h3>
              <p>Un tableau de bord interactif pour suivre le nombre d&apos;accidents,
                leur gravité et leur répartition dans le temps et l&apos;espace.
                Les filtres mettent à jour les indicateurs, les graphiques et la carte.</p>
              <p className="research-credit">Réalisé en binôme avec Anya Levêque.</p>
            </div>
            <div>
              <ul className="project-points">
                <li>Indicateurs de synthèse et évolution mensuelle</li>
                <li>Cartographie et comparaison des districts</li>
                <li>Analyse selon la météo, la luminosité et les caractéristiques routières</li>
              </ul>
              <p className="demo-note">Les volumes et associations observés ne mesurent pas
                le risque par trajet et ne permettent pas d&apos;établir des causes.</p>
              <div className="project-links">
                <a href="https://datascienceappli.shinyapps.io/Securite_routiere/" target="_blank" rel="noreferrer">
                  Tester l&apos;application <ArrowUpRight />
                </a>
                <a href={`${githubUrl}/UKRA`} target="_blank" rel="noreferrer">
                  Voir le code <GithubMark />
                </a>
              </div>
              <div className="tags"><span>R</span><span>Shiny</span><span>Plotly</span><span>Leaflet</span></div>
            </div>
          </div>
          <ProjectVideo demo={projectDemos[2]} />
        </article>
      </section>

      <section className="applied section-shell" aria-labelledby="applied-title">
        <p className="eyebrow"><span /> En complément</p>
        <h2 id="applied-title">Des méthodes aux usages.</h2>
        <p className="applied-intro">Un projet complémentaire pour explorer les algorithmes de recherche de chemin.</p>
        <div className="applied-grid">
          {appliedProjects.map((project) => (
            <article className="applied-card" key={project.repo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.tools}</small>
              <a href={`${githubUrl}/${project.repo}`} target="_blank" rel="noreferrer"
                 aria-label={`Consulter le projet ${project.title}`}>
                Voir le projet <ArrowUpRight />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="approach section-shell" id="approche">
        <div className="approach-intro">
          <p className="eyebrow light"><span /> Manière de travailler</p>
          <h2>Un modèle ne suffit pas. Il faut savoir l&apos;évaluer.</h2>
          <p>
            La question guide le choix de la méthode. Je cherche à relier les hypothèses
            mathématiques au code, à vérifier les calculs et à distinguer ce que les
            résultats montrent de ce qu&apos;ils ne permettent pas de conclure.
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
          <h2>Une formation mathématique, le goût de l&apos;expérimentation.</h2>
          <div className="about-copy">
            <p>
              Après une licence en mathématiques et informatique, je poursuis un master
              en Data Science et Modélisation Statistique. Mes travaux portent notamment
              sur l&apos;estimation non paramétrique, les GLM et l&apos;analyse de données.
            </p>
            <p>
              Je développe également ma pratique du machine learning et de PyTorch,
              avec des comparaisons de modèles tabulaires, de réseaux denses et convolutifs.
              L&apos;algorithmique complète cette démarche : comprendre les étapes d&apos;un
              calcul, ses garanties et ses compromis.
              Je recherche un stage de M2 pour approfondir la préparation et la
              structuration des données, ainsi que la modélisation et l&apos;évaluation,
              sur un problème scientifique ou appliqué.
            </p>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div>
          <p className="eyebrow light"><span /> Travaillons ensemble</p>
          <h2>Un stage dans la data&nbsp;?</h2>
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
