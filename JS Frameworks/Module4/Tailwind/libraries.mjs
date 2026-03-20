//NORMALLY you would install into node_module
npm install @mui/material  // installs into node_modules

//Shadcn/ui = UI LIBRARY https://ui.shadcn.com/ tailwind but used Radix UI primitives for accessibility and behaviour
//1.need Tailwind first, then:
npx shadcn-ui@latest init

//2. Configure tailwind.config.js
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}', // Make sure this covers your actual component paths
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}', // Add this if your components live in src

//2. add components one by one as needed
npx shadcn-ui@latest add button // src/components/ui/button.tsx
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add input

//3.import each as is
import { Button } from '@/components/ui/button'; // YOUR file, you can edit it
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';


//4. built-in variants.. change style in src/components/ui/button.tsx if needed
<Button>Default</Button>
<Button variant="destructive">Delete</Button>

//OTHER LIBRARIES:
1. Material UI (MUI)
2. Ant Design (AntD)
3. Chakra UI
4. React Bootstrap //https://react-bootstrap.github.io/

Shadcn/ui // Great if you want full control, already use TailwindCSS, and prefer owning the component code. Excellent for custom design systems.
Material UI / Ant Design: //Suitable for projects needing a very comprehensive set of components quickly, or if you want to adhere to a specific design system (Material Design). Can be heavier.
Chakra UI: // Good for rapid development with a focus on accessibility and easy styling via props.
React Bootstrap: // A good choice if your team is familiar with Bootstrap or if you need to integrate with an existing Bootstrap theme.
