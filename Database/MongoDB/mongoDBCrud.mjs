//https://learning.noroff.no/pluginfile.php/35137/mod_book/chapter/116459/Databases%20Module%202%20Task%204%20Solution.pdf

//Filter/find
mongoClient.connect(url, {}, (error, client) => {
  if (error) console.log('Cannot connect');
  console.log('Connection OK');
  const db = client.db(dbname);

  //Here we find collection and firstname john object
  db.collection('Users')
    .find(
      {
        firstName: 'John',
      },
      {
        projection: {
          _id: false, //this is object returned and we specify that we dont want id to be shown
          firstName: true,
          lastName: true,
        },
      },
    )
    .toArray((error, result) => {
      console.log(result);
    });
});

//Add = insertOne  or the insertMany()
db.collection('Users').insertOne(
  {
    firstName: 'Johnny',
    lastName: 'Brown',
  },
  (error, result) => {
    if (error) console.log('Cannot add user');
    console.log(result);
  },
);

//Update = updateOne() or updateMany()
//Full setup looks like:
const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const dbname = 'TestDatabase';

mongoClient.connect(url, {}, (error, client) => {
  if (error) console.log('Cannot connect');
  console.log('Connection OK');
  const db = client.db(dbname); //we pass in to find

  db.collection('Users').updateMany(
    {
      firstName: 'John',
    },
    {
      $set: { firstName: 'Tom' }, //set to update
    },
    (error, result) => {
      if (error) console.log('Cannot update users');
      console.log(result);
    },
  );
});

//Delete = delete() or deleteMany()
db.collection('Users').deleteMany(
  {
    firstName: 'Johnny',
  },
  (error, result) => {
    if (error) console.log('Cannot delete users');
    console.log(result);
  },
);
