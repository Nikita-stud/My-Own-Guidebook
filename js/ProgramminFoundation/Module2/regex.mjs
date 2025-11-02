// \d means “any digit”,
//^ means “start of string”,
//[A-Z] means “any uppercase letter
//.test(), .search(), .match(), .replace(),
console.log(/^[A-Z]/.test(name));

//Example
let email = 'contact@example.com';
console.log(email.search(/@/)); // 7 gives index
//returns regex match array!!!
//g stands for global else would return only first match
console.log(email.match(/@/g)); // ['@'] good for extraction,

const link = 'https://regexone.com/';
