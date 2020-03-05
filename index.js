const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const link = process.argv[2];
const flags = process.argv[3]


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
            const expression = /(https?:\/\/[^\s]+)/g;
            const regex = new RegExp(expression);
            const matchlinks = data.match(regex);
            validarlinks(matchlinks)
        }
    })
} 
//console.log(parLinks(link));

const validarlinks = (arraylinks) => {
    let promesa = arraylinks.map((elem) => {
        return fetch(elem)
    })
    Promise.all(promesa)
    .then((data) => {

    })
    
        fetch(arraylinks[i])
        .then((res) => {
            if(res.status <= 400) {
                listGood.push(`ES VALIDO ${link} ${arraylinks[i]}`)
                //console.log(`ES VALIDO ${link} ${arraylinks[i]}`)
                console.log(listGood); 
            } else {
                listBad.push(`ES no es VALIDO ${link} ${arraylinks[i]}`)
                //console.log(`NO ES VALIDO ${link} ${arraylinks[i]}`)
                //console.log(listBad);
            }
        })
       .catch((error) => {
        console.log('Tenia un error ');
       })
    }
    /*
    Promises.all(listGood)
        .then(result => {
        console.log(result);
    })
    
    console.log(listGood);
    //console.log(listBad);
    */

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
