const { mdLinks } = require('./index' );


mdLinks('README.md')
    .then(links => {
        console.log("********************************************************");
        console.log(links);
        console.log("********************************************************");
})