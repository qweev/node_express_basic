var express = require("express");
var app = express();
var router = require("./extapi/extapi.js");
var vv = require("./vars.js");
var car = require("./carClass.js");
var validator = require("validator");

var c = new car("abc", 123);
console.log("car message:" + c.age());

console.log("vv = " + vv.b);
console.log("vv = " + vv.a);

app.set("mysetting", "setting description");
console.log("s d - " + app.get("mysetting"));

app.get("/", (req, res) => {
  res.send("main route");
});

// fetch routes from other file
app.use("/api/v1", router);

app.get("/redirect", (req, res) => {
  res.redirect("/api/v1");
});

//http://localhost:3003/api/22/11
app.get("/api/:version/:num", (req, res) => {
  console.log("param request");
  var p1 = req.params.version;
  var p2 = req.params.num;
  res.send("param " + p1 + p2);
});

//localhost:3003/api?version=22&par=abc
app.get("/api", (req, res) => {
  console.log("param request");
  var p1 = req.query.version;
  var p2 = req.query.par;
  res.send("param " + p1 + p2);
});

//validator example
//http://localhost:3003/val/22
app.get("/val/:val", (req, res) => {
  console.log("val request");
  var p1 = req.params.val;
  console.log("is num:" + validator.isNumeric(p1));
  console.log("is IP:" + validator.isIP(p1));
  var r = validator.isNumeric(p1);
  res.send("val = " + r);
});

app.listen(3003, function () {
  console.log("server run");
});
