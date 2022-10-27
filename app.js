// create express server
const express = require("express");
const expressLayouts = require("expres-ejs-layouts ");


//initialize app.js
const app = express();
const port = process.env.PORT || 3000;

// require dot env
require('dotenv').config();

// set up middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(expressLayouts);

// setup layouts
app.set('layout','./layouts/main')

// setup routes
const routes = require('./server/routes/foodRoutes.js')
app.use('/', routes)

app.listen('port',()=>console.log(`listening on ${port}`))