// Boton de generar HTML
const generateHtml = document.querySelector("#generate-html");
// Textarea de markdown
const markdownInput = document.querySelector("#markdown-input");
// Seccion de preview
const previewSection = document.querySelector("#preview-section");
// Boton de contrastar encabezados
const contrastHeadings = document.querySelector("#contrast-headings");
//Div Contador de caracteres
const characterCount = document.querySelector("#character-count");
// Boton de aplicar formato
const applyFormat = document.querySelector("#apply-format");


// TODO: Cuando hagamos click en el boton generateHtml, tenemos que obtener el texto del textarea y trasnformalo a HTML y eso mostrarlo el preview
generateHtml.addEventListener("click", function () {

    const text = getTextFromTextArea();
    const html = convertToHtml(text);
    renderPreview(html);
});

// TODO: Cuando hagamos click en el boton contrastHeadings, tenemos que contrastar los encabezados
contrastHeadings.addEventListener("click", function () {
    toggleContrastHeadings();
});

// TODO: Cuando hagamos click en el boton generateHtml, tenemos que obtener el texto del textarea y trasnformalo a HTML y eso mostrarlo el preview
markdownInput.addEventListener("input", function () {
    const text = getTextFromTextArea();
    updateCharacterCount(text);
});


const selected= markdownInput.addEventListener("select", function (event) {
    getSelectedText(event);
});

applyFormat.addEventListener("click", function () {
    
    const text = getTextFromTextArea();
    const html = applyFormat(text);
    
});