let text = '{';
text += '   "firstName": "Micke",';
text += '   "lastName": "Olsson",';
text += '   "age": 43';
text += '}';

console.log(text);
console.log(typeof text);

let obj = JSON.parse(text);
console.log(obj);
console.log(typeof obj);