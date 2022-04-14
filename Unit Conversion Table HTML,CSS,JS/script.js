let meterToFeet = 3.28084;
let literToGallon = 0.264172;
let kilosToLbs = 2.20462;

$(`#userInput`).on(`input`, function(){
    let metersToF = this.value*meterToFeet;
    $(`#length`).text(`${this.value} meters is ${metersToF.toFixed(3)} feet`);
});

$(`#userInput`).on(`input`, function(){
    $(`#volume`).text(`${this.value} liters is ${this.value*literToGallon.toFixed(3)} gallons`);
});

$(`#userInput`).on(`input`, function(){
    $(`#mass`).text(`${this.value} kilos is ${this.value*kilosToLbs.toFixed(3)} Lbs`);
});


