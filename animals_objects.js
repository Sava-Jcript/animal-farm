"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

function start( ) {
    console.log("ready");

    loadJSON();
}


const Animals = {
    name:"",
    type:"",
    desc: "", 
    age:0
}; 


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
        console.log(jsonData);
    });
}



function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        const animal = Object.create(Animals);
        const text = jsonObject.fullname.split(" ", 4);

        animal.age = jsonObject.age;
        animal.name = text[0];
        animal.type = text[2];
        animal.desc = text[3];

        allAnimals.push(animal);
       
        // TODO: Create new object with cleaned data - and store that in the allAnimals array
        
        // TODO: MISSING CODE HERE !!!
    });

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
}

function displayAnimal(allAnimals) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = allAnimals.name;
    clone.querySelector("[data-field=desc]").textContent = allAnimals.desc;
    clone.querySelector("[data-field=type]").textContent = allAnimals.type;
    clone.querySelector("[data-field=age]").textContent = allAnimals.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild(clone);
    
}


