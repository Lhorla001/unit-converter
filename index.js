const oneMeter = 3.28084
const oneLitre = 0.264172
const oneKilogram = 2.20462

function calC() {
    let userInput = document.getElementById('textbox_id').value
    let meterConversion = userInput * oneMeter;
    let litresConversion = userInput * oneLitre;
    let kilogramsConversion = userInput * oneKilogram;
    
    document.getElementById("meter-conversion").textContent = meterConversion.toFixed(3);
    document.getElementById("meter-conversion-2").textContent = meterConversion.toFixed(3);
    document.getElementById("user-input").textContent = userInput;
    document.getElementById("user-input-2").textContent = userInput;
    document.getElementById("litres-conversion").textContent = litresConversion.toFixed(3);
    document.getElementById("litres-conversion-2").textContent = litresConversion.toFixed(3);
    document.getElementById("user-input-3").textContent = userInput;
    document.getElementById("user-input-4").textContent = userInput;
    document.getElementById("kilograms-conversion").textContent = kilogramsConversion.toFixed(3);
    document.getElementById("kilograms-conversion-2").textContent = kilogramsConversion.toFixed(3);
    document.getElementById("user-input-5").textContent = userInput;
    document.getElementById("user-input-6").textContent = userInput;
}

