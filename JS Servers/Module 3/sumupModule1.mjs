//Node way of creating a server
const https = require('http');
http.createServer();

//Express way of creating a server
const express = require('express');
const app = express();
//var router = express.Router(); //allows to split routing in different files (only use in other files)
//module.exports = router;
//var helloRouter = require('./routes/hello'); //to import the router in the main file
//app.use('/hello', helloRouter); //to use the router in the main file


app.listen(3000); 

//Node way of reading and writing files
const fs = require('fs');
fs.existsSync('users.json'); //check if file exists
fs.unlinkSync('old-file.txt'); //delete file
fs.rmdirSync('old-folder');// delete folder (only if empty)
fs.rmSync('old-folder', { recursive: true }); //delete folder (if with content)

const data = fs.readFileSync('users.json', 'utf8'); //read file then continue
fs.readFile('data/users/users.json', 'utf8', function(err, data) {} //server starts before file is ready
fs.writeFileSync('users.json', JSON.stringify(users, null, 2)); //write file
fs.appendFileSync('log.txt', 'User logged in at ' + new Date() + '\n'); //append to an existing file

//Express way to tell where to find the files we want to serve
const path = require('path');
const filePath = path.join(__dirname, 'data', 'users', 'users.json');

//TOGETHER // path builds the address to a file, // FS — actually opens and reads the file

//Node way of collecting data from a POST request
req.on('data', (chuck) => {
  data += chuck;
});

//Express way of collecting data from a POST request
app.use(express.json());

app.post('/login', function(req, res) {
    console.log(req.body.username); 
    console.log(req.body.password); 
});


//callback nesting become Promises (node always return (error, result))
const util = require('util');
const readFile = util.promisify(fs.readFile);
async function loadUsers() {
    try {
        const data = await readFile('users.json', 'utf8');
        console.log(data);
    } catch (error) {
        console.log('Something went wrong');
    }
const data1 = await readFile('file1.json', 'utf8'); //first read file 1 then file 2
const data2 = await readFile('file2.json', 'utf8');