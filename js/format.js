function toggleFormat(text) {
    if (state === 0) {
        text = text.replace(selectedText, selectedText);
    } else if (state === 1) {
        text = text.replace(selectedText, `**${selectedText}**`);
    } else {
        text = text.replace(selectedText, `*${selectedText}*`);
    }
    return text;
}


function getTextFromTextArea(callback) {
    let text = markdownInput.value;
    if (text === "") {
        alert("Debe ingresar un texto para poder generar el MD");
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

    renderPreview(html);
}

function renderPreview(html) {
    previewSection.innerHTML = html;
}