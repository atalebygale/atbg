
/*
let cat = 'Louise';
let catYears = 15; //Louise's age
const firstYear = 15; //1st year of life
const secondYear = 9; //2nd year of life
const laterYears = (catYears - 2) * 4; //all years over 2
const humanYears = firstYear + secondYear + laterYears; 
return humanYears
console.log(`Hi, I'm ${cat}. I am ${catYears} years old in cat years, and ${humanYears} years old in human years. I'm so glad mom didn't put me down!`);
*/

/*(document
parseInt.querySelector("#height").value)*/
/*
const catToHumanAge =  (catAge) => {
    if (catAge < 1) {
        return 15 * catAge;
    } else if (catAge < 2) {
        return 15 + ((catAge - 1) * 9)
    }

    const firstYear = 15;
    const secondYear = 9;
    const laterYears = (catAge - 2) * 4;
    const humanAge = firstYear + secondYear + laterYears; 
    return humanAge;
}

const printCatToHumanAge = () => {
    const catName = document
        .querySelector("#catname").value;
    const catAge = parseInt(document
        .querySelector("#catage").value)
    return `Hi. I'm ${catName}. I am ${catAge} years old. If I were a hooman, I'd be ${catToHumanAge(catAge)} years old.`
}

const btn = document.querySelector("#btn")
btn.addEventListener('click', () => {
    console.log("clicked")
    const result = printCatToHumanAge()
    document.querySelector("#result").innerHTML = result
})

