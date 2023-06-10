var A = ("Function Assignment") //window.alert() method

var B = ("is done!") //document.write() methods

function changeColor(newColor) { //blue/red change color function
    const elem = document.getElementById("para");
    elem.style.color = newColor;
}

function myFunction() { //+= operator
    var sentance = "I am learning";
    sentance += " a lot from this course!";
    document.getElementById("Concatenate").innerHTML = sentance;
}