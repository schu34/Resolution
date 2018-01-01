const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json({extended: false}));

app.get("/data", (req, res)=>{
  fs.readFile("./data.json",{encoding: "utf-8"}, (err, data)=>{
    res.json(JSON.parse(data));
  })
})

app.post("/data", (req, res)=>{
  const newData = req.body;
  fs.writeFile("./data.json", JSON.stringify(newData), {encoding: 'utf-8'}, (err)=>{
    if(!err){
      res.send({success: true});
    } else {
      res.send({success: false});
    }
  })
})

app.listen(8000);

