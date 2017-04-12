var express = require('express');
var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
	res.sendFile(path.resolve('public/index.html'));
});


app.use(function(erro, req,res,next) {
    if(erro) {console.log(erro)};
});

app.listen(5000,  function () {
    console.log('web服务器已启动,端口:%s');
});