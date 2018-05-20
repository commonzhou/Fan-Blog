const express = require('express')
const Router = express.Router();
const models = require('./model');

const Article = models.getModel("article");

Router.post("/addArticle",function(req,res){
   const {title,date,tag,content} = req.body;
   const articleModel = new Article({title,date,tag,content}); 
   articleModel.save(function(err,doc){
     if(err){
         return res.json({code:0,msg:"后端出错"})
     }  
     if(doc){
        return res.json({code:1,msg:"增加成功",data:doc})
     }else{
        return res.json({code:0,msg:"增加失败"})
     }
   })
})

Router.post("/updateArticle",function(req,res){
    const {title,date,tag,content} = req.body;
    let id=req.query.id;
    Article.update({_id:id},{'$set':{title:title,date:date,tag:tag,content:content}},function(err,doc){
        if(err){
            return res.json({code:0,msg:"后端出错"})
        }
        if(doc){
            return res.json({code:1,msg:"更新成功",data:doc})
        }else{
            return res.json({code:0,msg:"更新失败"})
        }
    })
})

Router.get("/deleteArticle",function(req,res){
    let id=req.query.id;
    Article.remove({_id:id},function(err,doc){
       return res.json(doc)
    })
})

Router.get("/getArticles",function(req,res){
   Article.find({},function(err,doc){
       return res.json(doc)
   })
})

Router.get("/getArticle",function(req,res){
   let id=req.query.id;
   Article.findOne({_id:id},function(err,doc){
    if(err){
        return res.json({code:0,msg:"后端出错"})
    }

    if(doc){
        return res.json({code:1,msg:"获取成功",data:doc})
    }else{
        return res.json({code:0,msg:"获取失败"})
    }
   })
})

module.exports = Router;