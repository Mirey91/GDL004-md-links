const { validarFile, validarLinks, buscarLinks } = require('./src/functions');

//
const mdLinks = (file, options) => {
    if (validarFile(file)) {
         buscarLinks(file)
            .then((arraylink) => {
                validarLinks(arraylink);
            })
            .catch((error) => {
                console.log(error)
            })
    } else {
        console.log('Este no es un archivo md' + ext)
    }
}

module.exports = {
    mdLinks
}