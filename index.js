var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/' , function(req,res){
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/map' , function(req,res){
    res.sendFile(__dirname + '/public/templates/map.html');
})
app.get('/cqueue' , function(req,res){
    res.sendFile(__dirname + '/public/templates/cqueue.html');
})

app.listen(3000);

console.log("listening on: 3000" );