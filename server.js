require('dotenv').config({path:'variables.env'})
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const carRoute = require('./routes/car')

const PORT = process.env.port || 8000;
const server = express();

server.use(bodyParser.json());
server.use('/api', carRoute)

mongoose.connect(process.env.MONGODB_SERVER,{useNewUrlParser:true},(err)=>{
    if(err) return console.log(err);
    server.listen(PORT, ()=>{
        console.log(`The server is running on ${PORT}`);
    })
})