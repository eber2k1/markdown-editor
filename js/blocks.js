/**
 * Funcion para contrastar los encabezados
 */
function toggleContrastHeadings() {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    const hasContrast = headings.length > 0 && 
        (headings[0].classList.contains('bg-gray-800') || 
         headings[0].classList.contains('bg-gray-700') ||
         headings[0].classList.contains('bg-gray-600') ||
         headings[0].classList.contains('bg-gray-500') ||
         headings[0].classList.contains('bg-gray-400') ||
         headings[0].classList.contains('bg-gray-300'));
    
    if (hasContrast) {

        headings.forEach((heading) => {
            heading.classList.remove(
                'bg-gray-800', 'bg-gray-700', 'bg-gray-600', 
                'bg-gray-500', 'bg-gray-400', 'bg-gray-300',
                'text-white', 'p-2', 'rounded'
            );
        });
    } else {
        
        headings.forEach((heading) => {
            heading.classList.add('p-2', 'rounded');
            
            switch (heading.tagName) {
                case 'H1':
                    heading.classList.add('bg-gray-800', 'text-white');
                    break;
                case 'H2':
                    heading.classList.add('bg-gray-700', 'text-white');
                    break;
                case 'H3':
                    heading.classList.add('bg-gray-600', 'text-white');
                    break;
                case 'H4':
                    heading.classList.add('bg-gray-500', 'text-white');
                    break;
                case 'H5':
                    heading.classList.add('bg-gray-400', 'text-white');
                    break;
                case 'H6':
                    heading.classList.add('bg-gray-300', 'text-gray-800');
                    break;
            }
        });
    }
    
    return headings;
}

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

