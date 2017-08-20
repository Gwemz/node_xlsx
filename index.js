var express = require('express');
var xlsx = require("node-xlsx");
var app = express();
var xlsxData=xlsx.parse('01.xlsx');

// 信息获取
app.get('/messages',function(req,res){
    var str = JSON.stringify(xlsxData);
    // charset=utf-8 解决json数据中中文乱码
    res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
    res.end(str);
})

//对静态文件做处理
app.use(express.static(__dirname+'/website'));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/website/index.html');
})
app.get('/admin',function(req,res){
    res.sendFile(__dirname + '/website/index2.html');
})

app.listen(1000,function(){
    console.log('监听1000端口成功！');
})



