// Date Generator

// Array of date options
const dates = [
    {date1: "Picnic in the park with bread, cheese, and wine."},
    {date1: "Appetizers and drinks downtown."},
    {date1: "Cook a gourmet dinner at home together."},
    {date1: "Try a new restaurant!"},
    {date1: "Picnic on the porch."},
    {date1: "Go to a new bar and choose each other's cocktail."}
];

// function to choose a random object from the array above

function newDate() {
    // create a variable to represent a random number
    const randomNumber = Math.floor(Math.random() * (dates.length));
    // create a variable of value in order to pull the value from the object in the array
    const value = Object.values(dates[randomNumber]);
    // print that value in the div with the ID of #datenightresult
    document.getElementById("datenightresult").innerHTML = value;
    // console.log to test it
    console.log(dates[randomNumber]);
}

// when the button is clicked, it will trigger the function listed above
const dateButton = document.getElementById("dategeneratorbutton");
dateButton.addEventListener("click", newDate);

