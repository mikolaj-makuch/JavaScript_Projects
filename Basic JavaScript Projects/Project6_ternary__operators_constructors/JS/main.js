function Ride_Function() { //Ternary_Operators_Constructors Assignment
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}//END Ternary_Operators_Constructors Assignment

function Vote_Function() { //Ternary Operators Challenge
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age > 17) ?"You can vote!":"You are not old enough to vote.";
    document.getElementById("Vote").innerHTML = Can_Vote;
}//END Ternary Operators Challenge

function Vehicle (Make, Model, Year, Color) { //Keyword Assignment
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufacture in " + Erik.Vehicle_Year;
}//END Keyword Assignment

function Earnings (Job, Hours, Salary) { //My Keyword Assignment
    this.Earnings_Job = Job;
    this.Earnings_Hours = Hours;
    this.Earnings_Salary = Salary;
}
var Mike = new Earnings ("Engineer", 160, 4500);
var James = new Earnings ("Car Dealer", 100, 5000);
var Monica = new Earnings ("Chef", 200, 2800);
function newkeyword() {
    document.getElementById("New_Keyword").innerHTML =
    "Mike works as a " + Mike.Earnings_Job + " " +Mike.Earnings_Hours
    + " hours and earns " + Mike.Earnings_Salary + "$ per month."
}//END My Keyword Assignment

function jackpot(Date, Time, Win) { //Reserved Keyword Challenge
    this.jackpot_Date = Date;
    this.jackpot_Time = Time;
    this.jackpot_Win = Win;
}
var false = new jackpot("02.05.2023", "11:32", 3000000);
function reserved_keyword() {
    document.getElementById("reserved_key").innerHTML =
    "On " + win.jackpot_Date + " at " + win.jackpot_Time + " Mike won " + win.jackpot_Win + "$ in cash!";
}//END Reserved Keyword Challenge

function count_function() { //Nested Functions
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var starting_point = 9;
        function plus_one() {starting_point += 1;}
        plus_one();
        return starting_point;
    }
} //END Nested Functions