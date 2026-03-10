//NPM = Node Package Manager, enables us to install packages. //NEED NODE downloaded
//package.json = has libraries that are installed
//https://www.npmjs.com/ is where you get packages
//https://docs.npmjs.com/cli/v8/configuring-npm/package-json to read description

//you can download npms through command line or by trying RunKit on the page
npm init //new package.json file

//inside the package we need to specify certain stuff so that others can use the package too
//can happen on npm init if on node 
//!!!Has to be JSON format
{
  "name" : "learning", //what I call the package
  "version": "1.0.0", //need for publishing
  "description": "learningn stuff"
  "main": "index.js",
  "author": "Nikita",
  "scripts": { //this is where we have command we can run scripts!
    "test": "echo "Error"",
  }
  "licence": "ISC" //for others to know if they can use it
}

//!!!Dependancies = versions of language etc. react 18.0.0
//!!!Script is the short version of command to run a particular dependency
//   "build":   "vite build", we run npm build instead of typing npx vite build, this shortens many commands and is easier for us to remember


// package-lock.json - auto-generated file that locks exact dependency versions, if others use your project, they need it!!!!
// Ensures every developer (and CI/CD) installs the exact same versions, not just
// the version ranges defined in package.json.
// Without it, npm would resolve the newest compatible version — which can break things.
// https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json

-g //makes changes global folder in your PC instead of only in our node_modules
npm outdated //to check for outdated packages
npm outdated -g //to check for outdated packages on pc folder
npm update eslint //to update only eslint etc
npm install eslint //that works better
npm install eslint -g //if the outdated is in global folder

npm uninstall

npm install // installs all dependencies listed in package.json
npm install how-many-pizza //would install specific npm package in dependencies
npm install how-many-pizza -g //would install specific npm package to my computer and not only to node
npm install how-many-pizza@1.1 //to install specific version you want
//node_modules =folder will contain FULL copy of the dependancy so your project can run 

npm audit // scans your project for known security vulnerabilities
npm audit fix // auto-fixes what it can (safe version bumps)
npm audit fix --force // fixes everything, including breaking changes (use carefully)

//Npx = node package execution, to run package once without installing

//Extra
//to get path,right click file or folder and copy path
//then cd pathname it in the terminal, it will put me in the pathname I am in

const bubble = require("bubble-sort.js") //if I want to import my dependency
const output = bubble([1,2,3,4,5]) //you can call it this way 
//start debugging to see answer in console
//or node "file"