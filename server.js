const express=require('express')
const  axios  = require('axios')
const app=express();
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    res.render('index')
})
app.get('/weather', async (req, res) => {
    const city=req.query.city
   

       let api_key='b68c9849cdab885cb946725c77d72e37'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api_key}`
 axios.get(apiUrl).then(response => {
    const data = response.data;
    const cityname=data.name;
    const temprature = data.main.temp;
    const message=`city name: ${cityname} temprature: ${temprature}`
    res.send(`${message}`);
    
 }).catch(err => {
    console.log(err);
 })})




app.listen(1000,()=>{
    console.log('Server is running on port 1000');
}) 

