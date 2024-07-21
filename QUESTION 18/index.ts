//array of cities
let placeToVist : string[]= ["New York", "paris", "autralia", "lebano"];

//print in original order
console.log("ORIGINAL ORDEER: " , placeToVist);

///PRINT ARRAY IN /ALPHABETIC ORDER

console.log("ALPHANETICAL ORDER" ,placeToVist.slice().sort()); //slice array ke har element ko aik new array bana deta hai

//PRINT IT IN ORIGINAL ORDER
console.log("ORIGINAL ORDEERvAFTER SORITNG: " , placeToVist)

//print array in reverse alphabetical  order without changing order
console.log("REVERSE ALPHANETICAL ORDER" ,placeToVist.slice().sort().reverse()); 

//original order
console.log("ORIGINAL ORDER AFTER REVESING: " , placeToVist);


//RRVERSE ORIGINAL LIST
console.log("REVERSE ORIGINAL LIST: " , placeToVist.reverse());

//again  reverse to original order
console.log("REVERSE  LIST AGAIN REVERSE FOR ITS ORIGINA POSITION: " , placeToVist.reverse());


//SORT YOUR ARRAY SO ITS TSORE INNALPHABETICA ORDER
console.log("AGAIN SORTED IN ALPHANETICAL ORDER" ,placeToVist.slice().sort());


//REVERSE SORTED ARRAY
console.log("AGAIN REVERDED SORTED ARRAY" ,placeToVist.slice().sort().reverse()); 





