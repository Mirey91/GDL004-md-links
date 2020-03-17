const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const validarFile = file => path.extname(file) === '.md';

const buscarLinks = (file) => {
    return fs.promises.readFile(file, 'utf8')
        .then((data) => {
            let arrayObj = [];
            const expression = /\[(.*)\]\((http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))\)/gm;
            const textExpression = /\[(.*)\]\((.*)\)/;
            const regex = new RegExp(expression);
            const matchlinks = data.match(regex);
            for (let i = 0; i < matchlinks.length; i++){
                const textBreak = textExpression.exec(matchlinks[i])// separa en 2 grupos el link
                //console.log(textBreak);
                let objLink = {
                    text: textBreak[1],
                    url: textBreak[2],
                    flie: file
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
    console.log(arraylinks);
    
    /*
    let promesa = arraylinks.map((elem) => {

        //console.log("validarLink");
        console.log(elem);

        return fetch(elem)
           // .then(resp => resp.text())
    })
    

    Promise.all(promesa)
        .then((data) => {

            let listGood = []
            let listBad = []
            for (let i = 0; i < data.length; i++) {
                const linkInfo = data[i]

                console.log(linkInfo);
                /*
                    if(res.status <= 400) {
                        listGood.push(`ES VALIDO ${link} ${arraylinks[i]}`)
                        //console.log(`ES VALIDO ${link} ${arraylinks[i]}`)
                        //console.log(listGood); 
                    } else {
                        listBad.push(`ES no es VALIDO ${link} ${arraylinks[i]}`)
                        //console.log(`NO ES VALIDO ${link} ${arraylinks[i]}`)
                        //console.log(listBad);
                    }
                    
            }
            //console.log(listGood);

        }).catch((error) => {
            console.log(error)
        })

    //console.log(listGood);
    */
}


module.exports = {
    validarFile,
    buscarLinks,
    validarLinks
}
