import {
  app
} from '../main.js';


console.log("generalService");

app.controller("MyTestController", ['generalService', function(generalService){
  var tThis = this;
console.log(generalService);







}] )
