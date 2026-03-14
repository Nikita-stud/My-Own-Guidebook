//key value pairs after (?)
//search?query=vinterjakke&sort=price_asc

//ZOD is what is build for complex search but for now
//validateSearch to get key and values

const productsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/products',
  component: ProductListPage,
  validateSearch: (searchParams) => {
    return {
      //expect an optional query parameter and ensure it’s treated as a string.
      // Ensure 'query' is a string or undefined if not present
      query: searchParams?.query ? String(searchParams.query) : undefined,
      // Ensure 'page' is a number, default to 1 if invalid/missing
      page: Number(searchParams?.page) || 1,
    };
  },
});

//2. on the page define the route you import
import { productsRoute } from '../router';

// The hook knows 'query' is string|undefined and 'page' is number
const { query, page } = productsRoute.useSearch();

//filter through query (do same for pages)
const filteredProducts = query
  ? allProducts.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase()),
    )
  : allProducts;
//map through filtered products

//FOR SEARCh
import { useState } from 'react';

const [localQuery, setLocalQuery] = useState(query || '');

<input
  type="text"
  value={localQuery}
  onChange={(e) => setLocalQuery(e.target.value)}
  placeholder="Søk etter produkter..."
/>;

<Link
  to={productsRoute.to}
  search={{ page: page, query: localQuery || undefined }}
></Link>;
