// const car="mahandra thor"
// console.log(car)
// car ="xuv"
// console.log(car);//we can't change the variable when we declared the variable in const type
//String
let carname1="  volvo xc60 volvo  "
console.log(carname1);
//string length
console.log("The length of the string:",carname1.length) 
//escape sequence
console.log("\\\\Hello coder\'s,\"welcome you all\" \//");
//slice()
console.log(carname1.slice(1,4));
//substring() -similar to slice
console.log(carname1.substring(0,4));
//substr() -it contains two parameter (start,length)
console.log(carname1.substr(1,4));
//replace()
console.log(carname1.replace("volvo","marhandra"));
//replaceAll()
console.log(carname1.replaceAll("volvo","marhandra"));
//upper case
console.log(carname1.toUpperCase());
//lower case
console.log(carname1.toLowerCase());
//concatination
let a="apple",p="park";
console.log(a.concat(" ",p));
//trim or remove the white space
//1.remove the space from start
console.log(carname1.trimStart(),"/");
//2.remove from end
console.log(carname1.trimEnd(),"/");
//3.remove space from start and end
console.log(carname1.trim(),"/");

//padding (adding)
console.log(carname1.padStart(4,"x"));
console.log(a.padEnd(4,"x"));

//extracting string
console.log(a.charAt(0));//char
console.log(a.charCodeAt(0));//unicode
console.log(a[0]);//property index

//string split convert to array
console.log(carname1.split(","));//split when it see , comma
console.log(carname1.split(" "));//split when it see space
console.log(carname1.split("|"));//split when it see |


