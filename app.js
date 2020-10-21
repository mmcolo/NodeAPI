const express = require('express');
const bodyParser = require('body-parser');

/**ICI Vous pouvez déclarer votre base de données */


const app = express();

//Mise en place des autorisation pour palier au problement d'accessibilité liée au CORS.
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Header', 'Origin, X-requested-With, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow','GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//Connexion à la base de donnez

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('api/exemple', (req, res) => {
    //Traitement avec la base de donnée.
    //
    //
    if(result){
        res.status(200).json({result});
    }
    else{
        if(err){
            res.status(400).json({err})
        }
    }
});

app.post('/api/post',(req, res, next) => {
    //traitement de la base de donner
    console.log('Vous etes bien dans la methose post!');
    next();
});

app.delete('/api/delete/1',(req, res, next) => {
    //traitement de la base de donner
    console.log('Vous etes bien dans la methose delete!');
    next();
});

app.pute('/api/pute',(req, res, next) => {
    //traitement de la base de donner
    console.log('Vous etes bien dans la methose pute!');
    next();
});

module.exports = app;