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
\d+ //Input has at least 1 digit (Still goes from right to left)
\d* //Any number of digits 
\w // All char and digits on first letter
. //Any character on with first index so ... would be 3 first char
* //0 or more of any chars
\. //From right to left -escapes the char
[abc] //Would only match a single letter one of the ones passed in so a-b-c for each string
[abc]+ // one or more of any a, b, or c character
[abc]/g // with g removes all the occurrences instead of only first
[abn]an // a-b-c only once and all "an" 
[^b] //Skip starting with b
[0-6] //only match 0-6 chars
123 // Could just write numbers or char you wanted matched
z{5} // character z comes 5 times
az{1,5} //any char a or z 1-5 times
ab? //b is optional char
\? //to match the question mark
_ //space
\t //tab
\n // new line
\r //carriage return ?
\s // any of the above up to space



//Example
//First letter not small pattern, second ranging from n-p and last ranging from a-c
[^a-z][n-p][a-c]

//a 2-4times b 0-any amouny c 1-2times
a{2,4}b*c{1,2}