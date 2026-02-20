//Library = Reusable code for specific task from a collection, (I am in control)
//Framework = dictate a certain way to structure your code "opinionated", Framework is in control, I build like they want, Libraries are usually in Frameworks
//Runtime = Environment where JS is executed, like browser, node, etc.
//Architectural Patterns = MVC/MVVM/CBA, Blueprint how UI code structure should be

//Vite = a tool that reloads code fast and packages everything for productions, reloads changes in milseconds
//       only loads files I currently us, only rebuilds changes files
//       without it React changes would take minutes to load and would cost more space 

//Vites = same but for tests inside of Vite projects

//Virtual DOM = VDOM is JS Object describing what UI should looks like, blueprint of DOm
/**
 * A copy of DOM and only specific changes are made in pomparison to real DOM the copy is made of called Diffing
 * Creates Virtual Dom tree and entire Ui then loads real DOM, react creates new VIrtual DOm when updated, old tree is compressed into new
 * minimal operations thorugh algorithm is done to compress, updating real DOM
 */

//React Developer Tools = Helps find bugs, inspects the React component tree
/**                       View and edit Props and State, identify performance bottlenecks
*                         Download as extension in the BROWSER, it will ad to inspection two more parts
*                         COMPONENTS Tab: shows tree structure of my React components, when a component is selected, it will show on the right the data passed from the parent
*                         PROFILE Tab: shows time it took to load each component
*/

//More on LIBRARIES:
/**
 * Utility libraries: ready-made function, like lodash or date-fns
 *                    Used if I need to manipulate arrays, object or dates
 * UI Component libraries: Pre-build user interface, like Material UI or Chakra UI
 *                         Buttons, Modals, Menus, just import it
 * State Management libraries: Helps manage data, like Redux or Zustand
 * 
 * Analogy: buying tools to build a house
 */

//More on FRAMEWORKS:
/**
 * You dont call the code, the framework does it for you, known as (IoC)
 * It tells you where what should be
 * 
 * Inversion of Control (IoC): Calls your custom code when needed
 * Structure and Conventions: Provides skeleton, includes structure, naming convention, routes
 * Completeness (Often): Bundles solutions for everyday tasks
 * 
 * Exm- Angular by Google, Vue.js for approachability, React 
 *
 * Analogy: building a prefabricated house
 */
//Frameworks 2
/**
 * Specific way to organize code in folders and files
 * Lots of UI handling easying features
 * uses est practices from senior experts
 *
 * SPAs = single page applications
 *
 * React = PRO: components build into one  big one like small legos
 *         Page does not reload when values change, only the interface
 *         uses virtual DOM which is lighweight version of DOM and allows for better calculation of minimal changes needed to update the real DOM
 *         is actually a library for UI
 *         CON: need to add extra libraries, too many ways to do same thing, fast changes and lots of bundle size
 * Angular = PRO: for huge enerprise applications with high degree of structure
 *           such as banks, admin platforms
 *           CON: hardest ot learn, more code for simpler things, must know Typescript, overkill for small projects because of bundle size
 * Vue.js = PRO:is a progressive framework that allow gentle learning curve,
 *          is good for small and big projects
 *          CON: smaller job market? and community
 * Svelte = compiles your Svelte code into JS that is ultra small but works.
 *          making fast loadings and better performance
 *          CON: also fewer plugins and community
 *
 */


//More on RUNTIME:
/**
 * Also called Script engine: provides and interpret everything necessary to execute JS code
 * JS engine: parses JS code and converts it into machine instructures
 * APIs: functionalities to environment allowing JS to interact with outside world, browser run time and server side
 *   Browser side:
 *       DOM: interaction with web page content, tree like structure of HTML, JS can interact with the DOM, but constant changes will break it
 *       BOM: interaction with browser
 *       Web Storage API: localStorage, sessionStorage
 *   Server side:
 *       Node, Bun, Deno: crussial for back end building
 *       Provided APIs: module in Node etc. interacts with server and not webpage 
 * Event Loop: Manages Asynchronous operations
 * Memory Heap & Call Stack: manages memory allocation
 * 
 * 
 */

//More on ARCHITECTURAL PATTERNS:
/**
 * Manage Complexity: making overall system easier to understand, develop and reason
 * Separation of Concerns (SoC): each part should be distinct, code responsible for displaying data should handle fetching etc.
 * Maintainability: makes it easy to change and test code separately 
 * Collaboration: Pattern with common vocabulary and structure makes it easier for teams to work together
 * 
// ARCHITECTURAL PATTERNS: Recipes for organizing code
// WHY?
// - Big apps = messy without structure
// - Patterns = keep UI code separate from data code
// - Easier to change, test, and work with teams

// MVC: Oldschool but still used
//   Model: Database/data stuff
//   View: HTML you see
//   Controller: You click → Controller updates everything manually

// MVVM: Modern, auto-updates
//   Same Model and View
//   ViewModel: Auto-syncs View ↔ Model (no manual work!)

// CBA: Everything is a component (React/Vue way)
//   Build small pieces → combine into big app
//   State (private data) + Props (parent gives you data)
 */

//SUM UP:
/***
 * library, framework or code needs runtime environment anyways
 * for Front end: React, Angular, Vue
 * for Back end: Express.js, NestJS
 * Not all code in browser runtime can run in server runtime and vise versa
 * If you choose a library, you know you’ll need to make more architectural decisions yourself.
 * If you choose a framework, you’ll need to learn its specific conventions and structure, benefit from its integrated approach, and accept its constraints.
 * Architectural pattern help keep all code organized and all to write in one style
 */

//MVC
// MODEL - handles data
class User {
  constructor() { this.name = ""; }
  save() { /* save to database */ }
}

// VIEW - HTML template
<div>Hello, {username}!</div>

// CONTROLLER - glues them together
function showUser(req, res) {
  const user = User.find(req.id);  // Get from Model
  res.render('userView', {username: user.name}); // Update View manually
}


//MVVM 
// MODEL
const userData = { name: "Ola", date: "2024-05-17" };

// VIEWMODEL - transforms data for View
const viewModel = {
  userName: userData.name,
  displayDate: "17. mai 2024"  // formatted!
};

// VIEW - auto-updates when viewModel changes
<div>{{ userName }}</div>  
<div>{{ displayDate }}</div>
// Change viewModel.userName → View updates automatically! ✨

//CBA
// COMPONENT - reusable button
function Button(props) {  // Props from parent
  const [clicked, setClicked] = useState(false);  // State (internal)
  
  return <button onClick={() => setClicked(true)}>
    {props.label}  {/* Uses prop */}
    {clicked && "✓"}  {/* Uses state */}
  </button>;
}

// USE IT ANYWHERE:
<Button label="Save" />
<Button label="Delete" />
<Button label="Submit" />