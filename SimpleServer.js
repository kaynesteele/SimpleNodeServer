const express = require('express')
const app = express()
var fs = require('fs');

words = fs.readFileSync('temp.txt');

app.get('/', (req, res) =>{
	words = fs.readFileSync('temp.txt');
	var temp = String(words);
	res.send("<h1 style='font-size: 200;'>" + temp + "</h1>");
});

app.get('/temperature/:temp', (req, res) => {

	fs.writeFileSync('temp.txt', String(req.params.temp));
	res.send("added");

});

app.listen(8080, () =>{
console.log("Started");
});
