//JSON Schema allows documentation of created JSON code
// https://json-schema.org/learn/getting-started-step-by-step
// 1. create schema.js
$schema; //link to JSON Schema website
$id; //URI, like a link to our website where schema is (not working works)
title; // what data is down below
description; //better explanation
type; //Defines what format

//Info: I can use this to validate all JSON send and received on my website
//Unlike interface in Typescript that is deleted during runtime
//Use web application that turn JSON to SCHEMA
//https://jsonformatter.org/json-to-jsonschema

{
    "$schema": "http://json-schema.org/draft-06/schema#",
    "$id": "http://example.com/example.json",
    "type": "array", //Array
    "items": {
        "$ref": "#/definitions/Welcome5Element"
    },
    "definitions": {
        "Welcome5Element": {
            "type": "object", //Object - Array of Objects
            "additionalProperties": false,
            "properties": {  //in object have name and age since they are required
                "name": {
                    "type": "string"
                },
                "age": {
                    "type": "integer"
                }
            },
            "required": [
                "age",
                "name"
            ],
            "title": "Welcome5Element"
        }
    }
}

//This is JSON that is accepted in the schema
[{"name": "anna", "age": 12}]

//JSON-LD = Linked Data
//https://json-ld.org/playground/
//standard by Browsers that helps us get higher in search engines
//Change to your data
{
    "@context": "http://schema.org/",
    "@type": "Organization",
    "name": "my Company",
    "url": "https://mycompany.com",
    "description": "This is my small company. It has been created recently, so it is still in the development phase."
}

//we just parse it in the script tag in our html
<script type="application/ld+json">
      {
          "@context": "http://schema.org/",
          "@type": "Organization",
          "name": "my Company",
          "url": "https://mycompany.com",
          "description": "This is my small company. It has been created recently, so it is still in the development phase."
      }
  </script>