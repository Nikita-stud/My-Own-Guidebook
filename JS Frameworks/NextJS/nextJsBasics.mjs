//next js is build on top of react, code splitting, image optimisation, and various rendering strategies
//Search engines can crawl and index Next.js sites more easily because they can generate HTML on the server before sending it to the client
//!!!!no need for 1000 react add ons

//BENEFITS
//1.foldeer file instead of routing, Next.js will automatically create a route accessible at /about.
app / about / page.js;

//2 rending states, for different parts of the app, for better opt
//Static Site Generation (SSG) = HTML generated at build time for stuff that dont change often
//Server-Side Rendering (SSR) = HTML generated on server, for dynamic user specific content
//Client-Side Rendering (CSR) = Can be used as in react

//3. API routing. allowing backend on front end easily with no need for additional applications like Express
//EXAMPLE: if the path is app/api/hello/route.js , when you go to /api/hello url then the GEt request will happen
export async function GET(request) {
  return new Response('Hello from the API!');
}

//4.Image opt
//optimizes images for me, resizes for different screen sizes, more modern WebP and lazy loads them only when they enter viewport

//5.Dev experience
//fast refresh of pages,typescript support,easy environment configs

//NEXTJS vs REACT SPA... react render all stuff in browser, making load time slower, seo challenges since only small amount of HTML is send
//nextjs renders all in the server, sending all HTML to browser for better SEO

//HOW TO SET UP:
//1. Node is needed of course, check node -v and then set up basic project

npx create-next-app@latest first-project

//folder structure would be
first-project/
├── .eslintrc.json      //Configuration for ESLint
├── .git/               // Git repository folder (if initialized)
├── .gitignore          // Specifies intentionally untracked files that Git should ignore
├── next-env.d.ts       // TypeScript declaration file for Next.js
├── next.config.mjs     // Next.js configuration file (or .js)
├── node_modules/       // Contains all project dependencies
├── package-lock.json   // Records exact versions of dependencies
├── package.json        // Lists project dependencies and scripts
├── public/             // For static assets like images, fonts
│   ├── next.svg
│   └── vercel.svg
├── README.md           // Project readme file
├── src/                // Main application code
│   └── app/            // Core of the App Router
│       ├── favicon.ico // Favicon for your site, icon that appears in the browser tab
│       ├── globals.css // Global styles
│       ├── layout.tsx  // Root layout component <html> and <body> tags
│       └── page.tsx    // Home page component / route
└── tsconfig.json       // TypeScript configuration

//App Router vs Pages Router
//Pages Router = original Next.js file system = files created within a special pages directory automatically become routes in your application
//pages/products/[id] would be /products/1,  Files inside pages/api/ would become API endpoints 

//App Router = never better, app/directory contains all routing logic, UI components, and data fetching for the App Router.
//making all JS render on server, layout.js or layout.tsx where, for example, a main site navigation remains while a sub-section navigation changes
//page.js or page.tsx  files define the unique UI for a specific route segment
//Special File Conventions: The App Router uses a set of special file names to create UI,layout.js/tsx: Defines a shared UI for a segment and its children etc.
//You can group related routes in folders without affecting the URL

norwegian-travel-blog/ (Our project from the previous section)
├── src/
│   └── app/
│       ├── layout.tsx       // Root layout for all pages
│       ├── page.tsx         // Home page UI (for route /)
│       ├── globals.css
│       ├── favicon.ico
│       ├── about/           // Represents the /about segment
│       │   └── page.tsx     // UI for the /about route
│       └── blog/
│           └── [slug]/      // Represents dynamic routes like /blog/my-first-post
│               ├── page.tsx   // UI for a specific blog post
│               └── layout.tsx // Optional: Layout specific to blog posts
└── ... (other project files)