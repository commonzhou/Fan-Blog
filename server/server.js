const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const articleRoute = require("./articleRoute");

const app = express();
// 中间件的调用
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/",articleRoute);

app.get('/',function(req,res){
   res.send('<h2>啊，我的圣母玛利亚啊</h2>'); 
})
app.get('/data',function(req,res){
    res.json({name:'fanshao',age:'12'});
})
app.listen(6688,function(){
    console.log("node start at port 6688");
});