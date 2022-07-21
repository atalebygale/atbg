
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


// Wedding Countdown

const countdown = () => {
    let now = new Date();
    let eventDate = new Date (2023, 7, 10);
  
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
  
  window.onload = () => {
    setInterval(writeRemTime, 1000);
   };