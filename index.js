// Cat to human yeasr
const catToHumanYears = (catYears) => {
  if (catYears < 1) {
      return catYears * 15
  } else if (catYears < 2) {
      return 15 + ((catYears - 1) * 9);
  }
  const firstYear = 15
  const secondYear = 9
  const laterYears = (catYears - 2) * 4
  const humanYears = firstYear + secondYear + laterYears
  return humanYears
}
 const printCatToHumanYears = () => {
 const catAge = document.getElementById("catage").value;
 const catAgeNumber = parseInt(catAge);
 return `A ${catAge} year old cat is ${catToHumanYears(catAgeNumber)} in human years.`
}

window.onload = () => {
 let button = document.querySelector("#btn");
 button.addEventListener("click", ()=> {
     console.log("clicked");
     const result = printCatToHumanYears();
     const answerBox = document.querySelector("#result");
     answerBox.innerHTML = result;
     window.scrollBy(0, answerBox.scrollHeight + 50);
  
 })
};


// Clock
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand')
const minuteHand = document.querySelector('[data-minute-hand')
const secondHand = document.querySelector('[data-second-hand')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
     
}
setClock()

// Nursing organizer

// PI javascript

const piButton = document.getElementById('piButton');

piButton.addEventListener('click', function handleClick() {
  piButton.innerHTML = '3.14159265359'});

// piButton(handleClick());


// Celsius to Fahrenheit

// User clicks a button
// Get the value from the celsius input
// Calculate the degrees in fahrenheit
// Print a message 'celsius....fahrenheit' on the screen


const celsiusToFahrenheit = () => {
  const celsius = document.getElementById("celsius").value;
  const celsiusValue = parseInt(celsius);
  const fahrenheitValue = (celsiusValue * 1.8) + 32;
  const message = `${fahrenheitValue} degrees fahrenheit.`;
  const temperatureAnswerBox = document.getElementById("tempResult");
  temperatureAnswerBox.innerHTML = message;
}


const tempButton = document.getElementById("tempButton");
tempButton.addEventListener("click", celsiusToFahrenheit);

