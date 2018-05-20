const mongoose = require('mongoose');
const DB_URL = 'mongodb://127.0.0.1:27017/blogDB'                 //连接数据库
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){   //监听是否连接成功
    console.log('mongo connect success');
})

const models={     
    // 文章的表
    article:{
       "title":{"type":String,"require":true},
       "date":{"type":String,"require":true},
       "tag":{"type":String,"require":true},
       "content":{"type":String,"require":true}  
    }
}

//  遍历建立表
for(let model in models){
   mongoose.model(model,new mongoose.Schema(models[model]));
}

module.exports={
    // 提供获取表的方法
    getModel:function(name){
        return mongoose.model(name)
    }
}

