"use strict";
let guestList = ["OSAF", "HASNAIN", "USAID", "AREEBA", "UMAIMA", "ANAS"];
//print msg
console.log("UNFORTUNATELY ! THE NEW DINNER TABLE WONT ARRIVE SO WE CAN INVITE ONLY TWO GUEST");
//REMOVE GUEST UNTIL 2 REMAINS ANS SEND MSG TO THEM ,use while bcz want to send msg with every time 1 person ko kick krengen
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    if (removeGuest !== undefined) {
        console.log(`sorry ${removeGuest} we cannot invite you`);
    }
}
//console.log(guestList);
//print ms to remaing people
guestList.forEach(guest => {
    console.log(`"DEAR ${guest} you are still invited todinner`);
});
//REMOVE ALL POEPLE AND PRINT EMPTY LIST
guestList.splice(0, guestList.length); //0 se ekr jtna arrya ki length and sb ko remove kr do
//printempty list
console.log("UPDATED LIST OF GUEST ", guestList);
