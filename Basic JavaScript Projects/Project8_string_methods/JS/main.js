function full_Sentance() { //This is the concat method
    var part_1 = "I have "; 
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentance.";
    var whole_sentance = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentance;
}

function slice_Method() { //I used here the slice method
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function uppercasemethod() { //This function makes every letter to be upper
    var str = "is it upper case method?";
    var string = str.toUpperCase();
    document.getElementById("Uppercase").innerHTML = string;
}

function searchmethod() { //This method search a position of the first match
var text = "Hello world! How are you?"
var position = text.search("you");
document.getElementById("searchmethod").innerHTML = position;
}

function string_method() {
    var X = 213;
    document.getElementById("numbers_to_string").innerHTML = X.toString()
}

function precision_method() { //This function shorten numbers to X numbers
    var X = 12123.1242353465345435;
    document.getElementById("precision").innerHTML = X.toPrecision(10);
}

function fixedmet() { //This function shorten numbers after dot to X numbers
    var X = 5.52344;
    document.getElementById("fixed").innerHTML = X.toFixed(3);
}

function valuemet() { //The valueOf method returns the primitive value of a string.
    var text = "This is the value method.";
    document.getElementById("value").innerHTML = text.valueOf();
}