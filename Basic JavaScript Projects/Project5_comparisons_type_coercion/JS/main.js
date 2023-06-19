document.write(typeof "Word"); //"Type Of" Operator String

document.write("<br>");

document.write(typeof 3); //"Type Of" Operator Number

document.write("<br>");

document.write("10" + 5);//Type Coercion

document.write("<br>");

document.write(4E310); //Infinity

document.write("<br>");

document.write(-4E310); //Negative Infinity

document.write("<br>");

document.write(10 > 2); //Boolen Logic True

document.write("<br>");

document.write(10 < 2); //Boolen Logic False

console.log(2 + 2); //console.log() Method

console.log(10 < 2); //Display “false” in the console using Boolean logic and the console.log() method.

document.write("<br>");

document.write(10 == 10); //Double Equal Signs true

document.write("<br>");

document.write(19==3); //Double Equal Signs false

document.write("<br>");

document.write(10 === 10); //Return true by ensuring to match the data type and value.

document.write("<br>");

document.write(10==="2");//Return false by writing a different data type and different value.

document.write("<br>");

document.write(10 === "ten");//Return false by writing a different data type but the same value for both.

document.write("<br>");

document.write(2/4/2023 === 1/5/2021);//Return false by writing the same data type but a different value for both.

document.write("<br>");

document.write(10>3 && 4>1); //And Operator Assignment true

document.write("<br>");

document.write(10>11 && 4>1); //And Operator Assignment false

document.write("<br>");

document.write(10>5 || 4>10); //Or Operator Assignment true

document.write("<br>");

document.write(1>5 || 2>6);//Or Operator Assignment false

document.write("<br>");

function not_Function_false() {  //Not Operator Assignment false
    document.getElementById("Not_false").innerHTML = ! (20 > 10);
}

document.write("<br>");

function not_Function() {  //Not Operator Assignment true
    document.getElementById("Not").innerHTML = ! (20 > 30);
}