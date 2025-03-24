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

    return text.substring(0, start) + formattedText + text.substring(end);
}


function getTextFromTextArea(callback) {
    let text = markdownInput.value;
    if (text === "") {
        alert("Debe ingresar un texto para poder generar el HTML");
        return;
      }
      text = toggleFormat(text);
    callback(text);
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

function convertPreCode(html) {
    html = html.replace(
        /```([\s\S]+?)```/gm,
        "<pre class='p-2 bg-gray-700 text-white rounded-md overflow-x-auto'><code class='whitespace-pre-wrap'>$1</code></pre>"
    );
    return html;
}

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
    // evaluamos 
    renderPreview(html);
}

function convertToHtmlAuto(text) {
    let html = text;
    // evaluamos pre code
    html = convertPreCode(html);
    renderPreview(html);
}

function renderPreview(html) {
    previewSection.innerHTML = html;
}