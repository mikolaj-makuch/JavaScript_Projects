function Call_Loop() { //Call Loop Assignment
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function String_Length() { //String Length Assignment
    var text = "Hellow World!";
    var length = text.length;
    document.getElementById("Length").innerHTML = length;
}

var Instruments = ["Guitars", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //Loop Assignment
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { //Array Assignment
    var array = [];
    array[1] = "HTML";
    array[2] = "CSS";
    array[3] = "JavaScript";
    document.getElementById("Array").innerHTML = array[1] + " is use to create a sceletone of the web page."
}

function constant_function() { //Constant Assignment
    const Car ={model:" SF90 XX SPIDER", make:"Ferrari", color:"red"};
    Car.color = "yellow";
    Car.price = "250 000$";
    document.getElementById("Constant").innerHTML = "The cost of the " + Car.make
    + Car.model + " is " + Car.price + " in " + Car.color + " color.";
}

function let_function(){ //Let Assignment
var X = 100;
document.write(X);
{
    let X = 25;
    document.write("<br>" + X);
}
document.write("<br>" + X);
document.getElementById("Let").innerHTML;
}

function return_function() { //Return Assignment
    return Math.PI;
}
document.getElementById("Return").innerHTML = return_function();

let hotel = { //Object Assignment
    name: "Tortuga hotel",
    location: "Spain",
    date: "12 - 22 July 2023",
    weather: "Sunny 28 degrees Celsius",
    description : function() {
        return "We are going to the " + this.location + " to " + this.name
        + " in " + this.date + " and the weather should be " + this.weather + "."
    }
};
document.getElementById("Hotel_Object").innerHTML = hotel.description();

let text1 = ""; //Break Statement
for (let i = 0; i < 10; i++) {
    if ( i === 3) {break; }
    text1 += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text1;

let text2 = ""; //Continue Statement
for (let i = 0; i < 11; i++) {
    if ( i === 3) {continue; }
    text2 += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text2;