"use strict";
let transportationModes = ["motorcycle", "car", "bicycle", "scooter"];
// Printing statements about each item in the transportationModes array
for (let i = 0; i < transportationModes.length; i++) {
    console.log(`I would like to own a ${transportationModes[i]}.`);
}
let transportation = ["HONDA", "AUDI", "BMW"];
//use maping here  , map items ke andr values store kr dega aik aik kr ke jo aray me hen
transportation.map((item) => console.log(`I WOULD LOVE TO OWN A${item}`));
