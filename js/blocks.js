/**
 * Funcion para actualizar el contador de caracteres
 */
function updateCharacterCount(text) {
  characterCount.textContent = text.length;
}

/**
 * Funcion para obtener el inicio y el fin de la seleccion
 */
function getStartEnd(event) {
    start = event.target.selectionStart;
    end = event.target.selectionEnd;
}

/**
 * Funcion para cambiar el formato del texto
 */
function changeBtnFormat() {
    let formats = [
        `<i class="fa-solid fa-bold"></i> <span class="hidden md:block">negrita</span>`,
        `<i class="fa-solid fa-italic"></i> <span class="hidden md:block">cursiva</span>`,
        `<i class="fas fa-paint-brush"></i> <span class="hidden md:block">sin formato</span>`
    ];
    applyFormat.innerHTML = formats[state];
    state = (state + 1) % formats.length;
}