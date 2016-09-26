/**
 *  *   @author Bregula, Arkadiusz (bregula.arek@gmail.com)
 *  *   @version 0.0.1
 *  *   @summary Project 1
 *  */

"use strict";
const PROMPT = require('readline-sync');
const BASE_PRICE = 50000;
const BEDROOM_PRICE = 17000;
const BATHROOM_PRICE = 12500;
const CAR_PRICE = 6000;

let lotNumber, numBedrooms, numBathrooms, garageSize, totalPrice;

function main() {
	welcome_message();
	getLotNumber();
	getNumBedrooms();
	getNumBathrooms();
	getGarageSize();
	calculateTotalPrice();
	displayTotalPrice();
}

main();

function welcome_message() {
	console.log("----------------------------------------------------------------");
	console.log("RRRRRR  iii                        FFFFFFF         lll lll      ");
	console.log("RR   RR     vv   vv   eee  rr rr   FF        aa aa lll lll  sss ");
	console.log("RRRRRR  iii  vv vv  ee   e rrr  r  FFFF     aa aaa lll lll s    ");
	console.log("RR  RR  iii   vvv   eeeee  rr      FF      aa  aaa lll lll  sss ");
	console.log("RR   RR iii    v     eeeee rr      FF       aaa aa lll lll     s");
	console.log("                                                            sss ");
	console.log("----------------------------------------------------------------");
	console.log("River Falls Homes Construction Company Quote Generator v0.0.1\n\n");
}

function getLotNumber() {
	lotNumber = PROMPT.questionInt("Please enter the lot number: ");
}

function getNumBedrooms() {
	numBedrooms = PROMPT.questionInt("Please enter the number of bedrooms: ");
}


function getNumBathrooms() {
	numBathrooms = PROMPT.questionInt("Please enter the number of bathrooms: ");
}

function getGarageSize() {
	garageSize = PROMPT.questionInt("Please enter the amount of cars the garage holds: ");
}

function calculateTotalPrice() {
	totalPrice = BASE_PRICE + (BEDROOM_PRICE * numBedrooms) + (BATHROOM_PRICE * numBathrooms) + (CAR_PRICE * garageSize);
}

function displayTotalPrice() {
	console.log("The price of your house is: $" + totalPrice);
}
