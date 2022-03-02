
/* SIMPLE VERSION for tiktok demo
let cat = 'Louie';
let catYears = 15; //Louie's age
const firstYear = 15; //1st year of life
const secondYear = 9; //2nd year of life
const laterYears = (catYears - 2) * 4; //all years over 2
const humanYears = firstYear + secondYear + laterYears; 
return humanYears
console.log(`Hi, I'm ${cat}. I am ${catYears} years old in cat years, and ${humanYears} years old in human years. I'm so glad mom didn't put me down!`);
*/

//Version using functions
/*
//Function to convert cat years to human years
const catToHumanYears = (catYears) => {
   //What to do if cat is younger than 1
    if (catYears < 1) {
        return catYears * 15
    //What to do if cat is younger than 2
    } else if (catYears < 2) {
        return 15 + ((catYears - 1) * 9);
    }
    //Calculations for converting cat years to human years
    const firstYear = 15
    const secondYear = 9
    const laterYears = (catYears - 2) * 4
    //Add all the variables together to get human years
    const humanYears = firstYear + secondYear + laterYears
    return humanYears
}

//Function to print the result of catToHumanYears
const printCatToHumanYears = () => {
    `A ${catYears} year old cat is ${catToHumanYears(catYears)} in human years.`
}
*/

//Function to convert cat years to human years
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


 //Function to print the result of catToHumanYears
 const printCatToHumanYears = () => {
    const catYears = document.querySelector("catage");
    return `A ${catYears} year old cat is ${catToHumanYears(catYears)} in human years.`
 }

 window.onload = () => {
    let button = document.querySelector("#btn");
    let result = printCatToHumanYears();
    result = document.querySelector("result")
  
    // Function for calculating human years
    button.addEventListener("click", printCatToHumanYears);
};