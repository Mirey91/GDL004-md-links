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
console.log(parLinks(link));

const validarlinks = (arraylinks) => {
    for (let i = 0; i < arraylinks.length; i++){
        fetch(arraylinks[i])
        .then((res) => {
            //console.log(res.status);
            if(res.status <= 400) {
                console.log(`ES VALIDO ${link} ${arraylinks[i]}`)    
            } else {
                console.log(`NO ES VALIDO ${link} ${arraylinks[i]}`);
            }
        })
       .catch((error) => {
        console.log('Tenia un error ');
       })
       
       
    }
}

validarfile(link)
