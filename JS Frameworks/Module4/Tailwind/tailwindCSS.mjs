//Tailwind = JIT Just-in-Time  only generates the CSS you actually use
npm install -D tailwindcss postcss autoprefixer //tailwindcss: The core library. postcss: Tailwind CSS plugs into PostCSS as a plugin. autoprefixer: A PostCSS plugin to add vendor prefixes.

npx tailwindcss init -p

//tailwind.config.js: For customising your Tailwind installation, tell Tailwind which files to scan for utility classes.
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}', // Include all JS, TS, JSX, TSX files in src
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
//in src/index.css
@tailwind base; //@tailwind base: Injects Tailwind’s base styles and any base styles registered by plugins
@tailwind components; //@tailwind components: Injects Tailwind’s component classes and any component classes registered by plugins.
@tailwind utilities; //@tailwind utilities: Injects Tailwind’s utility classes and any utility classes registered by plugins.

//import into main application
import './index.css'; // Ensure this line is present and points to your Tailwind CSS file

//postcss.config.js: Configures PostCSS