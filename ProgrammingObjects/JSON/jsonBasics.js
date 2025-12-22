//JSON is a text format for storing data, can be used in any language not just js
//.json file is needed to store json

//Serialization = producing new JSON 
//Deserialization = getting data from JSON

//NORMAL Objects
{
    name: 'John',
    age: 30,
    car: null,
}
//JSON Object 
{
    "name": "John",
    "age": 30,
    "car": null
}
//XML (old version before JSON)
<person>
    <name>John</name>
    <age>30</age>
    <car></car>
</person>


//JSON array looks like this
[
    "John",
    30,
    null
]

//USES:
const obj = {
    key: "Value",
    name: "Ron"
}
localStorage.setItem("name", JSON.stringify(obj))
const objStringified = JSON.parse(localStorage.getItem(name))
const name = objStringified.name

console.log(
  JSON.stringify([new Number(3), new String("false"), new Boolean(false)]),
); // Expected output: '[3,"false",false]'
