const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const link = process.argv[2];
const flags = process.argv[3]

const mdLinks = (file, options) => {
    parLinks(links) 
}
const validarfile = (links) => {
    const ext = path.extname(links);
    if (ext === '.md') {
        console.log('Este es un archivo ' + ext);  
        parLinks(links)      
    } else {
        console.log('Este no es un archivo md' + ext)
    }
}

const parLinks = (file) => {
    fs.readFile(file, 'utf8', (error, data) => {
        if(error){
            console.log(error);            
        } else {
            const expression = /\[(.*)\](\(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)\))/gm;
            const regex = new RegExp(expression);
            const matchlinks = data.match(regex);
            console.log(matchlinks);
            
            //validarlinks(matchlinks)
        }
    })
} 

const returnResults = (matchlinks) => {
    return new Promise 
}

const validarlinks = (arraylinks) => {
    let promesa = arraylinks.map((elem) => { 
        
        
        //elem tiene formato
        /*
        [Asíncronía en js](https://carlosazaustre.com/manejando-la-asincronia-en-javascript/)
        Tu mision es que solo valide https://carlosazaustre.com/manejando-la-asincronia-en-javascript
        yo te voy a mandar la expresion regular para eso y un ejemplo de uso
        */
        
        return fetch(elem)  
        .then(resp => resp.text())      
    })   
    Promise.all(promesa)
    .then((data) => {  
        console.log(data);
      
        let listGood = []
        let listBad = []
        for (let i = 0; i < data.length; i++){
        const linkInfo = data[i]

        //console.log(linkInfo);
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
            */
        }
        //console.log(listGood);
        
    }).catch((error) => {
        console.log(error)
        console.log('Tenia un error ');
       })
 
       //console.log(listGood);
    }
   





const validarFlags = () => {
    if(flags == --validate) {
        console.log();
    } else if ( flags == --stats) {
        console.log()
    } else if ( flags == --stas && process.argv[4] == --validate) {
        console.log();
    } else {

    }
}

validarfile(link)
