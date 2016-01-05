var express = require('express');
var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));
app.use(express.static('./node_modules/font-awesome'));

app.listen(process.env.PORT || 3000);
