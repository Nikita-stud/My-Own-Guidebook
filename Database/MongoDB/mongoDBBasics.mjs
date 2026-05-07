//NoSQL = not only SQL, non relational databases
//represents JSON like documents, works well with profiles, catalogues, content management
//use MongoDB
//key value pairs, good for items in a shop, scalable database where relation are not important

//DOWNLOAD MongoDB: 
//Homebrew downloaded - user terminal to
brew install mongodb-atlas
atlas setup

//open: https://account.mongodb.com/account/connect
//then 
brew tap mongodb/brew
brew update
brew install mongodb-community@7.0
brew services start mongodb-community@7.0

//to start and open the mongodb compass
mongosh

//ALL DOCUMENT are in BSON format, similar to JSON but can also store images, timestamps and logs
//JSON:
{
  "hello" : "world"
}
//BSON:
\x16\x00\x00\x00             // total document size
\x02                         // 0x02 = type String
hello\x00                    // field name
\x06\x00\x00\x00world\x00    // field value (size of value, value, null terminator
\x00                         // 0x00 = type EOO ('end of object')

//COLLECTIONS: documents stored together, basically tables
//after setting a connection, you can create a database
//to add data to a collection, you can just press + and insert document
  "_id": {
    "$oid": "6387fc7680388c43a95ace62"
  },
  "firstName": "John",
  "lastName": "Doe"
}

//ACCESS DATA:
npm install mongodb@4.9.0

//1.index.js
const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://127.0.0.1:27017';
const dbname = 'TestDatabase'; //add database name from mongoDB

//connect method to connect to database
mongoClient.connect(url, {}, (error, client) => {
  if(error)
    console.log("Cannot connect");
  console.log("Connection OK");
  const db = client.db(dbname);

  //access collection and find user
  db.collection('Users').find({
    firstName: "John"
  }).toArray((error, result) => {
    console.log(result);
  });
});

//2 run the script
node index.js
