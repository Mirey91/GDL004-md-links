const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const validarFile = file => path.extname(file) === '.md';

const buscarLinks = (file) => {
    return fs.promises.readFile(file, 'utf8')
        .then((data) => {
            let arrayObj = [];
            const expression = /\[(.*)\](\(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)\))/gm;
            const textExpression = /\[(.*)\]\((.*)\)/;
            const regex = new RegExp(expression);
            const matchlinks = data.match(regex);
            for (let i = 0; i < matchlinks.length; i++){
                const textBreak = textExpression.exec(matchlinks[i])// separa en 2 grupos el link
                //console.log(textBreak);
                let objLink = {
                    text: textBreak[1],
                    href: textBreak[2],
                    file: file
                }
                arrayObj.push(objLink)
            }
            return arrayObj;
        })
        .catch((error) => {
            return error;
        });
}

const validarLinks = (arraylinks) => {
    //console.log(arraylinks);
    return Promise.all(arraylinks.map( async url => {
        try{
            const statusUrl = await fetch(url.href)
            url['status'] = statusUrl.status;
        }
        catch (error){
            url['status'] = error.code;
        }
        return url;
    }))
    //return newArrayLinks
    //return validarLinks
}

const validarStats = (statuslink) => {
    let objConteo = {
        bueno: 0,
        roto: 0,
        Total: statuslink.length
    }
    for(let i=0; i<statuslink.length;i++){
        if(statuslink[i].status <= 400){
            objConteo.bueno++
        }else{
            objConteo.roto++
        }
    } return Object
}





module.exports = {
    validarFile,
    buscarLinks,
    validarLinks,
    validarStats
}
