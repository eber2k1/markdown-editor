document.getElementById('input-file').addEventListener('change', function (event) {
    const fileName = event.target.files.length > 0 ? event.target.files[0].name : 'Ningún archivo seleccionado';
    document.getElementById('file-name-display').textContent = fileName;
});