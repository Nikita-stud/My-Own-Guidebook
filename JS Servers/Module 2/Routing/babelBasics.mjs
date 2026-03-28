//Compile JS6 to older XLM I guess

//1.Download Babel
npm install --save-dev @babel/cli @babel/core @babel/node @babel/preset-env

//2.create config file for bible
touch .babelrc 

//3.inside the file, basically says ("Transform all modern ES6+ JavaScript into backwards-compatible code")
{
  "presets": ["@babel/preset-env"]
}

//4.In package.json below name add and it will allow to use JS6
  "type": "module",
//in scrip (index.js is main file basically, check for updates and update auto)
  "start babel": "nodemon --experimental-json-modules --exec babel-node index.js"
