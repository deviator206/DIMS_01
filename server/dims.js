var express = require("express");
var app = express();

app.use(express.static(__dirname+"/public"));



var router = express.Router();

router.get("/",function(req,resp){

	console.log('test  man!!'+req.url);
	resp.end();
});


app.use("/api",router);
app.listen(process.env.PORT||3000)

