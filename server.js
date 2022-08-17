//declare var
const express = require("express")
const app = express()
const PORT = 8500;
const mongoose = require('mongoose')
require('dotenv').config()
//add model var 


//add middlleware
app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//set up the server 
mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => {console.log('connected to DB!')})


//ss

app.listen(PORT, () => console.log(`server is runing on Port ${PORT}`))





