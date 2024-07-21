let personName: string = "Eric";

// Lowercase
console.log("Lowercase:", personName.toLowerCase());

// Uppercase
console.log("Uppercase:", personName.toUpperCase());

// Titlecase
console.log("Titlecase:", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());


//?In the code you provided, personName.slice(1) is extracting a substring starting from the second character of personName (index 1) to the end of the string, effectively excluding the first character


//!personName.charAt(0): This part retrieves the first character of the personName string.

//!.toUpperCase(): This method converts the first character retrieved in step 1 to uppercase.

//!personName.slice(1): This part extracts the substring of personName starting from the second character (index 1) till the end of the string.

//!.toLowerCase(): This method converts all characters in the substring obtained in step 3 to lowercase.

let personname : string = "syed Anas";
console.log("lower case ",personname.toLowerCase());
console.log("uppper case ",personname.toUpperCase() );
console.log("TITLE CASE ",personname.replace(/\b\w/g , c=>c.toUpperCase()));

;
