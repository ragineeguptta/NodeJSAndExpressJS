// var generateName = require('sillyname');
// var sillyName = generateName();

// console.log(`My name is ${sillyName}.`);
//CommonJS

import generateName from "sillyname";
import superHeroName from "superhero";
import superheros from "superheroes";

var sillyName = generateName();
console.log(`My name is ${sillyName}.`);

// Use 'new' to instantiate the superhero name
var superHero = new superHeroName();
console.log(`I am ${superHero}!`);


const name = superheros.random;
console.log(`I am ${name}!`);
