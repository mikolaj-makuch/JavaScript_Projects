function addition_Function() { //addition method
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() { //subtraction method
    var subtraction = 5-2;
    document.getElementById("Math").innerHTML ="5 - 2 = " + subtraction;
}

function multiplication() { //multiplication method
    var simply_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 * 8 = " + simply_Math;
}

function division() { //division method
    var simply_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simply_Math;
}

function more_Math() { //more complicated equation
    var simply_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simply_Math;
}

function modulus_Operator() { //reminder
    var simply_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simply_Math;
}

function negation_Operator() { //negation
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

function increment() { //increment
    var X=5;
    X++;
    document.getElementById("Math").innerHTML = X;
}

function decrement() { //decrement
    var X=5.25;
    X--;
    document.getElementById("Math").innerHTML = X;
}

window.alert (Math.random() * 100); //random number 0-100

function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    }
    document.getElementById("Dictionary").innerHTML = Animal.Sound
}