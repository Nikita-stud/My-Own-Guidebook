//Vite tool is easiest ti start a React project
npm create vite@latest my-react-app -- --template react

//2.choose react and Js for now
cd my-react-app
npm install
npm run dev 

//in my-react-app folder
/**
 * index.html is main HTML file
 * src/ is where workmhappens
 * main.jsx where to render main app components into
 * App.jsx where I build UI
 * App.css where css  is 
 * 
 * npm run dev starts indec.htmll file and watches .js.jsx.css for changes,
 *             on save, Vite rebuild the parts needed in the browser without full refresh
 */

//Vite = a tool that reloads code fast and packages everything for productions, reloads changes in milseconds
//       only loads files I currently us, only rebuilds changes files
//       without it React changes would take minutes to load and would cost more space 

//Vites = same but for tests inside of Vite projects