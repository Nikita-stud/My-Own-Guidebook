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

//RegexOne lessons
$ //All char
\d //All digits from 0-9
\w // All char and digits on first letter
. //Any character on with first index so ... would be 3 first char
\. //From right to left -escapes the char
[abc] //Would only match a single letter one of the ones passed in so a-b-c for each string
[abn]an // a-b-c only once and all "an" 
[^b] //Skip starting with b
[0-6] //only match 0-6 chars
123 // Could just write numbers or char you wanted matched

//Example
//First letter not small pattern, second ranging from n-p and last ranging from a-c
[^a-z][n-p][a-c]