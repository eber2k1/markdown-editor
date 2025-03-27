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

const inputFile = document.querySelector("#input-file");

const loading = document.querySelector("#loading");
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


function readFileAsPromise(file) {
    return new Promise((resolve, reject) => {
      const lector = new FileReader();
  
      setTimeout(() => {
        lector.readAsText(file);
  
        lector.onload = function () {
          resolve(lector.result);
        };
  
        lector.onerror = function () {
          reject("Error al leer el archivo");
        };
      }, 2000);
    });
  }


/**
 * Funcion para cargar un archivo
 */
inputFile.addEventListener("change", async function (event) {
    const archivo = event.target.files[0];
  
    loading.classList.remove("hidden");
  
    try {
      const text = await readFileAsPromise(archivo);
      markdownInput.value = text;
      await getTextFromTextArea(convertToHtml);
    } catch (error) {
      console.log(error);
    } finally {
      loading.classList.add("hidden");
    }
  });
  

/**
 * Funcion para convertir el texto del textarea a HTML
 */
markdownInput.addEventListener("input", async function () {
    try {
        await getTextFromTextArea(convertToHtml);
    } catch (error) {
        console.log(error);
    }
});

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
    renderPreview("Previsualización");
    inputFile.value = "";
    document.getElementById('file-name-display').textContent = 'Ningún archivo seleccionado';
});

/**
 * Funcion para cerrar la alerta
 */
closeAlertHeadings.addEventListener("click", function () {
    alertHeadings.classList.add("hidden");
});