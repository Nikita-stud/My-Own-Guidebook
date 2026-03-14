// TanStack Router = type safe routing (catches errors during development not runtime)
// TanStack Query  = data fetching
// TanStack Table  = table handling

// TanStack Router comes with:
// → Built-in DevTools for debugging routes
// → Built-in data loading (loader functions)
// → Built-in search params (?query=abc) handling
// → Autocomplete in editor because of strong typing

// React Router v6:
// → Needs extra libraries for data loading and search params
// → Less strict type safety

//USE TANSCRIPT on small projects and 
//IF You are using TypeScript, or type safety is not a primary concern.

//Tanstack
npm install @tanstack/react-router@beta

//Tanstack Devtools
npm install @tanstack/router-devtools@beta --save-dev

//1.Create routes.ts file the rootRoute — the base/parent of everything
import { RootRoute, Route, Outlet } from '@tanstack/react-router';

const rootRoute = new RootRoute({
  component: App, // ← App has <Outlet /> inside it
});

//2.Define child routes in routes.js
const indexRoute = new Route({
    getParentRoute: () => rootRoute, // ← "my parent is rootRoute (App)"
  path: '/',                       // ← "I live at the / URL"
  component: HomePage,             // ← "I render HomePage"
});

const aboutRoute = new Route({
    getParentRoute: () => rootRoute, // Parent is the root
    path: '/about',
    component: AboutPage,
});

//3.combine routes in a tree
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);


//4 export create route instance
export const router = new Router({ routeTree });

//5. in src/main.jsx)
import { RouterProvider } from '@tanstack/react-router'; 
import { router } from './router';

  <React.StrictMode>
    {/* Provide the router instance */}
    <RouterProvider router={router} />
  </React.StrictMode>

//OBS:the APP has to have Outlet
import { Outlet } from '@tanstack/react-router'; // Import Outlet and Link
  {/* Where child routes will be rendered */}
  <Outlet />


//GET RID OF APP
//YOUR OUTLET in main in layout is good enough
//CHANGE all link navliink etc to @trnas bla bla
//other changes too


//THIS IS A WAY SAFER WAY TO ROUTE
//RULEs for paths/$pathID/ fetching
//where we get redirected we define the param at same time
<Link 
to="/product/:productId" 
params={{ productId: product.id }}>
  See details
</Link>

//export the productDetailsRoute from routes into page you fethc url param
import { useParams } from '@tanstack/react-router';
  const { productId } = useParams({ strict: false });
