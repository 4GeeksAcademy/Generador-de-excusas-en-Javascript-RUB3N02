import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {/* recargar pantalla*/
  //write your code here
  console.log("Hello Rigo from the console!");
  //crear arrais con frases//
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  //Generar numeros randon//
  let whoNumber = Math.floor(Math.random()*who.length);/*who*/
  let actionNumber = Math.floor(Math.random()*action.length);/*action*/
  let whatNumber =Math.floor(Math.random()*what.length);/*what*/
  let whenNumber = Math.floor(Math.random()*when.length);/*when*/
  //document.querySelector()//
document.querySelector("#excusa").innerHTML= `${who[whoNumber]} ${action[actionNumber]} ${what[whatNumber]} ${when[whenNumber]}.`;
  
  
};
