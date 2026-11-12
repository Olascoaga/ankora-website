// Presentation only. No analytics, cookies, scientific execution or remote API.
document.documentElement.classList.add("js");
const spanish = {
  skip: "Saltar al contenido", brand: "Un entorno bajo control científico", menu: "Menú",
  navWorkbench: "El entorno", navScience: "Evidencia científica", navGuide: "Documentación", source: "Código",
  betaTag: "BETA PRIVADA · WINDOWS 11 Y LINUX RC", heroFirst: "Docking molecular.", heroSecond: "En tus manos.",
  heroCopy: "De una estructura depositada a una pose que puedes verificar. Prepara receptores y quimiotecas, ejecuta Vina, AutoDock4, AutoDock-GPU o GNINA localmente y revisa cada decisión con trazabilidad inmutable.",
  explore: "Explorar Ankora", readGuide: "Leer el manual ↗", heroNote: "Código abierto. Cálculo local. Paquetes offline para testers de la beta en Windows 11 y Linux x86_64 RC.",
  heroCaption: "Interfaz real · 7AQF · Una pose conservada, con evidencia 3D y 2D vinculada.",
  geometryNote: "Contactos geométricos, no afinidad medida.", heroAlt: "Interfaz actual de Ankora: pose conservada en 7AQF, receptor 3D, diagrama 2D y 20 contactos geométricos registrados",
  enlarge: "Ampliar la captura real", strip1: "Tus archivos originales no cambian", strip2: "Tus decisiones químicas son explícitas", strip3: "Tus resultados conservan su evidencia",
  flowEyebrow: "01 / EL ENTORNO DE TRABAJO", flowTitle: "Un flujo. No una caja negra.",
  flowIntro: "Pasa de la inspección a la interpretación sin perder la estructura original, el estado químico ni las decisiones que produjeron el resultado.",
  inspect: "Inspeccionar", prepare: "Preparar", define: "Definir", screen: "Screening", redock: "Redocking", review: "Revisar", methods: "Métodos",
  inspectTitle: "Empieza por lo que realmente existe.", inspectDescription: "Abre archivos PDB/mmCIF o recupera una estructura pública de RCSB o AlphaFold DB. Inspecciona cadenas, aguas, ligandos y problemas estructurales antes de crear un derivado.",
  inspectPoint1: "Visualización molecular con Mol*", inspectPoint2: "Coordenadas importadas inmutables", inspectPoint3: "Observaciones estructurales vinculadas al visor",
  walkthrough: "Leer el manual ilustrado de 34 páginas", stageCaption: "Interfaz real con 7AQF · Inspección de la estructura",
  controlEyebrow: "02 / EXPLÍCITO POR DISEÑO", controlTitle: "Por qué importa el control explícito.",
  controlIntro: "Los flujos automatizados suelen ocultar supuestos químicos críticos detrás de un solo botón. Ankora automatiza el trabajo mecánico y mantiene auditable cada decisión científica.",
  avoidLabel: "RIESGO DE CAJA NEGRA", keepLabel: "CONTRATO ANKORA",
  ctrl1Title: "Originales inmutables y obsolescencia explícita", ctrl1Avoid: "Sobrescribir archivos PDB/SDF importados o conservar poses obsoletas tras editar etapas previas.", ctrl1Keep: "Cada importación y derivado queda fijado con SHA-256; cambiar un receptor, estado de ligando o caja marca como obsoletos los resultados dependientes.",
  ctrl2Title: "Química selectiva, nunca suposiciones silenciosas", ctrl2Avoid: "Reconstrucción ciega de lazos, fabricación silenciosa de cadenas laterales o elección arbitraria de estereoisómeros.", ctrl2Keep: "Reparación o exclusión por residuo, revisión PROPKA de pKa, candidatos de protonación con Dimorphite-DL y resolución obligatoria de estereocentros.",
  ctrl3Title: "Escalas separadas y evidencia GPU honesta", ctrl3Avoid: "Mezclar kcal/mol y probabilidades CNN en puntuaciones consenso no validadas o caer silenciosamente a CPU.", ctrl3Keep: "Vina, AutoDock4/GPU y GNINA conservan sus unidades nativas; campañas CPU pareadas reportan correlación de Spearman sin fusionar puntuaciones.",
  ctrl4Title: "RMSD in-place separando muestreo y ranking", ctrl4Avoid: "Superponer poses predichas sobre el ligando cristalográfico, ocultando errores de traslación y colocación en el bolsillo.", ctrl4Keep: "Calcula el RMSD de átomos pesados con simetría en el marco cristalográfico y separa la recuperación geométrica del ranking Top-1.",
  ctrl5Title: "Methods derivados del registro y fallos visibles", ctrl5Avoid: "Eliminar moléculas fallidas de las tablas de screening o emitir párrafos genéricos de metodología.", ctrl5Keep: "Conserva entradas fallidas o sin puntuación en el censo de la campaña y redacta Methods desde registros verificados con huecos explícitos.",
  libraryEyebrow: "03 / SCREENING VIRTUAL", libraryTitle1: "Un compuesto.", libraryTitle2: "O toda una quimioteca.",
  libraryIntro: "Filtra y prepara una quimioteca antes de invertir tiempo en docking. Conserva la selección, cada estado químico y cada molécula fallida en el registro.",
  filterTitle: "Filtra antes de minimizar", filterCopy: "Lipinski, Veber, Ghose, Muegge y QED. Alertas PAINS/Brenk, detección de duplicados y reglas por descriptor orientan una selección explícita.",
  chemistryTitle: "Prepara un confórmero independiente", chemistryCopy: "Inspecciona masa, SMILES, carga y estereoquímica. Genera coordenadas con ETKDGv3, minimiza con MMFF y escribe PDBQT con Meeko.",
  parallelTitle: "Procesa en paralelo, con un presupuesto", parallelCopy: "Preparación multinúcleo acotada y progreso por molécula en docking. Los fallos permanecen visibles en la campaña.",
  selectionLabel: "SELECCIÓN EXPLÍCITA DE LA QUIMIOTECA", filtersAlt: "Esquema del filtrado, selección explícita y preparación independiente de confórmeros; no es un resultado calculado",
  filtersCaption: "Esquema del flujo · Las reglas orientan decisiones; no prueban actividad.", libraryNote: "La quimioteca importada permanece intacta. Aplicar filtros crea un manifiesto de selección independiente y registrado.",
  enginesEyebrow: "04 / EJECUCIÓN LOCAL", enginesTitle: "Elige tu motor.\nConserva su significado.",
  enginesIntro: "Un mismo entorno, distintos protocolos de búsqueda y funciones de puntuación. Sin puntuación combinada ni sustitución silenciosa de GPU por CPU.",
  vinaCopy: "CPU · Windows 11 y Linux · docking individual y screening multinúcleo acotado",
  cpuCopy: "CPU · Windows 11 y Linux · mapas AutoGrid4 reutilizables, clústeres/ejecuciones nativas y comparación Spearman con Vina",
  gpuCopy: "GPU · OpenCL compatible en Windows y CUDA 12 en Linux (sm_75–sm_120) · familia AutoDock4",
  gninaCopy: "Linux x86_64 RC · CPU y CUDA 12.8 · CNNscore, CNNaffinity (pK), CNN_VS, refinamiento CUDA y ensambles CNN",
  engineNote: "GNINA 1.3.3 está disponible solo en Linux (paquete offline CUDA 12.8 opcional en 1 clic; pospuesto en Windows). Las puntuaciones Vina, energías AutoDock4 y métricas CNN de GNINA no son intercambiables. No se presupone reproducibilidad bit a bit en GPU.",
  scienceEyebrow: "05 / EVIDENCIA CIENTÍFICA", scienceTitle: "Evidencia que puedes leer.\nLímites que puedes ver.",
  scienceIntro: "Un cálculo completado no es una afirmación biológica validada. Protocolos, fallos, resultados cercanos al umbral y límites del ranking permanecen en el registro público.",
  case1Copy: "Registros retrospectivos congelados. Se explicitan los límites de comparabilidad del estado químico y la ausencia de un veredicto RMSD histórico de Vina.", case1Status: "Congelado, con límites conocidos",
  case2Copy: "Un linaje receptor/ligando prerregistrado. Se conservan resultados cercanos al umbral y fallos de recuperación GPU, junto a recuperación y mal ranking CPU.", case2Status: "Protocolo completado",
  case3Copy: "11,412 compuestos originales congelados en tres blancos. Señal retrospectiva modesta de ranking, con incertidumbre y todos los compuestos sin puntuación conservados.", case3Status: "Screening retrospectivo",
  case4Copy: "Matriz de plataformas verificada automáticamente y 128 registros técnicos en Windows 11 y Linux WSL2/WSLg. La aceptación en estación Linux física (Gate D6) sigue pendiente.", case4Status: "Linux RC · Gate D6 pendiente",
  scienceBoundary: "Las puntuaciones de docking no son afinidades experimentales. Los diagramas describen geometría, no unión ni actividad. Estos casos no establecen rendimiento prospectivo ni generalidad entre blancos.", allEvidence: "Leer toda la evidencia ↗",
  resourcesEyebrow: "06 / EMPIEZA A EXPLORAR", resourcesTitle: "Hecho para comprenderse.",
  resourcesIntro: "Un manual ilustrado de 34 páginas, 129 registros de validación indexados y código abierto. Empieza por el manual; profundiza en la evidencia.",
  pdfType: "PDF / 34 PÁGINAS", pdfTitle: "El manual ilustrado", pdfCopy: "De la inspección estructural y el redocking a las interacciones de poses y GNINA 1.3.3 en Linux, con 20 figuras reales y precauciones explícitas.", pdfAction: "Abrir el PDF ↗",
  repoTitle: "Dentro de Ankora", repoCopy: "Inspecciona la implementación, los 29 registros de decisiones de arquitectura, los contratos de trazabilidad, el CI en Windows/Linux y el estado por plataforma.", repoAction: "Explorar el repositorio ↗",
  citationType: "INVESTIGACIÓN / CITA", citationTitle: "Cita lo que realmente usaste", citationCopy: "Cita la versión o commit exacto (ORCID del autor 0009-0008-5522-7938) junto con cada motor y herramienta científica registrados en Methods.", citationAction: "Ver los datos de citación ↗",
  betaEyebrow: "DISTRIBUCIÓN ACTUAL / BETA PRIVADA Y LINUX RC", betaTitle: "Para trabajo real.\nProbado con cuidado.",
  betaCopy: "Actualmente Ankora se comparte con testers invitados en Windows 11 x64 (beta privada) y Linux x86_64 (release candidate en main unificado, pendiente de Gate D6 en estación física); todavía no hay un instalador público.",
  betaAction: "Consultar sobre la beta", betaNote: "La beta no tiene firma digital. Sigue la política de software de tu institución; no desactives la seguridad del sistema. Los controladores GPU son responsabilidad del fabricante.",
  faq1: "¿Necesito instalar Python, Java o toolkits CUDA?", answer1: "No para los paquetes offline. El instalador beta de Windows 11 y los paquetes release candidate de Linux x86_64 (.deb y .tar.zst en espacio de usuario) incluyen Python privado, Java 21, herramientas de preparación, Vina, AutoDock4, AutoDock-GPU y P2Rank. En Linux, GNINA 1.3.3 y sus 17 bibliotecas CUDA 12.8 / cuDNN 9 se importan en un clic desde un archivo offline sin sudo; solo se requiere el controlador NVIDIA del sistema para usar GPU.",
  faq2: "¿Mi investigación sale de mi computadora?", answer2: "La preparación y el docking se ejecutan localmente. Ankora no tiene telemetría ni subidas automáticas a la nube. Obtener una estructura de RCSB o AlphaFold es una acción de red explícita. Por separado, esta web utiliza un contador de visitas externo, explicado al pie; no recibe datos científicos de la aplicación.",
  faq3: "¿Cuál es el estado de Windows 11, Linux y macOS?", answer3: "Windows 11 x64 es la plataforma principal de la beta privada. Linux x86_64 es un release candidate funcionalmente completo integrado en main, verificado en limpio sobre WSL2/WSLg con ejecuciones CUDA reales en RTX 5050, y aguarda la atestación en una estación Linux física sin WSL (Gate D6) antes de declarar soporte oficial completo. macOS no está soportado.",
  faq4: "¿Qué significa código abierto aquí?", answer4: "El código de Ankora está disponible bajo licencia MIT. Los componentes de terceros incluidos conservan sus propias licencias, avisos y obligaciones de código fuente. Cita el software y las herramientas usados al publicar investigación.",
  footerCopy: "Docking molecular, con el científico al mando.", reportIssue: "Reportar un problema", license: "Licencia", orcid: "ORCID · 0009-0008-5522-7938", contact: "Contacto", footerNote: "Software local. Métodos abiertos.\nLas decisiones científicas son tuyas.", actualScreenshot: "Interfaz real de Ankora", close: "Cerrar",
  visitorsEyebrow: "SITIO WEB / VISITAS", visitorsTitle: "De dónde llegan las visitas.",
  visitorsCopy: "Visitas registradas y países aproximados, proporcionados por Flag Counter. El conteo comenzó el 13 de octubre de 2026; no incluye las visitas anteriores.",
  visitorsLimit: "Las vistas cuentan cargas de la imagen; el proveedor deduplica visitantes por día. No son descargas, usuarios de Ankora ni ubicaciones exactas. Incluye comprobaciones de configuración y puede tardar unos cinco minutos en actualizarse.",
  visitorPrivacyTitle: "Acerca de la privacidad de las visitas",
  visitorPrivacyCopy: "Cargar esta imagen envía tu IP e información del navegador a Flag Counter (Boardhost), que estima el país sin GPS. Según su política, el contador gratuito no utiliza cookies, no registra las IP originales y publica totales agregados; utiliza temporalmente un hash derivado de la IP para evitar duplicados. Solo mide visitas a la web, no datos científicos de la aplicación.",
  visitorPrivacyLimits: "Las VPN, redes compartidas, bloqueadores y cachés pueden afectar estos conteos aproximados. Las páginas de estadísticas del proveedor pueden contener publicidad y cookies.",
  visitorPrivacyLink: "Leer la política de privacidad del proveedor ↗", visitorStatistics: "Abrir las estadísticas completas de visitas ↗",
  visitorUnavailable: "No se pudo cargar el mapa de visitas. Tu navegador puede bloquearlo o el proveedor puede no estar disponible. Aún puedes abrir sus estadísticas abajo.",
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
  inspect: { image: "structure.jpg", size: [1920, 1200], number: "01", en: ["Start with what is actually there.", "Open PDB/mmCIF files or retrieve a public structure from RCSB or AlphaFold DB. Inspect chains, waters, ligands and structural issues before making a derivative.", ["Mol* molecular visualization", "Immutable imported coordinates", "Viewer-linked structural observations"], "Actual 7AQF interface · Structure inspection", "Actual Ankora Structure workspace inspecting the deposited 7AQF structure"], es: [spanish.inspectTitle, spanish.inspectDescription, [spanish.inspectPoint1, spanish.inspectPoint2, spanish.inspectPoint3], spanish.stageCaption, "Interfaz real de Ankora: inspección de la estructura depositada 7AQF"] },
  prepare: { image: "receptor.jpg", size: [1920, 1200], number: "02", en: ["Chemistry deserves a decision.", "Choose chains, waters, terminal OXT policy and residue actions explicitly. Review PROPKA protonation proposals and preserve every preparation stage and failure.", ["Selective repair, not silent reconstruction", "PDB2PQR / PROPKA titratable-state review", "Meeko docking-ready receptor"], "Actual 7AQF interface · Explicit receptor preparation", "Actual Ankora receptor workspace with structural observations and preparation decisions"], es: ["La química merece una decisión.", "Elige cadenas, aguas, política de OXT terminal y acciones por residuo de manera explícita. Revisa propuestas de protonación PROPKA y conserva cada etapa y fallo.", ["Reparación selectiva, no reconstrucción silenciosa", "Revisión de estados titulables PDB2PQR / PROPKA", "Receptor para docking con Meeko"], "Interfaz real con 7AQF · Preparación explícita del receptor", "Interfaz real de Ankora: observaciones estructurales y decisiones de preparación del receptor"] },
  define: { image: "binding-site.jpg", size: [1920, 1200], number: "03", en: ["Make the search space visible.", "Define a box from a co-crystallized ligand, selected residues, full protein, manual coordinates or a P2Rank pocket. Move, resize and confirm it before docking.", ["Live 3D box translation and resizing", "Numerical coordinates and volume visible", "Explicit final binding-site definition"], "Actual 7AQF interface · Editable binding-site box", "Actual Ankora binding-site workspace with a visible orange search box and explicit coordinates"], es: ["Haz visible el espacio de búsqueda.", "Define la caja desde un ligando cocristalizado, residuos seleccionados, proteína completa, coordenadas manuales o un pocket P2Rank. Muévela, ajusta su tamaño y confírmala.", ["Movimiento y tamaño de la caja en vivo en 3D", "Coordenadas numéricas y volumen visibles", "Definición final explícita del sitio"], "Interfaz real con 7AQF · Caja de búsqueda editable", "Interfaz real de Ankora: caja de búsqueda naranja y coordenadas explícitas del sitio de unión"] },
  screen: { image: "gnina-screening.png", size: [1280, 800], number: "04", en: ["Screen with separate score axes.", "Run multi-ligand campaigns with Vina, AutoDock4, AutoDock-GPU, or Linux GNINA 1.3.3. Inspect per-pose CNNscore, CNNaffinity (pK), CNN_VS and minimized kcal/mol without merging scales.", ["Linux RC: GNINA 1.3.3 CPU & CUDA 12.8", "CNN_VS hit ranking & built-in CNN ensembles", "Per-ligand failures and GPU evidence retained"], "Actual Linux WSLg interface · GNINA 1.3.3 CUDA screening on 1HSG", "Actual Ankora Linux WSLg interface showing an 11-compound GNINA 1.3.3 CUDA screening campaign on 1HSG with separate CNN and energy columns"], es: ["Ejecuta campañas sin mezclar escalas.", "Lanza campañas multiligando con Vina, AutoDock4, AutoDock-GPU o GNINA 1.3.3 en Linux. Inspecciona CNNscore, CNNaffinity (pK), CNN_VS y kcal/mol minimizados por separado.", ["Linux RC: GNINA 1.3.3 en CPU y CUDA 12.8", "Priorización por CNN_VS y ensambles CNN", "Fallos por molécula y evidencia GPU conservados"], "Interfaz real en Linux WSLg · Screening CUDA con GNINA 1.3.3 sobre 1HSG", "Interfaz real de Ankora en Linux WSLg mostrando una campaña CUDA de 11 compuestos con GNINA 1.3.3 sobre 1HSG y columnas CNN y de energía separadas"] },
  redock: { image: "redocking.jpg", size: [1297, 656], number: "05", en: ["Judge sampling separately from ranking.", "Evaluate completed single-ligand runs against an immutable crystallographic reference using symmetry-aware in-place heavy-atom RMSD — never pose superposition.", ["In-place heavy-atom RMSD (RDKit symmetry)", "Separate Sampling vs Ranking verdicts", "Top-1, Top-5 and best-overall pose tracking"], "Actual 7AQF interface · Redocking validation (Sampling passed, Ranking failed)", "Actual Ankora Validation workspace reopening SERPINE1 7AQF/RV2 AutoDock 4.2.6 redocking with Sampling Passed at 0.454 Å and Ranking Failed at 3.139 Å"], es: ["Evalúa muestreo y ranking por separado.", "Compara ejecuciones individuales completadas frente a una referencia cristalográfica inmutable mediante RMSD in-place de átomos pesados con simetría, sin superponer poses.", ["RMSD in-place con simetría molecular RDKit", "Veredictos separados de Sampling y Ranking", "Seguimiento de Top-1, Top-5 y mejor pose"], "Interfaz real con 7AQF · Validación por redocking (Sampling aprobado, Ranking fallido)", "Interfaz real de Ankora mostrando la validación por redocking de SERPINE1 7AQF/RV2 en AutoDock 4.2.6 con Sampling aprobado a 0.454 Å y Ranking fallido a 3.139 Å"] },
  review: { image: "pose-review.jpg", size: [1672, 1303], number: "06", en: ["Read more than a score.", "Open an exact preserved pose from any engine. Link the 3D receptor to a skeletal 2D interaction diagram and atomic contact table, then save figures and hash-verified PDB complexes.", ["Exact-pose ProLIF 2.2.1 geometric contacts", "Linked 2D diagram and 3D residue focus", "Publication SVG/PNG/TIFF/PDF and complex PDB"], "Actual 7AQF interface · Exact-pose interaction review", "Actual Ankora exact-pose review with linked 3D view and skeletal 2D interaction diagram"], es: ["Lee más que una puntuación.", "Abre una pose exacta conservada de cualquier motor. Vincula el receptor 3D con un diagrama esquelético 2D y su tabla de contactos atómicos; guarda figuras y complejos PDB verificados.", ["Contactos geométricos ProLIF 2.2.1 por pose", "Diagrama 2D y enfoque de residuos 3D vinculados", "Figuras SVG/PNG/TIFF/PDF y complejos PDB"], "Interfaz real con 7AQF · Revisión de interacciones de una pose exacta", "Interfaz real de Ankora: revisión de una pose con visor 3D y diagrama de interacciones 2D vinculados"] },
  methods: { image: "methods.jpg", size: [560, 702], number: "07", en: ["Export methods derived from real records.", "Generate structured Methods prose and Crossref-verified citations directly from immutable SHA-256 artifacts, exact box coordinates and recorded tool versions — never generic templates.", ["Byte- and hash-verified lineage reporting", "Explicit [not recorded] gaps instead of guessing", "Portable ZIP bundles with CSV, JSON and Methods"], "Actual 7AQF interface · Record-derived Methods section", "Actual Ankora Results inspector rendering the record-derived 7AQF AutoDock Vina 1.2.7 Methods section with 8 cited tools"], es: ["Exporta métodos derivados de registros reales.", "Genera secciones Methods estructuradas y citas verificadas directamente desde artefactos SHA-256 inmutables, coordenadas exactas de la caja y versiones registradas, sin plantillas genéricas.", ["Trazabilidad verificada por bytes y SHA-256", "Huecos [not recorded] explícitos sin suposiciones", "Paquetes ZIP portátiles con CSV, JSON y Methods"], "Interfaz real con 7AQF · Sección Methods derivada de registros", "Interfaz real de Ankora mostrando la sección Methods derivada de registros de AutoDock Vina 1.2.7 en 7AQF con 8 herramientas citadas"] },
};
let language = new URL(location.href).searchParams.get("lang") === "es" ? "es" : "en";
let currentStage = "inspect";
const translate = key => (language === "es" ? spanish[key] : english[key]) ?? english[key] ?? key;
const dialog = document.querySelector("#screenshot-dialog");
let dialogCaptionKey = "heroCaption";
function caption(key) { return key === "stageCaption" ? stages[currentStage][language][3] : translate(key); }
function showStage(name, focus = false) {
  currentStage = name;
  const stage = stages[name], content = stage[language];
  for (const tab of document.querySelectorAll("[data-stage]")) {
    const selected = tab.dataset.stage === name;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focus) tab.focus();
  }
  document.querySelector("#workflow-panel").setAttribute("aria-labelledby", `tab-${name}`);
  document.querySelector(".stage-index").textContent = `/${stage.number}`;
  document.querySelector("#stage-title").textContent = content[0];
  document.querySelector("#stage-description").textContent = content[1];
  [...document.querySelectorAll("#stage-points li")].forEach((node, i) => { node.textContent = content[2][i]; });
  const image = document.querySelector("#workflow-image");
  image.src = `assets/${stage.image}`;
  image.alt = content[4];
  [image.width, image.height] = stage.size;
  document.querySelector("#stage-caption").textContent = content[3];
}
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  for (const node of document.querySelectorAll("[data-i18n]")) node.textContent = translate(node.dataset.i18n);
  for (const node of document.querySelectorAll("[data-alt-i18n]")) node.alt = translate(node.dataset.altI18n);
  for (const node of document.querySelectorAll("[data-label-i18n]")) node.setAttribute("aria-label", translate(node.dataset.labelI18n));
  for (const button of document.querySelectorAll("[data-lang]")) button.setAttribute("aria-pressed", String(button.dataset.lang === next));
  document.querySelector("#site-nav").setAttribute("aria-label", next === "es" ? "Navegación principal" : "Main navigation");
  document.querySelector(".workflow-tabs").setAttribute("aria-label", next === "es" ? "Explorar el flujo de Ankora" : "Explore the Ankora workflow");
  document.querySelector(".language-switch").setAttribute("aria-label", next === "es" ? "Idioma" : "Language");
  document.querySelector(".brand").setAttribute("aria-label", next === "es" ? "Inicio de Ankora" : "Ankora home");
  document.title = next === "es" ? "Ankora — Docking molecular, con el científico al mando" : "Ankora — Molecular docking, with the scientist in control";
  showStage(currentStage);
  if (dialog.open) document.querySelector("#dialog-caption").textContent = caption(dialogCaptionKey);
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
    const names = Object.keys(stages), index = names.indexOf(currentStage);
    const destination = event.key === "ArrowRight" ? (index + 1) % names.length : event.key === "ArrowLeft" ? (index + names.length - 1) % names.length : event.key === "Home" ? 0 : event.key === "End" ? names.length - 1 : null;
    if (destination !== null) { event.preventDefault(); showStage(names[destination], true); }
  });
}
const menu = document.querySelector("[data-js-menu]"), header = document.querySelector(".site-header");
function closeMenu() { header.classList.remove("nav-open"); menu.setAttribute("aria-expanded", "false"); }
menu.addEventListener("click", () => { const open = header.classList.toggle("nav-open"); menu.setAttribute("aria-expanded", String(open)); });
for (const link of document.querySelectorAll("#site-nav a")) link.addEventListener("click", closeMenu);
document.addEventListener("keydown", event => { if (event.key === "Escape" && header.classList.contains("nav-open")) { closeMenu(); menu.focus(); } });
matchMedia("(min-width: 901px)").addEventListener("change", closeMenu);
for (const button of document.querySelectorAll("[data-lightbox-target]")) button.addEventListener("click", () => {
  const source = document.getElementById(button.dataset.lightboxTarget);
  const image = document.querySelector("#dialog-image");
  image.src = source.currentSrc || source.src;
  image.alt = source.alt;
  dialogCaptionKey = button.dataset.caption;
  document.querySelector("#dialog-caption").textContent = caption(dialogCaptionKey);
  dialog.showModal();
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
for (const node of document.querySelectorAll("[data-js-menu], [data-js-languages]")) node.hidden = false;
const visitorImage = document.querySelector("#visitor-widget img");
function visitorUnavailable() {
  document.querySelector("#visitor-widget").hidden = true;
  document.querySelector("#visitor-unavailable").hidden = false;
}
visitorImage.addEventListener("error", visitorUnavailable);
if (visitorImage.complete && visitorImage.naturalWidth === 0) visitorUnavailable();
setLanguage(language);
