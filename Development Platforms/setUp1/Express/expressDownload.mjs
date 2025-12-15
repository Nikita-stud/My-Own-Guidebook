//Express handles routing, request/ response
//Server for Node

//1.Create new folder called express-api and access it
//while opening VSCode 
mkdir express-practice
cd express-practice
code .

//2. Initialise Node
npm init -y

//3. Add to package.json only "type":"module"
{
  "name": "express-api",
  "version": "1.0.0",
  //Here is it (to allow import export syntax in express)
  "type": "module",
  "main": "index.js"
}
//4. Install Express and TypeScript
npm install express
npm install --save-dev typescript @types/node @types/express tsx

//5. Create basic TypeScript (tsconfig.json )
//Tells the Typescript compiler how our code shall be processed
//Basically rules
npx tsc --init

//6. in tsconfig.json delete everything and only add
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ES2020",
    "moduleResolution": "node",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
//7. create src folder
mkdir src
touch src/index.ts

//8. add to package.json so that it is easier to run server 
/*
npm run dev: Starts the server in development mode with auto-reloading.
npm run build: Compiles our TypeScript code to JavaScript.
npm start: Runs the compiled JavaScript code (for production).
*/
"scripts": {
  "dev": "tsx watch src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}

//Code Explained
{
  "compilerOptions": {
    //We will compile the files to ES2020 JS features
    "target": "ES2020",
    //We are using ES2020 JS version
    "module": "ES2020",
    //Resolve modules the same way Node does
    "moduleResolution": "node",
    //Where compiled Js files will go
    "outDir": "./dist",
    //Typescript source file location
    "rootDir": "./src",
    //Enabled strict type checking
    "strict": true,
    //Allows import of common js module using es syntax
    "esModuleInterop": true,
    //Allows imports from modules that dont have default import
    "allowSyntheticDefaultImports": true
  }
}