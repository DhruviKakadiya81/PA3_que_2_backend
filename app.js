require('./db/db');
const proModel=require('./models/proModel');
const proRoute=require('./routes/proRoute');
const express=require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app=express();

app.use(express.urlencoded({extended:true}));

// app.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Origin','http://localhost:4200');
//     res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
//     res.header('Access-Control-Allow-Headers','Content-Type');
//     next();
// })
app.use(express.json());
app.use(cors());

app.use('/',proRoute);

app.listen(4000,()=>{
    console.log("server Listening on port 4000");
})