const express = require('express');
const app = express();
const request = require('request');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


app.listen(3000,function(){
    console.log('Connected to Server')
});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

//app.use('/',function(req,res){
//    res.send('Weather Application')
//});

//app.get('/',function(req,res){
//    res.send(response);
//    const City = new User(req.body);
//    const JString = JSON.stringify(City);
//    const cityFinal = JString.match(/\y":(.*?)\}/i)[1];
//    console.log(cityFinal)
//});

const API = process.env.apiKey;

app.post("/WeatherApp",function(req,res){
    let city = (req.body.City)
//    let city = "Reno"
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${API}`
    console.log(city);

    request(url, function(err,response,body) {
        if(err){
            res.send(err);
        }   
        else {
//            let weather = JSON.parse(body)
//            let message = `It's ${weather.main.temp} degrees in ${weather.name}`;
            res.send(body);
            console.log(body);
        }
//        res.status(201).send();
    });
});