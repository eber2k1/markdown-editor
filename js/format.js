
/**
 * Funcion para cambiar el formato del texto
 */
function toggleFormat(text) { 
    let selectedText = text.substring(start, end);

    if (selectedText.length === 0) return text;
    let formattedText;
    if (state === 1) {
        formattedText = `**${selectedText}**`;
    } else if (state === 2) {
        formattedText = `*${selectedText}*`;
    } else {
        formattedText = selectedText;
    }

    selectedText = text.substring(0, start) + formattedText + text.substring(end);

    return selectedText;
}


/**
 * Funcion para obtener el texto del textarea y trasnformarlo a negrita o cursiva
 */
function getTextFromTextArea(callback) {
    return new Promise((resolve, reject) => {
        const text = markdownInput.value;
        setTimeout(() => {
            if (text !== " ") {
                resolve(callback(toggleFormat(text)), updateCharacterCount(text));
            } else {
                reject("No hay texto en el textarea");
            }
        }, 100);
    });
}

/**
 * Funcion para convertir los encabezados (solo h1 a h6)
 */
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

/**
 * Funcion para convertir los enlaces
 */
function convertLinks(html) {
    html = html.replace(/\[(.+)\]\((.+)\)/gm, "<a href='$2'>$1</a>");
    return html;
}

/**
 * Funcion para convertir el texto en negrita
 */
function convertBold(html) {
    html = html.replace(/\*\*(.+)\*\*/gm, "<strong>$1</strong>");
    return html;
}

/**
 * Funcion para convertir el texto en cursiva
 */
function convertItalic(html) {
    html = html.replace(/\*(.+)\*/gm, "<em>$1</em>");
    return html;
}

/**
 * Funcion para convertir el texto en negrita y cursiva
 */
function convertBoldItalic(html) {
    html = html.replace(/\*\*\*(.+)\*\*\*/gm, "<strong><em>$1</em></strong>");
    return html;
}

/**
 * Funcion para convertir el texto en pre code
 */
function convertPreCode(html) {
    html = html.replace(
        /```([\s\S]+?)```/gm,
        "<pre class='max-w-full p-2 bg-gray-700 text-white rounded-md overflow-x-auto'><code class='whitespace-pre-wrap'>$1</code></pre>"
    );
    return html;
}

/**
 * Funcion para convertir el texto en HTML
 */
function convertToHtml(text) {

    let html = text;
    // evaluamos titulo
    html = convertHeadings(html);
    // evaluamos negrita
    html = convertBold(html);
    // evaluamos cursiva
    html = convertItalic(html);
    // evaluamos negrita y cursiva
    html = convertBoldItalic(html);
    // evaluamos listas desordenadas
    html = convertListUnordered(html);
    // evaluamos listas ordenadas
    html = convertListOrdered(html);
    // evaluamos enlaces
    html = convertLinks(html);
    // evaluamos pre code
    html = convertPreCode(html);
    // evaluamos 
    renderPreview(html);
}

/**
 * Funcion para renderizar el HTML
 */
function renderPreview(html) {
    previewSection.innerHTML = html;
}


function hasHeadings() {
    if (markdownInput.value.match(/^#{1,6} .+/gm)) {
        return toggleContrastHeadings();
    }
    alertHeadings.classList.remove("hidden");
    setTimeout(() => {
        alertHeadings.classList.add("hidden");
    }, 3000);
}