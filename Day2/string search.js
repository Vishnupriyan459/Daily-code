text="place locate where 'Locate' occur\'s locate"
//search by index
console.log(text.indexOf("locate"));//(return the start postion from string)
console.log(text.lastIndexOf("locate"));//(return the last time postion from string)
//search is similar to index method
console.log(text.search("locate"));
console.log(text.search(/locate/));
//The match() method returns an array containing the results of matching a string against a string (or a regular expression)
console.log(text.match("where"));
console.log(text.match(/where/));
console.log(text.match(/where/g));//select multiple time to return
console.log(text.match(/where/gi));//it case-insentitive

console.log(text.matchAll("where"));
console.log(text.matchAll(/where/g));
console.log(text.matchAll(/where/gi));
//include return true or false based on the presence of the word in that string
console.log(text.includes("where"));
console.log(text.includes("where",13));
//return true or false based on the presence of the word in that string
console.log(text.startsWith("where"));//from start position of that string
console.log(text.startsWith("where",13));
console.log(text.endsWith("where"));//from end postion of the string

//string template
let word=`the string using backlit,interposion `
console.log(`This is ${word}`)
//