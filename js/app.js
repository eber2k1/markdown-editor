// Boton de borrar texto
const clearText = document.querySelector("#clear-text");
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
// Texto del boton de aplicar formato
const formatType = document.querySelector("#format-type");

let state = 0;
let start = 0;
let end = 0;

function changeBtnFormat() {
    let formats = [
        `<i class="fa-solid fa-bold"></i> <span class="hidden md:block">negrita</span>`,
        `<i class="fa-solid fa-italic"></i> <span class="hidden md:block">cursiva</span>`,
        `<i class="fas fa-paint-brush"></i> <span class="hidden md:block">sin formato</span>`
    ];
    applyFormat.innerHTML = formats[state];
    state = (state + 1) % formats.length;
}

// TODO: Cuando hagamos click en el boton contrastHeadings, tenemos que contrastar los encabezados
contrastHeadings.addEventListener("click", function () {
    toggleContrastHeadings();
});

// TODO: Obtener el texto seleccionado
markdownInput.addEventListener("select", function (event) {
    getStartEnd(event);
});

// TODO: Cuando hagamos click en el boton applyFormat, tenemos que obtener el texto seleccionado del textarea y trasnformarlo a negrita o cursiva
applyFormat.addEventListener("click", function () {
    changeBtnFormat();
    getTextFromTextArea(convertToHtml);
});

markdownInput.addEventListener("input", function () {
    getTextFromTextArea(convertToHtml);
    updateCharacterCount(markdownInput.value);
});

// TODO: Cuando hagamos click en el boton clearText, tenemos que borrar el texto del textarea
clearText.addEventListener("click", function () {
    markdownInput.value = "";
    updateCharacterCount(0);
    renderPreview("");
});