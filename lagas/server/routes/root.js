var express = require("express");
var router = express.Router();
var path = require("path");

function rootGet(req, res) {
  res.render(path.normalize(path.join(__dirname, "/../..")), "client");
}

router.get("/", rootGet);

module.exports = router;
