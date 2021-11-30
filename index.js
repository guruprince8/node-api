const express = require('express');
const app = express();
const port = 3000;
app.get('/aadhar/validate',(req,res) => {
    if(req.query.aadharNumber == "30300"){
        res.statusCode =200;
        res.send("valid");
    } else {
        //res.sendStatus(200).send("invalid");
        res.statusCode =200;
        res.send("invalid");
        //res.send('Hello World');
    }
    
});
app.get('/pan/validate',(req,res) => {
    if(req.query.panNumber == "AAMPE6140M"){
        res.status(200).send("valid");
    } else {
        res.send(200).send("invalid");
        //res.send('Hello World');
    }
});
app.get('/license/validate',(req,res) => {
    if(req.query.panNumber == "LIC12345"){
        res.status(200).send("valid");
    } else {
        res.send(200).send("invalid");
        //res.send('Hello World');
    }
});
app.get('/',(req,res) => {
    res.send('Hello World');
});
app.listen(port,"0.0.0.0",()=>{
    console.log(`server started at ${port}`);
});
