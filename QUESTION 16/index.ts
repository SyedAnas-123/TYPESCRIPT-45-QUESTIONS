//THIS IS UPDATED ARRAY LIST OF 15 EX:
 let guestList : string[] =["OSAMA", "HASNAIN", "ANAS"];

 console.log("GREAT NEWS WE FOUND A BIGGER TABLE \n");


 //ADD NEW GURST AT BEGINNING SO USE UNSHIFT
 guestList.unshift("OSAF");
 console.log(guestList);



 //ADD AT MIDDLE OF ARRAY so use splice , and use math.floor jo number ko rounf off krta hai , USE APLICE TO ADD 
 guestList.splice(Math.floor(guestList.length / 2) , 0 , "AREEBA"); //SO WHEN 4 /2 = 2 AEEGA BCZ WE HAVE 4 ELEMENTS IN ARRAY SO DONO AIK IS SIDE CHALA JAEGA OR AIK IS SIDE CHALA JAEGA OR US BEECVH ME NEW ELEMENT ADD HOJAEGA OR MATH.FLOOR  JBH USE HOTA JBH KOI ODD VALUE HOTI OR POINT AJATA
 console.log(guestList);
 
 
 
//ADD AT  THE END or use append
guestList.push("UMAIMA")
console.log(guestList);


//msg to all members

guestList.forEach(guest =>{
    console.log(`${guest} YOU ALL AE INVITED TO DINNER`);
    

}
);

