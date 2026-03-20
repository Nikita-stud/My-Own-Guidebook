//1.Tailwind = JIT Just-in-Time  only generates the CSS you actually use
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

//2.tailwind.config.js — tell Tailwind which files to scan:
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']

//3.in src/index.css — add the three directives:
@tailwind base;
@tailwind components;
@tailwind utilities;

//4.main.tsx — import the css file:
import './index.css';

//5.Using it:
<button className="primary-button">Click</button>

//6.Conditional classes — combine with variables:
const base = 'py-2 px-4 rounded font-bold';
const primary = 'bg-blue-500 text-white';
const secondary = 'bg-gray-300 text-gray-800';

<button className={`${base} ${variant === 'primary' ? primary : secondary}`}></button>

//7. @apply — group classes into one reusable class: index.css
.btn-primary {
  @apply bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded;
}
<button className="btn-primary">Click</button>

//8.Custom colors in config:
theme: {
  extend: {
    colors: {
      'brand-red': '#BA0C2F',
    }
  }
}