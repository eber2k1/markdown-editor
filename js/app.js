/**
 * Variables para obtener elementos HTML
 */
const generateHtml = document.querySelector("#generate-html");
const markdownInput = document.querySelector("#markdown-input");
const previewSection = document.querySelector("#preview-section");
const contrastHeadings = document.querySelector("#contrast-headings");

function getTextFromTextArea() {
  const text = markdownInput.value;
  return text;
}

function convertHeadings(html) {
  html = html.replace(
    /^# (.+)$/gm,
    "<h1 class='text-6xl font-bold border-b'>$1</h1>"
  );
  // ## titulo -> <h2>titulo</h2>
  html = html.replace(
    /^## (.+)$/gm,
    "<h2 class='text-5xl font-bold border-b'>$1</h2>"
  );
  html = html.replace(/^### (.+)$/gm, "<h3 class='text-4xl font-bold'>$1</h3>");
  html = html.replace(
    /^#### (.+)$/gm,
    "<h4 class='text-3xl font-bold'>$1</h4>"
  );
  html = html.replace(
    /^##### (.+)$/gm,
    "<h5 class='text-2xl font-bold'>$1</h5>"
  );
  html = html.replace(
    /^###### (.+)$/gm,
    "<h6 class='text-xl font-bold'>$1</h6>"
  );

  return html;
}

function convertLists(html) {
  html = html.replace(/^\* (.+)$/gm, "<li>$1</li>");
  html = html.replace(/^\* (.+)$/gm, "<ul>$1</ul>");
  return html;
}

function convertLinks(html) {
  html = html.replace(/\[(.+)\]\((.+)\)/gm, "<a href='$2'>$1</a>");
  return html;
}

function convertBold(html) {
  html = html.replace(/\*\*(.+)\*\*/gm, "<strong>$1</strong>");
  return html;
}

function convertItalic(html) {
  html = html.replace(/\*(.+)\*/gm, "<em>$1</em>");
  return html;
}

function convertBoldItalic(html) {
  html = html.replace(/\*\*\*(.+)\*\*\*/gm, "<strong><em>$1</em></strong>");
  return html;
}

function convertToHtml(text) {
  let html = text;
  // evaluamos titulo
  html = convertHeadings(html);
  // evaluamos listas
  html = convertLists(html);
  // evaluamos enlaces
  html = convertLinks(html);
  // evaluamos negrita
  html = convertBold(html);
  // evaluamos cursiva
  html = convertItalic(html);
  // evaluamos negrita y cursiva
  html = convertBoldItalic(html);
  
  return html;
}

function renderPreview(html) {
  previewSection.innerHTML = html;
}

// TODO: Cuando hagamos click en el boton generateHtml, tenemos que obtener el texto del textarea y trasnformalo a HTML y eso mostrarlo el preview
generateHtml.addEventListener("click", function () {
  // para obtener el texto de un input usamos el .value
  const text = getTextFromTextArea(); // Obtiene el value del textarea
  const html = convertToHtml(text); // convierte el value a un HTML
  renderPreview(html); // HTML lo muestra en el preview
});