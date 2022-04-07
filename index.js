const oneMeter = 3.28084
const oneLitre = 0.264172
const oneKilogram = 2.20462
const oneFoot = 0.3048
const oneGallon = 4.54609
const onePound = 0.453592

function calC() {
    let userInput = document.getElementById('text').value
    let meterConversion = userInput * oneFoot;
    let litresConversion = userInput * oneGallon;
    let kilogramsConversion = userInput * onePound;
    let footConversion = userInput * oneMeter;
    let gallonConversion = userInput * oneLitre;
    let poundConversion = userInput * oneKilogram;
    
    document.getElementById("meter-conversion").textContent = meterConversion.toFixed(3);
    document.getElementById("foot-conversion").textContent = footConversion.toFixed(3);
    document.getElementById("user-input").textContent = userInput;
    document.getElementById("user-input-2").textContent = userInput;
    document.getElementById("litres-conversion").textContent = litresConversion.toFixed(3);
    document.getElementById("gallon-conversion").textContent = gallonConversion.toFixed(3);
    document.getElementById("user-input-3").textContent = userInput;
    document.getElementById("user-input-4").textContent = userInput;
    document.getElementById("kilograms-conversion").textContent = kilogramsConversion.toFixed(3);
    document.getElementById("pound-conversion").textContent = poundConversion.toFixed(3);
    document.getElementById("user-input-5").textContent = userInput;
    document.getElementById("user-input-6").textContent = userInput;
}

