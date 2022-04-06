// metric conversion app
const oneMeter = 3.28084
const oneLitre = 0.264172
const oneKilogram = 2.20462

function calC() {
    let userInput = document.getElementById('textbox_id').value
    let meterConversion = userInput * oneMeter;
    let litresConversion = userInput * oneLitre;
    let kilogramConversion = userInput * oneKilogram;
    
    document.getElementById("meter-conversion").textContent = meterConversion.toFixed(3);
    document.getElementById("meter-conversion-2").textContent = meterConversion.toFixed(3);
    document.getElementById("user-input").textContent = userInput;
    document.getElementById("user-input-2").textContent = userInput;
    document.getElementById("litres-conversion").textContent = litresConversion.toFixed(3);
    document.getElementById("litres-conversion-2").textContent = litresConversion.toFixed(3);
    document.getElementById("user-input-3").textContent = userInput;
    document.getElementById("user-input-4").textContent = userInput;
    document.getElementById("kilogram-conversion").textContent = kilogramConversion.toFixed(3);
    document.getElementById("kilogram-conversion-2").textContent = kilogramConversion.toFixed(3);
    document.getElementById("user-input-5").textContent = userInput;
    document.getElementById("user-input-6").textContent = userInput;
}


userInput = 8
kilogramConversion = userInput * oneKilogram;
 console.log (kilogramConversion)

