var buildingMaterial = document.getElementById("building").value;
var handTools = document.getElementById("handtools").value;
var powerTools = document.getElementById("powertools").value;
var electricalSupplies = document.getElementById("electric").value;
var plumbingSupplies = document.getElementById("plumbing").value;
var paint = document.getElementById("paint").value;
var number = document.getElementById("number");

var delivPrice = document.getElementById("loc").value;

const btnOrder = document.getElementById("btn-order");

function logger() {
console.log(buildingMaterial);
console.log(handTools);
console.log(powerTools);
console.log(electricalSupplies);
console.log(plumbingSupplies);
console.log(paint);
console.log(number);
console.log(supplies);
}

btnOrder.addEventListener("click", (e) => {
e.preventDefault();

tracy();
});

function tracy() {
if (buildingMaterial == "cement") {
buildingPrice = 550;
} else if (buildingMaterial == "steel") {
buildingPrice = 400;
} else if (buildingMaterial == "wood") {
buildingPrice = 800;
} else if (buildingMaterial == "bricks") {
buildingPrice = 25;
} else if (buildingMaterial == "stone-tiles") {
buildingPrice = 150;
} else {
alert("enter correct value 1");
}

if (handTools == "wrenches") {
handPrice = 750;
} else if (handTools == "pliers") {
handPrice = 900;
} else if (handTools == "cutters") {
handPrice = 1500;
} else if (handTools == "screwdrivers") {
handPrice = 250;
} else if (handTools == "hammers") {
handPrice = 600;
} else {
alert("enter correct value 2");
}

if (powerTools == "drills") {
powerPrice = 4000;
} else if (powerTools == "saws") {
powerPrice = 6000;
} else if (powerTools == "sanders") {
powerPrice = 3000;
} else if (powerTools == "grinders") {
powerPrice = 5000;
} else if (powerTools == "leaf-blowers") {
powerPrice = 2000;
} else {
alert("enter correct value 3");
}

if (electricalSupplies == "outlets") {
electricalPrice = 200;
} else if (electricalSupplies == "electrical fuses") {
electricalPrice = 150;
} else if (electricalSupplies == "power strips") {
electricalPrice = 3000;
} else if (electricalSupplies == "surge protectors") {
electricalPrice = 1500;
} else if (electricalSupplies == "extentions") {
electricalPrice = 800;
} else {
alert("enter correct value 4");
}

if (plumbingSupplies == "pipes") {
plumbingprice = 500;
} else if (plumbingSupplies == "basin wrenches") {
plumbingprice = 700;
} else if (plumbingSupplies == "plumber's torch") {
plumbingprice = 280;
} else if (plumbingSupplies == "thread sealing tape") {
plumbingprice = 50;
} else if (plumbingSupplies == "hacksaw") {
plumbingprice = 350;
} else {
alert("enter correct value 5");
}

if (paint == "enamelpaint") {
paintPrice = 2800;
} else if (paint == "oilpaint") {
paintPrice = 2000;
} else if (paint == "plasticpaint") {
paintPrice = 1800;
} else if (paint == "cementpaint") {
paintPrice = 600;
} else if (paint == "anticorrosivepaint") {
paintPrice= 1200;
} else {
alert("enter correct value 6");
}

var total =
buildingPrice +
handPrice +
powerPrice+
electricalPrice +
plumbingprice +
paintPrice;

console.log(total);

var finalTotal = parseInt(number.value) * total;
alert("Your order will cost: " + finalTotal);
}

function delivery(){

if(delivPrice == "within"){
delivPrice = 500;
}
else if(delivPrice == "10km-after"){
delivPrice = 1000;
}
else{
delivPrice = 0;
alert("we dont deliver there");
}

if (buildingMaterial == "cement") {
buildingPrice = 550;
} else if (buildingMaterial == "steel") {
buildingPrice = 400;
} else if (buildingMaterial == "wood") {
buildingPrice = 800;
} else if (buildingMaterial == "bricks") {
buildingPrice = 25;
} else if (buildingMaterial == "stone-tiles") {
buildingPrice = 150;
} else {
alert("enter correct value 1");
}

if (handTools == "wrenches") {
handPrice = 750;
} else if (handTools == "pliers") {
handPrice = 900;
} else if (handTools == "cutters") {
handPrice = 1500;
} else if (handTools == "screwdrivers") {
handPrice = 250;
} else if (handTools == "hammers") {
handPrice = 600;
} else {
alert("enter correct value 2");
}

if (powerTools == "drills") {
powerPrice = 4000;
} else if (powerTools == "saws") {
powerPrice = 6000;
} else if (powerTools == "sanders") {
powerPrice = 3000;
} else if (powerTools == "grinders") {
powerPrice = 5000;
} else if (powerTools == "leaf-blowers") {
powerPrice = 2000;
} else {
alert("enter correct value 3");
}

if (electricalSupplies == "outlets") {
electricalPrice = 200;
} else if (electricalSupplies == "electrical fuses") {
electricalPrice = 150;
} else if (electricalSupplies == "power strips") {
electricalPrice = 3000;
} else if (electricalSupplies == "surge protectors") {
electricalPrice = 1500;
} else if (electricalSupplies == "extentions") {
electricalPrice = 800;
} else {
alert("enter correct value 4");
}

if (plumbingSupplies == "pipes") {
plumbingprice = 500;
} else if (plumbingSupplies == "basin wrenches") {
plumbingprice = 700;
} else if (plumbingSupplies == "plumber's torch") {
plumbingprice = 280;
} else if (plumbingSupplies == "thread sealing tape") {
plumbingprice = 50;
} else if (plumbingSupplies == "hacksaw") {
plumbingprice = 350;
} else {
alert("enter correct value 5");
}

if (paint == "enamelpaint") {
paintPrice = 2800;
} else if (paint == "oilpaint") {
paintPrice = 2000;
} else if (paint == "plasticpaint") {
paintPrice = 1800;
} else if (paint == "cementpaint") {
paintPrice = 600;
} else if (paint == "anticorrosivepaint") {
paintPrice= 1200;
} else {
alert("enter correct value 6");
}

var total =
buildingPrice +
handPrice +
powerPrice+
electricalPrice +
plumbingprice +
paintPrice;

console.log(total);

var finalTotal = parseInt(number.value) * total;

var totalAfterDelivery = finalTotal + delivPrice;
alert("Your final amount after delivery will be: " +totalAfterDelivery);

}
