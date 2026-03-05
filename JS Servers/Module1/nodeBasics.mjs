/** Client (Chrome/browser) sends REQUESTS to a server
* Server processes requests and sends back RESPONSES
* A server can also talk to OTHER servers (APIs, databases, etc.)

*Cookie is only on one computer whilst server allows same data between different clients

*Server side can be written in ANY language as long as JSON is implemented
*NodeJS is what we need to run server
*JS,HTML and CSS is what we need to run client side

*Client side = Front end
*Server side = Back end **/

//Web frameworks = prebuild structure for my code, JS Frameworks
//Express is for NodeJs, allows HTTP methods
//Deno is option to NodeJS, has own benefits and downsides
//Django(Phython), good overall
//Flask(Phython), for small applications
//ASP.NET, by Microsoft for many users
//Spring Boot(Java), great for big applications
//Ruby/Rails, is Django but Ruby language

//NodeJS is asynchronous and works in the background no matter what

//https://nodejs.org/en/ to download node
//node firstFile.js to run that file or without .js
node //run this to start new process
node globalProcess //run to run all processes
global.console.log('hello'); //in Node this is just variable that is everywhere


process //my CURRENTLY working program
process.process.env; //provides info,input,output and controls process //who am I, what enviroment
process.exit(); //stops process

process.argv; // access to all arguments passed in Node as an Array
node process.js hello world 123 //everything added to node will be added to argv array
console.log(process.argv);
// [ 
//   '/usr/local/bin/node',  Path to the Node.js program itself
//   '/home/user/process.js', Path to the file you're running
//   'hello',
//   'world',
//   '123'
// ]
[, , third, fourth] = process.argv //skip node path and file path


dir //all files and folders in current folder
dir -s //also subfolders


process.stdin // data coming into your program (connected to keyboard)
process.stdout // data going out of your program (connected to screen)
process.stderr //errors going out

process.stdout.write("Hello world!"); //same as console.log but gives more control of the string
console.log("Hello world!"); // console log uses process.stdout.write but is hidden

process.stdin.on //get input, also new line etc, thus we need to get rid of it

process.stdin.on("data", name => {
    process.stdout.write("Hello " + name.toString().trim() + "!");
    process.exit(); //need to for it to stop asking for input
})

//We would actually flag stuff so that we can grad values
--user Anna --greeting "Hello girl" //set the flag

const greeting = grab("--greeting") //find the flag by calling the function (order does not matter since it is an arrow function)

const grab = flag =>{ //get the flags value
  let indexAfterFlag = process.argv.indexOf(flag) +1;
  return process.argv[indexAfterFlag]
}
console.log(`${user}${greeting}`)

//If process.exit() we can still do a function for it
//https://www.linkedin.com/learning/node-js-essential-training-2019/standard-input?resume=false&u=43268076
process.on("exit",()=>{
  console.log("thank you")
})
