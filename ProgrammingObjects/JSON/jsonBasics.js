//JSON is a text format for storing data, can be used in any language not just js
//like js Objects but its own language independence
//.json file is needed to store json

//Serialization = producing new JSON
//Deserialization = getting data from JSON
//JSON.parse() converts a JSON string → js object
//JSON.stringify() converts an js object → JSON string

//Js Objects (one we use in js)
const jsObject = {
  name: 'John',
  age: 30,
  car: null,
};
//JSON Object ()
{
  "name": "John",
  "age": 30,
  "car": null
};

//Convert js Object into string JSON !!!!
const intoJSON = JSON.stringify(jsObject);
//string '{"name":"John","age":30,"car":null}';
//Convert back into jsObject
const backToObj = JSON.parse(intoJSON);

//XML (old version before JSON)
//https://goessner.net/download/prj/jsonxml/
//to convert to JSON and back if needed
(
  <person>
    <name>John</name>
    <age>30</age>
    <car></car>
  </person>
)[
  //JSON array looks like this
  ('John', 30, null)
];

//USES:
//JS object
const obj = {
  key: 'Value',
  name: 'Ron',
};
localStorage.setItem('name', JSON.stringify(obj));
const objStringified = JSON.parse(localStorage.getItem(name));
const name = objStringified.name;

console.log(
  JSON.stringify([new Number(3), new String('false'), new Boolean(false)])
); // Expected output: '[3,"false",false]'

//JSON
const json = '{"name": "John", "age": 30, "car": null}';
const object = JSON.parse(json); //because this one is a string already

//convert XLM into JSON
//1.get library and add as js, connect to index.html, wether xlm2json or other way around
//2.JSON data passed in what we want json2xml(JSON)

const jsonData= {
    "name": "John",
    "age": 20
}
let xmlData = json2xml(jsonData)

console.log("XLM", xmlData) //no need to stringify