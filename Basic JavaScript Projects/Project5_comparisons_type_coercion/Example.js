function my_Function() { //Utilize JavaScript to make the browser display NaN
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Functiontrue() { //Utilize the isNaN() function to make the browser display “true.”
    document.getElementById("Test1").innerHTML = isNaN('This is a string');
}

function my_Functionfalse() { //Utilize the isNaN() function to make the browser display “false.”
    document.getElementById("Test2").innerHTML = isNaN('007');
}
