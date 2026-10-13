// Presentation only. No analytics, cookies, scientific execution or remote API.
document.documentElement.classList.add("js");
const spanish = {
  skip: "Saltar al contenido", brand: "Un entorno bajo control científico", menu: "Menú",
  navWorkbench: "El entorno", navScience: "Evidencia científica", navGuide: "Documentación", source: "Código",
  betaTag: "BETA PRIVADA · WINDOWS 11", heroFirst: "Docking molecular.", heroSecond: "En tus manos.",
  heroCopy: "De una estructura a una pose que puedes inspeccionar. Prepara, realiza screening y revisa en un solo entorno local, con cada decisión científica a la vista.",
  explore: "Explorar Ankora", readGuide: "Leer el manual ↗", heroNote: "Código abierto. Cálculo local. Sin instalar herramientas científicas por separado para probar la beta.",
  heroCaption: "Interfaz real · 7AQF / RV2 · Una pose registrada, con evidencia 3D y 2D vinculada.",
  geometryNote: "Contactos geométricos, no afinidad medida.", heroAlt: "Interfaz real de Ankora: pose de RV2 en 7AQF, receptor 3D, diagrama de interacciones 2D y tabla de contactos vinculados",
  enlarge: "Ampliar la captura real", strip1: "Tus archivos originales no cambian", strip2: "Tus decisiones químicas son explícitas", strip3: "Tus resultados conservan su evidencia",
  flowEyebrow: "01 / EL ENTORNO DE TRABAJO", flowTitle: "Un flujo. No una caja negra.",
  flowIntro: "Pasa de la inspección a la interpretación sin perder la estructura original, el estado químico ni las decisiones que produjeron el resultado.",
  inspect: "Inspeccionar", prepare: "Preparar", define: "Definir", review: "Revisar",
  inspectTitle: "Empieza por lo que realmente existe.", inspectDescription: "Abre archivos PDB/mmCIF o recupera una estructura pública. Inspecciona cadenas, aguas, ligandos y problemas estructurales antes de crear un derivado.",
  inspectPoint1: "Visualización molecular con Mol*", inspectPoint2: "Coordenadas importadas inmutables", inspectPoint3: "Observaciones estructurales vinculadas al visor",
  walkthrough: "Seguir el recorrido con 7AQF", stageCaption: "Interfaz real con 7AQF · Inspección de la estructura",
  libraryEyebrow: "02 / SCREENING VIRTUAL", libraryTitle1: "Un compuesto.", libraryTitle2: "O toda una quimioteca.",
  libraryIntro: "Filtra y prepara una quimioteca antes de invertir tiempo en docking. Conserva la selección, cada estado químico y cada molécula fallida en el registro.",
  filterTitle: "Filtra antes de minimizar", filterCopy: "Lipinski, Veber, Ghose, Muegge y QED. Alertas PAINS/Brenk, detección de duplicados y reglas por descriptor orientan una selección explícita.",
  chemistryTitle: "Prepara un confórmero independiente", chemistryCopy: "Inspecciona masa, SMILES, carga y estereoquímica. Genera coordenadas con ETKDGv3, minimiza con MMFF y escribe PDBQT con Meeko.",
  parallelTitle: "Procesa en paralelo, con un presupuesto", parallelCopy: "Preparación multinúcleo acotada y progreso por molécula en docking. Los fallos permanecen visibles en la campaña.",
  selectionLabel: "SELECCIÓN EXPLÍCITA DE LA QUIMIOTECA", filtersAlt: "Controles reales de Ankora para filtros de quimiotecas y políticas de alertas PAINS/Brenk",
  filtersCaption: "Interfaz real · Las reglas orientan decisiones; no prueban actividad.", libraryNote: "La quimioteca importada permanece intacta. Aplicar filtros crea un manifiesto de selección independiente y registrado.",
  enginesEyebrow: "03 / EJECUCIÓN LOCAL", enginesTitle: "Elige tu motor.\nConserva su significado.",
  enginesIntro: "Un mismo entorno, distintos protocolos de búsqueda y funciones de puntuación. Sin puntuación combinada ni sustitución silenciosa de GPU por CPU.",
  vinaCopy: "CPU · un ligando o campañas de quimiotecas", cpuCopy: "Mapas AutoGrid4 reutilizables · clústeres y ejecuciones nativas", gpuCopy: "Familia de puntuación AutoDock4 · requiere un dispositivo OpenCL compatible",
  engineNote: "GNINA está pospuesto en esta beta. Las puntuaciones Vina y las energías AutoDock4 no son intercambiables. No se presupone reproducibilidad bit a bit en GPU.",
  scienceEyebrow: "04 / EVIDENCIA CIENTÍFICA", scienceTitle: "Evidencia que puedes leer.\nLímites que puedes ver.",
  scienceIntro: "Un cálculo completado no es una afirmación biológica validada. Protocolos, fallos, resultados cercanos al umbral y límites del ranking permanecen en el registro público.",
  case1Copy: "Registros retrospectivos congelados. Se explicitan los límites de comparabilidad del estado químico y la ausencia de un veredicto RMSD histórico de Vina.", case1Status: "Congelado, con límites conocidos",
  case2Copy: "Un linaje receptor/ligando prerregistrado. Se conservan resultados cercanos al umbral y fallos de recuperación GPU, junto a recuperación y mal ranking CPU.", case2Status: "Protocolo completado",
  case3Copy: "11,412 compuestos originales congelados en tres blancos. Señal retrospectiva modesta de ranking, con incertidumbre y todos los compuestos sin puntuación conservados.", case3Status: "Screening retrospectivo",
  scienceBoundary: "Las puntuaciones de docking no son afinidades experimentales. Los diagramas describen geometría, no unión ni actividad. Estos casos no establecen rendimiento prospectivo ni generalidad entre blancos.", allEvidence: "Leer toda la evidencia ↗",
  resourcesEyebrow: "05 / EMPIEZA A EXPLORAR", resourcesTitle: "Hecho para comprenderse.",
  resourcesIntro: "Un recorrido real con 7AQF/RV2, metodología registrada y código abierto. Empieza por el manual; profundiza en la evidencia.",
  pdfTitle: "El manual ilustrado", pdfCopy: "De la inspección de estructuras a las interacciones de poses, con 19 figuras reales y precauciones científicas explícitas.", pdfAction: "Abrir el PDF ↗",
  repoTitle: "Dentro de Ankora", repoCopy: "Inspecciona la implementación, las decisiones de arquitectura, los contratos de trazabilidad y las instrucciones de desarrollo.", repoAction: "Explorar el repositorio ↗",
  citationType: "INVESTIGACIÓN / CITA", citationTitle: "Cita lo que realmente usaste", citationCopy: "Indica la versión o commit exacto y las herramientas científicas utilizadas. Methods se construye a partir de los registros y señala información faltante.", citationAction: "Ver los datos de citación ↗",
  betaEyebrow: "DISTRIBUCIÓN ACTUAL / BETA PRIVADA", betaTitle: "Para trabajo real.\nProbado con cuidado.",
  betaCopy: "Actualmente Ankora se comparte con testers invitados en Windows 11 x64. El instalador completo incluye el entorno científico y las herramientas soportadas; todavía no hay un instalador público.",
  betaAction: "Consultar sobre la beta", betaNote: "La beta no tiene firma digital. Sigue la política de software de tu institución; no desactives la seguridad del sistema. Los controladores GPU son responsabilidad del fabricante.",
  faq1: "¿Necesito instalar Python o Java?", answer1: "No para el instalador completo de la beta. Incluye un entorno Python científico privado, Java, herramientas de preparación, motores de docking, P2Rank y WebView2 offline. Descargar estructuras públicas sí requiere internet.",
  faq2: "¿Mi investigación sale de mi computadora?", answer2: "La preparación y el docking se ejecutan localmente. Ankora no tiene telemetría ni subidas automáticas a la nube. Obtener una estructura de RCSB o AlphaFold es una acción de red explícita. Esta web no contiene scripts de analítica ni rastreo.",
  faq3: "¿Existe una versión para Linux o macOS?", answer3: "Todavía no hay una versión aceptada. Windows 11 x64 es la plataforma de referencia de la beta. Otras plataformas deben superar sus propias comprobaciones científicas y de empaquetado antes de afirmar soporte.",
  faq4: "¿Qué significa código abierto aquí?", answer4: "El código de Ankora está disponible bajo licencia MIT. Los componentes de terceros incluidos conservan sus propias licencias, avisos y obligaciones de código fuente. Cita el software y las herramientas usados al publicar investigación.",
  footerCopy: "Docking molecular, con el científico al mando.", reportIssue: "Reportar un problema", license: "Licencia", contact: "Contacto", footerNote: "Software local. Métodos abiertos.\nLas decisiones científicas son tuyas.", actualScreenshot: "Interfaz real de Ankora", close: "Cerrar",
};
const english = Object.fromEntries([...document.querySelectorAll("[data-i18n]")].map(node => [node.dataset.i18n, node.innerText]));
for (const node of document.querySelectorAll("[data-alt-i18n]")) english[node.dataset.altI18n] = node.alt;
for (const node of document.querySelectorAll("[data-label-i18n]")) english[node.dataset.labelI18n] ??= node.getAttribute("aria-label");
const stages = {
  inspect: { image: "guide02-structure.jpg", number: "01", en: ["Start with what is actually there.", "Open PDB/mmCIF files or retrieve a public structure. Inspect chains, waters, ligands and structural issues before making a derivative.", ["Mol* molecular visualization", "Immutable imported coordinates", "Viewer-linked structural observations"], "Actual 7AQF interface · Structure inspection", "Actual Ankora Structure workspace inspecting the deposited 7AQF structure"], es: [spanish.inspectTitle, spanish.inspectDescription, [spanish.inspectPoint1, spanish.inspectPoint2, spanish.inspectPoint3], spanish.stageCaption, "Interfaz real de Ankora: inspección de la estructura depositada 7AQF"] },
  prepare: { image: "guide03-receptor.jpg", number: "02", en: ["Chemistry deserves a decision.", "Choose chains, waters, components and residue actions explicitly. Review protonation proposals and preserve every preparation stage and failure.", ["Selective repair, not silent reconstruction", "PDB2PQR / PROPKA review", "Meeko docking-ready receptor"], "Actual 7AQF interface · Explicit receptor preparation", "Actual Ankora receptor workspace with structural observations and preparation decisions"], es: ["La química merece una decisión.", "Elige cadenas, aguas, componentes y acciones por residuo de manera explícita. Revisa propuestas de protonación y conserva cada etapa y fallo de preparación.", ["Reparación selectiva, no reconstrucción silenciosa", "Revisión PDB2PQR / PROPKA", "Receptor para docking con Meeko"], "Interfaz real con 7AQF · Preparación explícita del receptor", "Interfaz real de Ankora: observaciones estructurales y decisiones de preparación del receptor"] },
  define: { image: "guide06-binding-site.jpg", number: "03", en: ["Make the search space visible.", "Define a box from a co-crystallized ligand, selected residues, full protein, manual coordinates or a P2Rank pocket. Move, resize and confirm it before docking.", ["Live 3D box translation and resizing", "Numerical coordinates remain visible", "Explicit final binding-site definition"], "Actual 7AQF interface · Editable binding-site box", "Actual Ankora binding-site workspace with a visible orange search box and explicit coordinates"], es: ["Haz visible el espacio de búsqueda.", "Define la caja desde un ligando cocristalizado, residuos seleccionados, proteína completa, coordenadas manuales o un pocket P2Rank. Muévela, ajusta su tamaño y confírmala antes del docking.", ["Movimiento y tamaño de la caja en vivo en 3D", "Coordenadas numéricas siempre visibles", "Definición final explícita del sitio"], "Interfaz real con 7AQF · Caja de búsqueda editable", "Interfaz real de Ankora: caja de búsqueda naranja y coordenadas explícitas del binding site"] },
  review: { image: "guide11-interactions.jpg", number: "04", en: ["Read more than a score.", "Open an exact preserved pose. Link the 3D receptor to a skeletal interaction diagram and atomic contact table, then export figures, complexes and recorded Methods.", ["Exact-pose ProLIF geometric contacts", "Linked 2D / 3D inspection", "Figures, PDB complexes and Methods"], "Actual 7AQF / RV2 interface · Exact-pose interaction review", "Actual Ankora exact-pose review with linked 3D view and skeletal 2D interaction diagram"], es: ["Lee más que una puntuación.", "Abre una pose exacta conservada. Vincula el receptor 3D con un diagrama de interacciones y su tabla de contactos atómicos; exporta figuras, complejos y Methods registrados.", ["Contactos geométricos ProLIF de una pose exacta", "Inspección 2D / 3D vinculada", "Figuras, complejos PDB y Methods"], "Interfaz real con 7AQF / RV2 · Revisión de interacciones de una pose exacta", "Interfaz real de Ankora: revisión de una pose con visor 3D y diagrama de interacciones 2D vinculados"] },
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
  image.width = name === "review" ? 1195 : 1894;
  image.height = name === "review" ? 579 : 1244;
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
setLanguage(language);
