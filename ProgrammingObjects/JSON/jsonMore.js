//Value is the data,
//Replacer controls what gets included [name, email] just those, or (function of converting numbers etc.) like (key, users)=>{}
//Controls format readability, 2 would be 2 spaces between key and value
JSON.stringify(value, replacer, spacer);

//Since empty Objects are truthy, we need another way to check if Object is empty or nor
//Object.keys returns array of keys
Object.keys(data).length === 0;
