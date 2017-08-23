import './main.less'
var app = require("moduler")

console.log(app)

var a = app.module('something', function(){
	return {a:1,b:2}
})

var c = app.run(['something'], function(something){
	return something
})

var abc = {"a":"a","b":"b","c":"c"}
var {a,b} = abc

app.model({User, Permission})

// console.log(c, a)