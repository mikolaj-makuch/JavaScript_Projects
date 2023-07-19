function Car_Function() {
    var Car_Output;
    var Cars = document.getElementById("Car_Input").value;
    var Car_String = " is a great car!";
    switch(Cars) {
        case "Ferrari":
            Car_Output = "Ferrari" + Car_String;
        break;
        case " Porsche":
            Car_Output = "Porsche" + Car_String;
        break;
        case "Ford":
            Car_Output = "Ford" + Car_String;
        break;
        case "Mercedes-Benz":
            Car_Output = "Mercedes-Benz" + Car_String;
        break;
        case "BMW":
            Car_Output = "BMW" + Car_String;
        break;
        case "Toyota":
            Car_Output = "Toyota" + Car_String;
        break;
        default:
            Car_Output = "Please enter a car exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Car_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("classmethod");
    A [0].innerHTML = "The text has changed!";
}

var c = document.getElementById("canvaschallenge"); //Line in the box
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
//END Line in the box

const a = document.getElementById("lineargradient"); //Gradient Color
const exa = a.getContext("2d");

const grd = exa.createLinearGradient(0,0,150,0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

exa.fillStyle = grd;
exa.fillRect(20,20,150,100);
//END Gradient Color