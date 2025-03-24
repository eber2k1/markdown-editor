
function convertListUnordered(html) {
    // Identificamos bloques de listas con indentación
    let lines = html.split('\n');
    let inList = false;
    let result = [];
    
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].match(/^\* (.+)$/)) {
            if (!inList) {
                result.push("<ul class='list-disc pl-5 space-y-2'>");
                inList = true;
            }
            result.push("<li>" + lines[i].replace(/^\* (.+)$/, "$1") + "</li>");
        } else {
            if (inList) {
                result.push("</ul>");
                inList = false;
            }
            result.push(lines[i]);
        }
    }
    
    if (inList) {
        result.push("</ul>");
    }
    
    return result.join('\n');
}

function convertListOrdered(html) {
    // Identificamos bloques de listas con indentación
    let lines = html.split('\n');
    let inList = false;
    let result = [];
    
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].match(/^\d+\. (.+)$/)) {
            if (!inList) {
                result.push("<ol class='list-decimal pl-5 space-y-2'>");
                inList = true;
            }
            result.push("<li>" + lines[i].replace(/^\d+\. (.+)$/, "$1") + "</li>");
        } else {
            if (inList) {
                result.push("</ol>");
                inList = false;
            }
            result.push(lines[i]);
        }
    }
    
    if (inList) {
        result.push("</ol>");
    }
    
    return result.join('\n');
}