const { validarFile, validarLinks, buscarLinks } = require('./src/functions');

//
const mdLinks = (file, options) => {
    if (validarFile(file)) {
         return buscarLinks(file)
            .then((arraylink) => {

                return validarLinks(arraylink);

            })
            .catch((error) => {
                //console.log(error)
            })
    } else {
        console.log('Este no es un archivo md' + ext)
    }
}



module.exports = {
    mdLinks
}