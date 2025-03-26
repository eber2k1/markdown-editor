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
// Alerta de encabezados
const alertHeadings = document.querySelector("#alert-headings");
// Boton de cerrar alerta
const closeAlertHeadings = document.querySelector("#close-alert-headings");

/**
 * Estado del formato
 */
let state = 0;
/**
 * Inicio de la seleccion
 */
let start = 0;
/**
 * Fin de la seleccion
 */
let end = 0;

/**
 * Funcion para debounce
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

/**
 * Funcion para ejecutar eventos
 */
function execEvents() {
    getTextFromTextArea(convertToHtml);

}

/**
 * Funcion para debounce
 */
const debounceEvents = debounce(execEvents, 100);

/**
 * Funcion para convertir el texto del textarea a HTML
 */
markdownInput.addEventListener("input", debounceEvents);

/**
 * Funcion para contrastar los encabezados
 */
contrastHeadings.addEventListener("click", function () {
    hasHeadings();
});

/**
 * Funcion para obtener el texto seleccionado
 */
markdownInput.addEventListener("select", function (event) {
    getStartEnd(event);
});

/**
 * Funcion para obtener el texto seleccionado del textarea y trasnformarlo a negrita o cursiva
 */
applyFormat.addEventListener("click", function () {
    changeBtnFormat();
    getTextFromTextArea(convertToHtml);
});

/**
 * Funcion para borrar el texto del textarea
 */
clearText.addEventListener("click", function () {
    markdownInput.value = "";
    updateCharacterCount("");
    renderPreview("");
});

/**
 * Funcion para cerrar la alerta
 */
closeAlertHeadings.addEventListener("click", function () {
    alertHeadings.classList.add("hidden");
});
