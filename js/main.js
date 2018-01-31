"use strict";

console.log("hi there");

let startTime = Date.now();
console.log("startTime: ", startTime);

for (let i = 0; i < 2000000; i++){
    let x = i + i/2 * 6;
};
console.log("new time: ", Date.now());

let bigDataRequest = new XMLHttpRequest(); //a javascript thing

bigDataRequest.addEventListener("load", bigDataComplete);
bigDataRequest.addEventListener("error", bigDataFailed);

//data complete function
function bigDataComplete(event){
    console.log("event", event);
    if(event.target.status === 200){
        let bigData = JSON.parse(event.target.responseText);
        console.log("Time of Big Data", Date.now() - startTime);
        console.log("data", bigData);
    }else{
        console.log("check the spelling of your file");
    }
} //200 is a successful call in javascript universally


//data failed function
function bigDataFailed(event){
    console.log("oops something went wrong...try again!", event);
}


bigDataRequest.open("GET", "JEOPARDY_QUESTIONS1.JSON");
//opened up this file
bigDataRequest.send();

let dataRequest = new XMLHttpRequest();
dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);

function dataRequestComplete(event){
    console.log("colors have loaded");
    let colorData = JSON.parse(event.target.responseText);
    console.log("colorData: ", colorData);
    showData(colorData);
} 

function showData(taco){
    let colorDiv = document.getElementById("all-my-colors");
    let colorData = '';

    for (let item in taco){
        let colorItem = taco[item];
        colorData += `<div><h2>${colorItem.color}: ${colorItem.value}</h2></div>`;
    };
colorDiv.innerHTML = colorData;
console.log("the colors are done", Date.now() - startTime);
};
// $ basically allowed a javascript code to enter into HTML

function dataRequestFailed(event) {
    console.log("oops! Something went wrong...Try again!");
}

dataRequest.open("GET", "COLOR.JSON");
dataRequest.send();
//we called the big data first, big the color data showed up first on the console...because jeopardy took so long to load.

