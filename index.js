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
 setInterval(writeRemTime, 1000);
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

// Wedding Countdown

const countdown = () => {
  let now = new Date();
  let eventDate = new Date (2022, 4, 1);

  let currentTime = now.getTime();
  let eventTime = eventDate.getTime();

  let remTime = eventTime - currentTime;

  let s = Math.floor(remTime / 1000); //total seconds remaining
  let m = Math.floor(s / 60); //total minutes
  let h = Math.floor(m / 60);//total hours
  let d = Math.floor(h / 24); //total days

  let remDays = d
  let remHours = h % 24;
  let remMinutes = m % 60;
  let remSeconds = s % 60;

  return {
    remDays,
    remHours,
    remMinutes,
    remSeconds
  }
}

const writeRemTime = () => {
  const dayContainer = document.getElementById("days");
  const hourContainer = document.getElementById("hours");
  const minuteContainer = document.getElementById("minutes");
  const secondContainer = document.getElementById("seconds");

  const remTime = countdown();
  dayContainer.innerHTML = remTime.remDays;
  hourContainer.innerHTML = remTime.remHours;
  minuteContainer.innerHTML = remTime.remMinutes;
  secondContainer.innerHTML = remTime.remSeconds;
}
