"use strict";
//ALL GUEST
let Guestlist = ["ANAS", "BABA", "HASNAIN"];
//print the name who is not invited fro dinner
let unableToAttend = Guestlist.splice(0, 1)[0]; //how many wlements want to delete from index 0
//The reason for adding [0] in Guestlist.splice(0, 1)[0] is that splice returns an array of the removed elements. Since splice(0, 1) removes one element from the start of the array and returns an array containing just that one element, you need to access the first element of this returned array to get the actual string value.
console.log(`${unableToAttend} not invited for dinner`);
//ADD NEW GUEST"
let newGuest = Guestlist.push("USAID");
//console.log(Guestlist);
console.log(`NOW YOU ARE IVITED TO DINNER ${newGuest}`);
//print a msg
Guestlist.forEach(guest => {
    console.log(`DEAR ${guest} YOU ARE INVITED TO DINNNER`); //array ke sb elements pr laga dega ye msg
});
