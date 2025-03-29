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