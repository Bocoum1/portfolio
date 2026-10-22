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
  details: { path: string; label: string };
  tags: string[];
};

const researchProjects: ResearchProject[] = [
  {
    id: "01",
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
    id: "02",
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
    id: "03",
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
    details: { path: "Mnist/blob/main/docs/protocol.md", label: "Protocole et limites" },
    tags: ["PyTorch", "CNN", "Validation", "Analyse des erreurs"],
  },
  {
    id: "04",
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
    title: "Local Hybrid RAG",
    description: "Recherche documentaire hybride, génération locale et citations consultables.",
    repo: "Retrieval-Augmented-Generation",
    tools: "Python · FAISS · BM25 · Ollama",
  },
  {
    title: "UKRA",
    description: "Analyse spatiale et temporelle des accidents routiers dans un tableau de bord interactif.",
    repo: "UKRA",
    tools: "R · Shiny · Plotly · Leaflet",
  },
  {
    title: "MoreMovies",
    description: "Intégration de trois sources et analyses multidimensionnelles des ventes et locations.",
    repo: "moremovies",
    tools: "SQL · Pentaho PDI · Mondrian",
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
          </p>
          <p className="availability">Stage de fin d&apos;études · Janvier 2027 · 4 à 6 mois</p>
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
            <p className="eyebrow"><span /> Travaux sélectionnés</p>
            <h2>Des hypothèses.<br />Des résultats vérifiables.</h2>
          </div>
          <p>
            Statistiques, machine learning, deep learning et algorithmique :
            des questions précises, du code, des expériences et une lecture critique
            des résultats. Les applications viennent en complément.
          </p>
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
                  <a href={`${githubUrl}/${project.details.path}`} target="_blank" rel="noreferrer">
                    {project.details.label} <ArrowUpRight />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="section-heading complementary-heading">
          <div>
            <p className="eyebrow"><span /> Algorithmique</p>
            <h2>Un chemin court.<br />Mais à quel coût ?</h2>
          </div>
          <p>Comparer les stratégies de recherche, comprendre le rôle des heuristiques
            et observer les compromis entre coût du chemin et exploration.</p>
        </div>

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
              <a href="https://github.com/Bocoum1/Pathfinding" target="_blank" rel="noreferrer">
                Projet initial <ArrowUpRight />
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

      <section className="applied section-shell" aria-labelledby="applied-title">
        <p className="eyebrow"><span /> En complément</p>
        <h2 id="applied-title">Des méthodes aux usages.</h2>
        <p className="applied-intro">Trois applications pour préparer, explorer et restituer les données.</p>
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
              Je recherche un stage de M2 pour approfondir la modélisation et
              l&apos;évaluation sur un problème scientifique ou appliqué.
            </p>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div>
          <p className="eyebrow light"><span /> Travaillons ensemble</p>
          <h2>Un stage en data science, statistiques ou apprentissage&nbsp;?</h2>
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
