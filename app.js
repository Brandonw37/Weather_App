const express = require('express');
const app = express();
const request = require('request');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.listen(3000,function(){
    console.log('Connected to Server')
});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//connecets 
//const nameSchema = new mongoose.Schema({
//    City: String,
//});
//const User = mongoose.model("User",nameSchema);

//app.use('/',function(req,res){
//    res.send('hello')
//});

app.get('/WeatherApp',function(req,res){
    res.sendFile(__dirname+'/HTML/Front.html')
//    const City = new User(req.body);
//    const JString = JSON.stringify(City);
//    const cityFinal = JString.match(/\y":(.*?)\}/i)[1];
//    console.log(cityFinal)
});

const API = process.env.apiKey;
//const city = "Reno";
//const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${API}`

app.post("/WeatherApp",function(req,res){
    let city = (req.body.City)
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${API}`
    console.log(city)

    request(url, function(err,response,body) {
        if(err){
            res.send('error:',err);
        }
        else {
            let weather = JSON.parse(body)
            let message = `It's ${weather.main.temp} degrees in ${weather.name}`;
            res.send(message);
        }
    }); 
});