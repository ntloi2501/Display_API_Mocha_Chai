const express = require('express');
const path = require('path');

const configViewEngine = (app) => {
    console.log(">>> check __dirname: ", path.join( 'views'))
    app.set('views', path.join('views'))
    app.set('view engine', 'ejs')
    
    //config static file 
    app.use(express.static(path.join( 'public')))
    }

module.exports = configViewEngine;

