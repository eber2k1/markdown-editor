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


// TODO: Cuando hagamos click en el boton generateHtml, tenemos que obtener el texto del textarea y trasnformalo a HTML y eso mostrarlo el preview
generateHtml.addEventListener("click", function () {
    getTextFromTextArea(convertToHtml);
});

// TODO: Cuando hagamos click en el boton contrastHeadings, tenemos que contrastar los encabezados
contrastHeadings.addEventListener("click", function () {
    toggleContrastHeadings();
});

// TODO: Cuando hagamos click en el boton generateHtml, tenemos que obtener el texto del textarea y trasnformalo a HTML y eso mostrarlo el preview
markdownInput.addEventListener("input", function () {
    const text = markdownInput.value;
    updateCharacterCount(text);
    convertToHtmlAuto(text);
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