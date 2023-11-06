const express = require("express");
const bodyParser = require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/index.html");
});

app.post("/",(req,res)=>{
   var num1=Number(req.body.n1);
   var num2=Number(req.body.n2);
   var sum=num1+num2;
    res.send("The sum is " +sum);
});

app.get("/bmi",(req,res)=>{
    res.sendFile(__dirname +"/bmi.html");
});

app.post("/bmi",(req,res)=>{
   var weight=parseFloat(req.body.weight);
   var height=parseFloat(req.body.height);
   var bmi= weight/(height *height);
    res.send("Your bmi is  " +bmi);
});


app.listen(3000,()=>{
    console.log("server is running on port 3000");
});
