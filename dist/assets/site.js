// Presentation only. No analytics scripts, cookies, scientific execution or remote API.
document.documentElement.classList.add("js");

const spanish = {
  skip: "Saltar al contenido",
  menu: "Menú",
  navWorkbench: "El entorno",
  navMethod: "Método",
  navScience: "Evidencia",
  navGuide: "Descargas y guía",
  source: "Código",
  heroFirst: "Docking molecular.",
  heroSecond: "En tus manos.",
  heroCopy: "Entorno de escritorio de código abierto para preparación explícita de receptores y quimiotecas, ejecución local en Vina, AutoDock4, AutoDock-GPU y GNINA, y trazabilidad verificada por bytes.",
  statusLabel: "Estado de distribución",
  statusValue: "Pre-release offline v0.1.0-beta.2 · Windows 11 x64 y Linux x86_64 RC",
  scopeLabel: "Modelo de ejecución",
  scopeValue: "Cálculo local · Código MIT · Paquetes offline",
  readGuide: "Manual de usuario (PDF, 34 págs.)",
  requestAccess: "Descargar v0.1.0-beta.2",
  inspect: "Inspeccionar",
  prepare: "Preparar",
  define: "Definir",
  screen: "Screening",
  redock: "Redocking",
  review: "Revisar",
  methods: "Métodos",
  plateModeGroup: "Modo de visualización de la lámina",
  modeMotion: "Tutorial",
  modeStill: "Captura",
  enlarge: "Ampliar la captura real",
  inspectTitle: "Empieza por lo que realmente existe.",
  inspectDescription: "Abre coordenadas PDB o mmCIF, o recupera estructuras de RCSB o AlphaFold DB. Inspecciona cadenas, aguas, ligandos y defectos antes de crear derivados.",
  inspectPoint1: "Inspección estructural 3D con Mol*",
  inspectPoint2: "Coordenadas importadas inmutables",
  inspectPoint3: "Diagnósticos vinculados al visor",
  inspectCaveat: "Inspección en solo lectura de 7AQF; los archivos originales nunca se modifican.",
  walkthrough: "Leer el manual ilustrado de 34 páginas",
  stageCaption: "Interfaz real · 7AQF · Inspección de la estructura",
  controlTitle: "Método y ejecución",
  controlIntro: "El trabajo mecánico se automatiza; las decisiones químicas y las escalas permanecen explícitas.",
  table1Caption: "Tabla 1 · Contrato científico explícito",
  colPrinciple: "Garantía",
  colContract: "Contrato Ankora (frente a atajos silenciosos de caja negra)",
  ctrl1Title: "Identidad de artefactos",
  ctrl1Keep: "Cada importación y derivado queda bloqueado con SHA-256; editar un receptor, estado químico o caja marca como obsoletos los resultados dependientes sin sobrescribir archivos.",
  ctrl2Title: "Química selectiva",
  ctrl2Keep: "Reparación o exclusión por residuo, revisión PROPKA de pKa, candidatos de protonación Dimorphite-DL y elección explícita de estereocentros en lugar de reconstrucción silenciosa.",
  ctrl3Title: "Escalas separadas",
  ctrl3Keep: "Vina, AutoDock4/GPU y GNINA conservan sus unidades nativas sin puntuación consenso; campañas CPU pareadas reportan correlación de Spearman sin caída silenciosa desde GPU.",
  ctrl4Title: "RMSD cristalográfico in-place",
  ctrl4Keep: "La validación calcula el RMSD de átomos pesados con simetría en el marco cristalográfico — nunca superponiendo poses — separando muestreo geométrico y ranking Top-1.",
  ctrl5Title: "Methods derivados del registro",
  ctrl5Keep: "El screening conserva entradas fallidas y sin puntuación en el censo y redacta Methods desde registros verificados con huecos explícitos cuando faltan datos.",
  filtersAlt: "Esquema del filtrado, selección explícita y preparación independiente de confórmeros; no es un resultado calculado",
  filtersCaption: "Figura 2 · Esquema del flujo · no es un resultado calculado",
  filterTitle: "(a) Filtrado.",
  filterCopy: "Reglas Lipinski, Veber, Ghose, Muegge, QED y alertas PAINS/Brenk definen un manifiesto registrado sin alterar la quimioteca original.",
  chemistryTitle: "(b) Confórmero.",
  chemistryCopy: "Inspecciona masa, carga y estereoquímica; genera coordenadas 3D ETKDGv3, minimiza con MMFF y escribe PDBQT mediante Meeko.",
  parallelTitle: "(c) Presupuesto paralelo.",
  parallelCopy: "Preparación multinúcleo acotada y seguimiento por molécula mantienen cada fallo visible en el registro de la campaña.",
  table2Caption: "Tabla 2 · Motores locales de docking",
  colEngine: "Motor",
  colVersion: "Versión",
  colPlatform: "Plataformas y ejecución",
  colScale: "Escala nativa",
  vinaCopy: "Windows 11 x64 y Linux · docking y screening multinúcleo acotado en CPU",
  vinaScale: "Vina kcal/mol",
  cpuCopy: "Windows 11 x64 y Linux · CPU · mapas AutoGrid4 reutilizables y comparación Spearman",
  ad4Scale: "AD4 kcal/mol · clústeres",
  gpuCopy: "OpenCL compatible en Windows y CUDA 12 en Linux (sm_75–sm_120)",
  adgpuScale: "Familia AD4 · ejecuciones",
  gninaCopy: "Linux x86_64 RC · CPU y CUDA 12.8 · refinamiento CUDA y ensambles CNN",
  gninaScale: "CNNscore · CNNaffinity · CNN_VS",
  engineNote: "GNINA 1.3.3 está disponible solo en Linux (paquete offline CUDA 12.8 opcional en 1 clic; pospuesto en Windows). Las puntuaciones Vina, energías AutoDock4 y métricas CNN de GNINA no son intercambiables. No se presupone reproducibilidad bit a bit en GPU.",
  scienceTitle: "Evidencia y límites",
  scienceIntro: "Protocolos, resultados cercanos al umbral, mal ranking y fallos permanecen en el registro público.",
  table3Caption: "Tabla 3 · Registros científicos y de plataforma congelados",
  colRecord: "Registro",
  colScope: "Alcance y limitaciones declaradas",
  colStatus: "Estado",
  colSource: "Fuente",
  sciGroup: "Registros de validación científica",
  engGroup: "Verificación de ingeniería de plataforma",
  case1Copy: "Registros retrospectivos congelados; se declaran los límites de comparabilidad del estado químico y del veredicto RMSD histórico en Vina.",
  case1Status: "Congelado, con límites conocidos",
  case2Copy: "Linaje receptor/ligando prerregistrado que conserva resultados cercanos al umbral y no recuperación GPU junto a recuperación y mal ranking en CPU.",
  case2Status: "Protocolo completado",
  case3Copy: "Cohorte primaria Vina en tres blancos. Señal retrospectiva modesta de ranking, con incertidumbre bootstrap y los 165 compuestos sin puntuación conservados.",
  case3Status: "Cohorte retrospectiva",
  case4Copy: "Matriz de capacidades y pruebas automatizadas en Windows 11 x64 y Linux WSL2/WSLg; la estación Linux física sin WSL (Gate D6) sigue pendiente.",
  case4Status: "Linux RC · Gate D6 pendiente",
  case5Copy: "Flexibilidad explícita de ligando y FlexRes, calibración fuera de muestra y --score_only, PoseBusters + tensión MMFF94s acoplados, reglas ProLIF, consenso en rangos PC-Q/PC-ECR/PC-L2, expansión hit-to-analog con sitio POSE_FOCUSED (ADR-033), Export v5/v6 y harness externo ADR-031 verificados en Windows 11 y Linux WSL2; aún no incluidos en los instaladores v0.1.0-beta.2.",
  case5Status: "M0–M6.5 verificado Dual-OS · rama dev",
  openRecord: "Registro",
  openMatrix: "Matriz",
  scienceBoundary: "Las puntuaciones de docking no son afinidades experimentales y los diagramas geométricos no son afinidad medida ni actividad biológica. Estos casos no establecen rendimiento prospectivo ni generalidad entre blancos.",
  allEvidence: "Leer VALIDATION_STATUS.md ↗",
  platformStatusLink: "Leer PLATFORM_STATUS.md ↗",
  betaTitle: "Para trabajo real.\nProbado con cuidado.",
  resourcesIntro: "Manual ilustrado de 34 páginas, 130 registros indexados y código MIT.",
  betaEyebrow: "Descargas offline · v0.1.0-beta.2",
  betaCopy: "Descarga los paquetes offline autocontenidos compilados desde el commit unificado 36f1c0e9b11a para Windows 11 x64 y Linux x86_64 (release candidate para Ubuntu 24.04 LTS, pendiente de Gate D6 físico).",
  winDownload: "Windows 11 x64 (.exe · 407 MiB)",
  debDownload: "Ubuntu / Debian (.deb · 272 MiB)",
  winLedgerTitle: "Windows 11 x64 · instalador offline por usuario",
  winSourcesLink: "Fuentes de terceros (.zip, 232 MiB)",
  linLedgerTitle: "Linux x86_64 RC · portable y GNINA 1.3.3 CUDA 12.8",
  tarDownload: ".tar.zst sin sudo (314 MiB)",
  gninaPackLabel: "Pack GNINA en 1 clic:",
  demoCaseLink: "Demo verificable 7AQF (.zip, 393 KiB)",
  checksumsLink: "SHA256SUMS.txt",
  releaseNotesLink: "Guía de instalación y los 13 archivos",
  betaNote: "El instalador de Windows no tiene firma digital (SmartScreen mostrará un aviso al abrirlo por primera vez; verifica antes el SHA-256). Sigue la política de software de tu institución y no desactives la seguridad del sistema. Los controladores GPU dependen del fabricante. macOS no está soportado.",
  resourcesEyebrow: "Referencias primarias",
  pdfTitle: "Manual ilustrado de usuario de Ankora (PDF) ↗",
  pdfCopy: "34 páginas, 20 figuras reales en Windows Obsidian y Linux GNINA 1.3.3 con precauciones explícitas.",
  repoTitle: "Repositorio de código Olascoaga/Ankora ↗",
  repoCopy: "Licencia MIT · 29 decisiones de arquitectura (ADR) · contratos de trazabilidad y CI en Windows/Linux.",
  citationTitle: "Metadatos de citación (CITATION.cff) ↗",
  citationCopy: "Cita la versión o commit exacto (ORCID 0009-0008-5522-7938) junto con cada motor registrado en Methods.",
  v02BranchTitle: "Rama activa v0.2 (codex/v0.2-dev) ↗",
  v02BranchCopy: "ADR-030–033 · M0–M6.5 (FlexRes, Calibración, PoseBusters, reglas ProLIF, consenso PC-Q, expansión hit-to-analog POSE_FOCUSED, Export v5/v6 y harness ADR-031) verificados en Windows/Linux (solo código fuente; siguen instaladores v0.2 y Gate D6).",
  faq1: "¿Necesito instalar Python, Java o toolkits CUDA?",
  answer1: "No para los paquetes offline. El instalador beta de Windows 11 y los paquetes release candidate de Linux x86_64 (.deb y .tar.zst en espacio de usuario) incluyen Python privado, Java 21, herramientas de preparación, Vina, AutoDock4, AutoDock-GPU y P2Rank. En Linux, GNINA 1.3.3 y sus 17 bibliotecas CUDA 12.8 / cuDNN 9 se importan en un clic desde un archivo offline sin sudo; solo se requiere el controlador NVIDIA del sistema para usar GPU.",
  faq2: "¿Mi investigación sale de mi computadora?",
  answer2: "La preparación y el docking se ejecutan localmente. Ankora no tiene telemetría ni subidas automáticas a la nube. Obtener una estructura de RCSB o AlphaFold es una acción de red explícita. Por separado, esta web utiliza un contador de visitas externo, explicado al pie; no recibe datos científicos de la aplicación.",
  faq3: "¿Cuál es el estado de Windows 11, Linux y macOS?",
  answer3: "Windows 11 x64 es la plataforma principal de escritorio en esta pre-release (instalador offline sin firma digital). Linux x86_64 es un release candidate funcionalmente completo integrado en main, verificado en limpio sobre WSL2/WSLg con ejecuciones CUDA reales en RTX 5050, y aguarda la atestación en una estación Linux física sin WSL (Gate D6) antes de declarar soporte oficial completo. macOS no está soportado.",
  faq4: "¿Qué significa código abierto aquí?",
  answer4: "El código de Ankora está disponible bajo licencia MIT. Los componentes de terceros incluidos conservan sus propias licencias, avisos y obligaciones de código fuente. Cita el software y las herramientas usados al publicar investigación.",
  footerCopy: "Docking molecular, con el científico al mando.",
  orcid: "ORCID 0009-0008-5522-7938",
  license: "Licencia MIT",
  colophonSystem: "Compuesto con tipografías locales del sistema. Cero scripts o fuentes de terceros; solo la imagen del contador declarada en este pie realiza una petición externa.",
  reportIssue: "Reportar un problema",
  contact: "Contacto",
  visitorsTitle: "Visitas al sitio · imagen de terceros",
  visitorsCopy: "Visitas y países aproximados proporcionados por Flag Counter desde el 13 de octubre de 2026; no incluye visitas anteriores. Las vistas cuentan cargas de la imagen con deduplicación diaria — incluye comprobaciones de configuración; no son descargas, usuarios de Ankora ni ubicaciones exactas.",
  visitorPrivacyTitle: "Acerca de la privacidad de las visitas",
  visitorPrivacyCopy: "Cargar esta imagen envía tu IP e información del navegador a Flag Counter (Boardhost) para estimar el país sin GPS. Su política describe ausencia de cookies en el widget, sin registro de IP originales y un hash temporal derivado de la IP para deduplicación diaria; sus páginas externas de estadísticas pueden contener publicidad y cookies. Las VPN, bloqueadores y cachés afectan los conteos, y el contador no recibe datos científicos de Ankora.",
  visitorPrivacyLink: "Leer política de privacidad del proveedor ↗",
  visitorStatistics: "Abrir estadísticas completas de visitas ↗",
  visitorUnavailable: "No se pudo cargar el mapa de visitas. Tu navegador puede bloquearlo o el proveedor puede no estar disponible. Aún puedes abrir sus estadísticas abajo.",
  actualScreenshot: "Interfaz real de Ankora",
  close: "Cerrar · Esc",
};

function originalText(node) {
  // Closed disclosures have no rendered innerText. Read the source, retaining
  // intentional line breaks, before switching languages without changing it.
  const copy = node.cloneNode(true);
  for (const br of copy.querySelectorAll("br")) br.replaceWith("\n");
  return copy.textContent;
}

const english = Object.fromEntries([...document.querySelectorAll("[data-i18n]")].map(node => [node.dataset.i18n, originalText(node)]));
for (const node of document.querySelectorAll("[data-alt-i18n]")) english[node.dataset.altI18n] = node.alt;
for (const node of document.querySelectorAll("[data-label-i18n]")) english[node.dataset.labelI18n] ??= node.getAttribute("aria-label");

const stages = {
  inspect: {
    image: "structure.jpg",
    size: [1920, 1200],
    number: "01",
    sha256: "d61219bb0bbbe51c8842e3e0bdbcb67687e61a2a2a43798f0d73ae6314de8f6a",
    context: { en: "Windows 11 x64", es: "Windows 11 x64" },
    video: "walkthrough-01-inspect.mp4",
    videoSize: [1280, 720],
    videoSha256: "d8c544a2889b23a1c8e7bef504fd44363e07b07f33aab95783b018e2b129f5ba",
    videoContext: { en: "Windows 11 x64 · 7AQF walkthrough", es: "Windows 11 x64 · tutorial 7AQF" },
    videoCaption: {
      en: "Walkthrough · 7AQF · 3D structure & RV2 A:401 inspection",
      es: "Tutorial real · 7AQF · Inspección 3D de la estructura y RV2 A:401",
    },
    videoAlt: {
      en: "Recorded Ankora Structure workspace walkthrough orbiting 7AQF and focusing co-crystallized ligand RV2 A:401",
      es: "Grabación real del espacio Structure en Ankora orbitando 7AQF y enfocando el ligando cocristalizado RV2 A:401",
    },
    en: [
      "Start with what is actually there.",
      "Open PDB or mmCIF coordinates, or retrieve structures from RCSB or AlphaFold DB. Inspect chains, waters, ligands and defects before creating derivatives.",
      ["Mol* 3D structural inspection", "Immutable imported coordinates", "Viewer-linked defect diagnostics"],
      "Actual interface · 7AQF · Structure inspection",
      "Actual Ankora Structure workspace inspecting the deposited 7AQF structure",
      "Read-only 7AQF inspection; original files are never modified in place.",
    ],
    es: [
      spanish.inspectTitle,
      spanish.inspectDescription,
      [spanish.inspectPoint1, spanish.inspectPoint2, spanish.inspectPoint3],
      spanish.stageCaption,
      "Interfaz real de Ankora: inspección de la estructura depositada 7AQF",
      spanish.inspectCaveat,
    ],
  },
  prepare: {
    image: "receptor.jpg",
    size: [1920, 1200],
    number: "02",
    sha256: "b684821fe48b0ec11c778417caa4aa772c689a9f6327a840514496dabdf23b08",
    context: { en: "Windows 11 x64", es: "Windows 11 x64" },
    video: "walkthrough-02-prepare.mp4",
    videoSize: [1280, 720],
    videoSha256: "b94f3aa492b26eab4f56fc6a47da54d0ba117e456caeb44e5ab432f3ab0e328e",
    videoContext: { en: "Windows 11 x64 · 7AQF walkthrough", es: "Windows 11 x64 · tutorial 7AQF" },
    videoCaption: {
      en: "Walkthrough · 7AQF · Explicit receptor decisions & 3D overlay",
      es: "Tutorial real · 7AQF · Decisiones del receptor y superposición 3D",
    },
    videoAlt: {
      en: "Recorded Ankora Receptor workspace walkthrough showing structural observations, PROPKA states and prepared/original 3D overlay",
      es: "Grabación real del espacio Receptor en Ankora mostrando observaciones estructurales, estados PROPKA y superposición 3D",
    },
    en: [
      "Chemistry deserves an explicit decision.",
      "Choose chains, waters, terminal OXT policy and per-residue actions explicitly. Review PROPKA protonation proposals and record every preparation stage.",
      ["Selective repair, never silent loop fabrication", "PDB2PQR / PROPKA titratable-state review", "Meeko docking-ready receptor PDBQT"],
      "Actual interface · 7AQF · Explicit receptor preparation",
      "Actual Ankora receptor workspace with structural observations and preparation decisions",
      "Upstream receptor changes automatically mark dependent docking runs stale.",
    ],
    es: [
      "La química merece una decisión explícita.",
      "Elige cadenas, aguas, política de OXT terminal y acciones por residuo de forma explícita. Revisa propuestas PROPKA y registra cada etapa.",
      ["Reparación selectiva, sin fabricar lazos en silencio", "Revisión de estados titulables PDB2PQR / PROPKA", "Receptor PDBQT listo para docking con Meeko"],
      "Interfaz real · 7AQF · Preparación explícita del receptor",
      "Interfaz real de Ankora: observaciones estructurales y decisiones de preparación del receptor",
      "Cualquier cambio en el receptor marca como obsoletos los resultados dependientes.",
    ],
  },
  define: {
    image: "binding-site.jpg",
    size: [1920, 1200],
    number: "03",
    sha256: "0014f046adab8d677c486c96242f0d5f220a11078afabf9b4e965e774dcc3706",
    context: { en: "Windows 11 x64", es: "Windows 11 x64" },
    video: "walkthrough-03-define.mp4",
    videoSize: [1280, 720],
    videoSha256: "b7928144913bd8af40993664c85f25e09252964a6e8d3fecba036a6c63270639",
    videoContext: { en: "Windows 11 x64 · 7AQF walkthrough", es: "Windows 11 x64 · tutorial 7AQF" },
    videoCaption: {
      en: "Walkthrough · 7AQF · Binding-site box from RV2 A:401 (5 Å)",
      es: "Tutorial real · 7AQF · Caja de búsqueda desde RV2 A:401 (5 Å)",
    },
    videoAlt: {
      en: "Recorded Ankora Binding site walkthrough generating and orbiting an 8,289.6 cubic angstrom search box around RV2 A:401",
      es: "Grabación real del espacio Binding site en Ankora generando y orbitando la caja de búsqueda alrededor de RV2 A:401",
    },
    en: [
      "Make the search space visible.",
      "Define a docking box from a co-crystallized ligand, selected residues, full protein, manual coordinates or P2Rank pockets. Translate, resize and lock it.",
      ["Interactive 3D box translation and resizing", "Explicit X/Y/Z center, size and Å³ volume", "Recorded nearby pocket residues"],
      "Actual interface · 7AQF · Editable binding-site box",
      "Actual Ankora binding-site workspace with a visible orange search box and explicit coordinates",
      "Non-persistent RV2 A:401 preview box with 5 Å padding on 7AQF.",
    ],
    es: [
      "Haz visible el espacio de búsqueda.",
      "Define la caja desde un ligando cocristalizado, residuos seleccionados, proteína completa, coordenadas manuales o cavidades P2Rank. Ajústala y confírmala.",
      ["Traslación y ajuste 3D de la caja en vivo", "Centro X/Y/Z, dimensiones y volumen en Å³", "Residuos cercanos del bolsillo registrados"],
      "Interfaz real · 7AQF · Caja de búsqueda editable",
      "Interfaz real de Ankora: caja de búsqueda naranja y coordenadas explícitas del sitio de unión",
      "Vista previa RV2 A:401 con margen de 5 Å sobre la estructura 7AQF.",
    ],
  },
  screen: {
    image: "gnina-screening.png",
    size: [1280, 800],
    number: "04",
    sha256: "ae45c1cdf7633d0cb6d551f319775b0104ae783d0b8f7d7c95e2ecece84842e6",
    context: { en: "Linux x86_64 WSLg · GNINA 1.3.3 CUDA", es: "Linux x86_64 WSLg · GNINA 1.3.3 CUDA" },
    video: "walkthrough-04-docking.mp4",
    videoSize: [1280, 720],
    videoSha256: "00b539a2e5165bb1726ec429ba35dc701454198e5ce888efa1361b396b6b829f",
    videoContext: { en: "Windows 11 x64 · AutoDock Vina 1.2.7", es: "Windows 11 x64 · AutoDock Vina 1.2.7" },
    videoCaption: {
      en: "Walkthrough · 7AQF · Vina 1.2.7 execution, poses & CLI (Still shows Linux GNINA screening)",
      es: "Tutorial real · 7AQF · Ejecución Vina 1.2.7, poses y CLI (Captura muestra GNINA en Linux)",
    },
    videoAlt: {
      en: "Recorded Ankora Docking walkthrough running AutoDock Vina 1.2.7 on 7AQF/RV2, toggling poses in 3D and inspecting the reproducible CLI command",
      es: "Grabación real del espacio Docking en Ankora ejecutando AutoDock Vina 1.2.7 sobre 7AQF/RV2, alternando poses en 3D y mostrando el comando CLI",
    },
    en: [
      "Screen without merging score scales.",
      "Run multi-ligand campaigns with Vina, AutoDock4, AutoDock-GPU or Linux GNINA 1.3.3. Inspect CNNscore, CNNaffinity (pK), CNN_VS and kcal/mol in separate columns.",
      ["Linux RC: GNINA 1.3.3 CPU & CUDA 12.8", "CNN_VS hit ranking & built-in CNN ensembles", "Per-ligand failures and GPU evidence retained"],
      "Actual Linux WSLg interface · GNINA 1.3.3 CUDA screening on 1HSG",
      "Actual Ankora Linux WSLg interface showing an 11-compound GNINA 1.3.3 CUDA screening campaign on 1HSG with separate CNN and energy columns",
      "Captured in Linux WSL2/WSLg (RTX 5050); bare-metal Linux Gate D6 remains pending.",
    ],
    es: [
      "Ejecuta campañas sin mezclar escalas.",
      "Lanza campañas multiligando con Vina, AutoDock4, AutoDock-GPU o GNINA 1.3.3 en Linux. Inspecciona CNNscore, CNNaffinity (pK), CNN_VS y kcal/mol por separado.",
      ["Linux RC: GNINA 1.3.3 en CPU y CUDA 12.8", "Priorización por CNN_VS y ensambles CNN", "Fallos por molécula y evidencia GPU conservados"],
      "Interfaz real en Linux WSLg · Screening CUDA con GNINA 1.3.3 sobre 1HSG",
      "Interfaz real de Ankora en Linux WSLg mostrando una campaña CUDA de 11 compuestos con GNINA 1.3.3 sobre 1HSG y columnas CNN y de energía separadas",
      "Captura en Linux WSL2/WSLg (RTX 5050); el Gate D6 en estación física sigue pendiente.",
    ],
  },
  redock: {
    image: "redocking.jpg",
    size: [1297, 656],
    number: "05",
    sha256: "e2d039f96ff5a7b9822ecddcf908bc87d8064f137426f81366e4002f4006224d",
    context: { en: "Windows 11 x64", es: "Windows 11 x64" },
    video: "walkthrough-05-redock.mp4",
    videoSize: [1280, 720],
    videoSha256: "9f99e809b30729de249877d55fde23d16e6f3568b0cd54c795e208bada45f475",
    videoContext: { en: "Windows 11 x64 · 7AQF walkthrough", es: "Windows 11 x64 · tutorial 7AQF" },
    videoCaption: {
      en: "Walkthrough · 7AQF · Separate Sampling vs Ranking RMSD verdicts",
      es: "Tutorial real · 7AQF · Veredictos separados de Sampling y Ranking RMSD",
    },
    videoAlt: {
      en: "Recorded Ankora Validation walkthrough inspecting separate Sampling and Ranking verdicts and in-place heavy-atom RMSD per pose",
      es: "Grabación real del espacio Validation en Ankora inspeccionando veredictos separados de Sampling y Ranking y RMSD in-place por pose",
    },
    en: [
      "Judge sampling separately from ranking.",
      "Evaluate single-ligand runs against an immutable crystallographic reference using symmetry-aware in-place heavy-atom RMSD — never pose superposition.",
      ["In-place heavy-atom RMSD (RDKit symmetry)", "Separate Sampling vs Ranking verdicts", "Top-1, Top-5 and best-overall pose tracking"],
      "Actual interface · 7AQF · Redocking (Sampling passed, Ranking failed)",
      "Actual Ankora Validation workspace reopening SERPINE1 7AQF/RV2 AutoDock 4.2.6 redocking with Sampling Passed at 0.454 Å and Ranking Failed at 3.139 Å",
      "SERPINE1 7AQF/RV2 AutoDock 4.2.6: geometric recovery 0.454 Å vs top-1 misranking 3.139 Å.",
    ],
    es: [
      "Evalúa muestreo y ranking por separado.",
      "Compara ejecuciones frente a una referencia cristalográfica inmutable mediante RMSD in-place de átomos pesados con simetría, sin superponer poses.",
      ["RMSD in-place con simetría molecular RDKit", "Veredictos separados de Sampling y Ranking", "Seguimiento de Top-1, Top-5 y mejor pose"],
      "Interfaz real · 7AQF · Redocking (Sampling aprobado, Ranking fallido)",
      "Interfaz real de Ankora mostrando la validación por redocking de SERPINE1 7AQF/RV2 en AutoDock 4.2.6 con Sampling aprobado a 0.454 Å y Ranking fallido a 3.139 Å",
      "SERPINE1 7AQF/RV2 AutoDock 4.2.6: recuperación 0.454 Å frente a mal ranking Top-1 de 3.139 Å.",
    ],
  },
  review: {
    image: "pose-review.jpg",
    size: [1672, 1303],
    number: "06",
    sha256: "83a18ac0ff45fa70817013302269512c82e5569ad1bf08493cea8883fc167317",
    context: { en: "Windows 11 x64", es: "Windows 11 x64" },
    video: "walkthrough-06-review.mp4",
    videoSize: [1280, 720],
    videoSha256: "cf4e16642f343a515162941a428f6d5db05ec76dab809870df8e2d591cf24d45",
    videoContext: { en: "Windows 11 x64 · ProLIF 2.2.1", es: "Windows 11 x64 · ProLIF 2.2.1" },
    videoCaption: {
      en: "Walkthrough · 7AQF · Coupled 3D pose & 2D ProLIF 2.2.1 contacts",
      es: "Tutorial real · 7AQF · Pose 3D y contactos 2D ProLIF 2.2.1 vinculados",
    },
    videoAlt: {
      en: "Recorded Ankora Results walkthrough linking the 3D pocket pose with the 2D ProLIF 2.2.1 skeletal interaction diagram and residue focus",
      es: "Grabación real del espacio Results en Ankora vinculando la pose 3D del bolsillo con el diagrama 2D de interacciones ProLIF 2.2.1",
    },
    en: [
      "Read geometry, not just a score.",
      "Open an exact preserved pose from any engine. Link the 3D receptor to a skeletal 2D diagram and contact table, then export figures and hash-verified PDB complexes.",
      ["Exact-pose ProLIF 2.2.1 geometric contacts", "Linked 2D diagram and 3D residue focus", "Publication SVG/PNG/TIFF/PDF and complex PDB"],
      "Actual interface · 7AQF · Exact-pose interaction review",
      "Actual Ankora exact-pose review with linked 3D view and skeletal 2D interaction diagram",
      "Geometric contacts, not measured affinity or biological proof.",
    ],
    es: [
      "Lee la geometría, no solo una puntuación.",
      "Abre una pose exacta conservada de cualquier motor. Vincula el receptor 3D con el diagrama 2D y su tabla atómica; exporta figuras y complejos PDB verificados.",
      ["Contactos geométricos ProLIF 2.2.1 por pose", "Diagrama 2D y enfoque de residuos 3D vinculados", "Figuras SVG/PNG/TIFF/PDF y complejos PDB"],
      "Interfaz real · 7AQF · Revisión de interacciones de una pose exacta",
      "Interfaz real de Ankora: revisión de una pose con visor 3D y diagrama de interacciones 2D vinculados",
      "Contactos geométricos, no afinidad medida ni prueba de actividad biológica.",
    ],
  },
  methods: {
    image: "methods.jpg",
    size: [560, 702],
    number: "07",
    sha256: "4c21d9cd7d82d8455bcba3523c814628fa3a1ebd9ac10a5535111694a4b03026",
    context: { en: "Windows 11 x64", es: "Windows 11 x64" },
    video: "walkthrough-07-methods.mp4",
    videoSize: [1280, 720],
    videoSha256: "f63e56c09063246c1eff482c7de6e403b2f72246b2467953344829185b000e5f",
    videoContext: { en: "Windows 11 x64 · Export v4 & Methods", es: "Windows 11 x64 · Export v4 y Methods" },
    videoCaption: {
      en: "Walkthrough · 7AQF · Export v4 bundle & record-derived Methods",
      es: "Tutorial real · 7AQF · Paquete Export v4 y sección Methods",
    },
    videoAlt: {
      en: "Recorded Ankora Export walkthrough reviewing Export v4 bundle options and scrolling the zero-gap record-derived Methods section",
      es: "Grabación real del espacio Export en Ankora revisando opciones de Export v4 y la sección Methods derivada de registros",
    },
    en: [
      "Export methods derived from real records.",
      "Generate structured Methods prose and Crossref-verified citations directly from immutable SHA-256 artifacts, exact box coordinates and recorded tool versions.",
      ["Byte- and hash-verified lineage reporting", "Explicit [not recorded] gaps instead of guessing", "Portable Export v4 ZIP bundles with verifier"],
      "Actual interface · 7AQF · Record-derived Methods section",
      "Actual Ankora Results inspector rendering the record-derived 7AQF AutoDock Vina 1.2.7 Methods section with 8 cited tools",
      "Derived strictly from SQLite provenance records; never generic boilerplate prose.",
    ],
    es: [
      "Exporta métodos derivados de registros reales.",
      "Genera secciones Methods estructuradas y citas verificadas directamente desde artefactos SHA-256 inmutables, coordenadas exactas y versiones registradas.",
      ["Trazabilidad verificada por bytes y SHA-256", "Huecos [not recorded] explícitos sin suposiciones", "Paquetes ZIP portátiles Export v4 con verificador"],
      "Interfaz real · 7AQF · Sección Methods derivada de registros",
      "Interfaz real de Ankora mostrando la sección Methods derivada de registros de AutoDock Vina 1.2.7 en 7AQF con 8 herramientas citadas",
      "Redactado estrictamente desde la base de trazabilidad; sin plantillas genéricas.",
    ],
  },
};

const stageNames = Object.keys(stages);
const reducedMotionQuery = matchMedia("(prefers-reduced-motion: reduce)");
let language = new URL(location.href).searchParams.get("lang") === "es" ? "es" : "en";
let currentStage = "inspect";
let plateMode = reducedMotionQuery.matches ? "still" : "motion";
const translate = key => (language === "es" ? spanish[key] : english[key]) ?? english[key] ?? key;
const dialog = document.querySelector("#screenshot-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogVideo = document.querySelector("#dialog-video");
const tablist = document.querySelector(".workflow-tabs");
let dialogCaptionKey = "stageCaption";
let dialogMode = plateMode;

function shortProvenance(stage, mode = plateMode) {
  const hash = mode === "motion" ? stage.videoSha256 : stage.sha256;
  const file = mode === "motion" ? stage.video : stage.image;
  const ctx = mode === "motion" ? stage.videoContext[language] : stage.context[language];
  const shortHash = `${hash.slice(0, 8)}…${hash.slice(-4)}`;
  return `${file} · ${ctx} · content id sha256:${shortHash}`;
}

function fullProvenance(stage, mode = plateMode) {
  const note = language === "es"
    ? "identifica los bytes del archivo; no acredita validez química"
    : "identifies file bytes; does not establish chemical validity";
  const file = mode === "motion" ? stage.video : stage.image;
  const dims = mode === "motion" ? stage.videoSize : stage.size;
  const hash = mode === "motion" ? stage.videoSha256 : stage.sha256;
  return `${file} (${dims[0]}×${dims[1]}) · sha256:${hash} — ${note}`;
}

function caption(key, mode = plateMode) {
  if (key === "stageCaption") {
    return mode === "motion" ? stages[currentStage].videoCaption[language] : stages[currentStage][language][3];
  }
  return translate(key);
}

function syncPlateModeButtons() {
  for (const btn of document.querySelectorAll("[data-plate-mode]")) {
    btn.setAttribute("aria-pressed", String(btn.dataset.plateMode === plateMode));
  }
}

function showStage(name, focus = false) {
  currentStage = name;
  const stage = stages[name];
  const content = stage[language];
  const stageIdx = stageNames.indexOf(name);
  tablist.dataset.stageIndex = String(stageIdx);
  tablist.style.setProperty("--stage-index", String(stageIdx));

  for (const tab of document.querySelectorAll("[data-stage]")) {
    const selected = tab.dataset.stage === name;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focus) tab.focus();
  }

  document.querySelector("#workflow-panel").setAttribute("aria-labelledby", `tab-${name}`);
  document.querySelector(".stage-index").textContent = `${language === "es" ? "LÁMINA I" : "PLATE I"} · ${stage.number} / 07`;
  document.querySelector("#stage-title").textContent = content[0];
  document.querySelector("#stage-description").textContent = content[1];
  [...document.querySelectorAll("#stage-points li")].forEach((node, i) => { node.textContent = content[2][i]; });
  document.querySelector("#stage-caveat").textContent = content[5];

  const image = document.querySelector("#workflow-image");
  const video = document.querySelector("#workflow-video");
  image.src = `assets/${stage.image}`;
  image.alt = content[4];
  [image.width, image.height] = stage.size;
  video.setAttribute("aria-label", stage.videoAlt[language]);
  [video.width, video.height] = stage.videoSize;

  syncPlateModeButtons();
  if (plateMode === "motion") {
    image.hidden = true;
    video.hidden = false;
    const nextVideoSrc = `assets/${stage.video}`;
    if (video.dataset.activeSrc !== nextVideoSrc) {
      video.src = nextVideoSrc;
      video.dataset.activeSrc = nextVideoSrc;
      video.load();
    }
    const playAttempt = video.play();
    if (playAttempt && typeof playAttempt.catch === "function") playAttempt.catch(() => {});
  } else {
    video.pause();
    video.hidden = true;
    image.hidden = false;
  }

  document.querySelector("#stage-caption").textContent = caption("stageCaption", plateMode);
  document.querySelector("#stage-provenance").textContent = shortProvenance(stage, plateMode);
}

function setPlateMode(next) {
  plateMode = next === "still" ? "still" : "motion";
  showStage(currentStage);
}

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  for (const node of document.querySelectorAll("[data-i18n]")) node.textContent = translate(node.dataset.i18n);
  for (const node of document.querySelectorAll("[data-alt-i18n]")) node.alt = translate(node.dataset.altI18n);
  for (const node of document.querySelectorAll("[data-label-i18n]")) node.setAttribute("aria-label", translate(node.dataset.labelI18n));
  for (const button of document.querySelectorAll("[data-lang]")) button.setAttribute("aria-pressed", String(button.dataset.lang === next));
  document.querySelector("#site-nav").setAttribute("aria-label", next === "es" ? "Navegación principal" : "Main navigation");
  tablist.setAttribute("aria-label", next === "es" ? "Explorar el flujo de Ankora" : "Explore the Ankora workflow");
  document.querySelector(".language-switch").setAttribute("aria-label", next === "es" ? "Idioma" : "Language");
  document.querySelector(".brand").setAttribute("aria-label", next === "es" ? "Inicio de Ankora" : "Ankora home");
  document.title = next === "es" ? "Ankora — Docking molecular, con el científico al mando" : "Ankora — Molecular docking, with the scientist in control";
  showStage(currentStage);
  if (dialog.open) {
    const stage = stages[currentStage];
    dialogVideo.setAttribute("aria-label", stage.videoAlt[language]);
    dialogImage.alt = stage[language][4];
    document.querySelector("#dialog-caption").textContent = caption(dialogCaptionKey, dialogMode);
    document.querySelector("#dialog-provenance").textContent = fullProvenance(stage, dialogMode);
  }
}

for (const button of document.querySelectorAll("[data-lang]")) button.addEventListener("click", () => {
  setLanguage(button.dataset.lang);
  const url = new URL(location.href);
  if (language === "en") url.searchParams.delete("lang"); else url.searchParams.set("lang", "es");
  history.replaceState(null, "", url);
});

for (const tab of document.querySelectorAll("[data-stage]")) {
  tab.addEventListener("click", () => showStage(tab.dataset.stage));
  tab.addEventListener("keydown", event => {
    const index = stageNames.indexOf(currentStage);
    const destination = event.key === "ArrowRight"
      ? (index + 1) % stageNames.length
      : event.key === "ArrowLeft"
        ? (index + stageNames.length - 1) % stageNames.length
        : event.key === "Home"
          ? 0
          : event.key === "End"
            ? stageNames.length - 1
            : null;
    if (destination !== null) {
      event.preventDefault();
      showStage(stageNames[destination], true);
    }
  });
}

for (const button of document.querySelectorAll("[data-plate-mode]")) {
  button.addEventListener("click", () => setPlateMode(button.dataset.plateMode));
}
reducedMotionQuery.addEventListener("change", event => setPlateMode(event.matches ? "still" : "motion"));

const menu = document.querySelector("[data-js-menu]");
const header = document.querySelector(".site-header");
function closeMenu() {
  header.classList.remove("nav-open");
  menu.setAttribute("aria-expanded", "false");
}
menu.addEventListener("click", () => {
  const open = header.classList.toggle("nav-open");
  menu.setAttribute("aria-expanded", String(open));
});
for (const link of document.querySelectorAll("#site-nav a")) link.addEventListener("click", closeMenu);
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && header.classList.contains("nav-open")) {
    closeMenu();
    menu.focus();
  }
});
matchMedia("(min-width: 821px)").addEventListener("change", closeMenu);

for (const button of document.querySelectorAll("[data-lightbox-target]")) button.addEventListener("click", () => {
  const stage = stages[currentStage];
  dialogMode = plateMode;
  dialogCaptionKey = button.dataset.caption;
  if (dialogMode === "motion") {
    dialogImage.hidden = true;
    dialogVideo.hidden = false;
    const nextVideoSrc = `assets/${stage.video}`;
    if (dialogVideo.dataset.activeSrc !== nextVideoSrc) {
      dialogVideo.src = nextVideoSrc;
      dialogVideo.dataset.activeSrc = nextVideoSrc;
      dialogVideo.load();
    }
    dialogVideo.setAttribute("aria-label", stage.videoAlt[language]);
    const playAttempt = dialogVideo.play();
    if (playAttempt && typeof playAttempt.catch === "function") playAttempt.catch(() => {});
  } else {
    dialogVideo.pause();
    dialogVideo.hidden = true;
    dialogImage.hidden = false;
    const source = document.getElementById(button.dataset.lightboxTarget);
    dialogImage.src = source.currentSrc || source.src;
    dialogImage.alt = source.alt;
  }
  document.querySelector("#dialog-caption").textContent = caption(dialogCaptionKey, dialogMode);
  document.querySelector("#dialog-provenance").textContent = fullProvenance(stage, dialogMode);
  dialog.showModal();
});

dialog.addEventListener("close", () => dialogVideo.pause());
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});

for (const node of document.querySelectorAll("[data-js-menu], [data-js-languages], [data-js-plate-modes]")) node.hidden = false;

const visitorImage = document.querySelector("#visitor-widget img");
function visitorUnavailable() {
  document.querySelector("#visitor-widget").hidden = true;
  document.querySelector("#visitor-unavailable").hidden = false;
}
visitorImage.addEventListener("error", visitorUnavailable);
if (visitorImage.complete && visitorImage.naturalWidth === 0) visitorUnavailable();

setLanguage(language);
