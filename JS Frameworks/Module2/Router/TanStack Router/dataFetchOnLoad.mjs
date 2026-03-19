//FETCH DATA SINGLE OR MULTIPLE !!!!!!
//runs before render, receives object of usefull info, return data or error
const productDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/products/$productId',
  component: ProductDetailPage,

  loader: async ({ params }) => {
    const productData = await fetchProductById(params.productId);
    if (!productData) {
      throw new Error('Produkt ikke funnet!');
    }
    return { product: productData };
  },

  // Optional: Define a component to show while loading
  pendingComponent: () => <div>Laster produkt...</div>,
  errorComponent: ({ error }) => <div>Feil: {error.message}</div>,
});

//inside the detail page
import { productDetailRoute } from '../router';

// Type-safe: knows the loader returns { product: ProductType }
//this is what gets data from loader
const { product } = productDetailRoute.useLoaderData();

//MULTIPLE DATA EXAMPLE
export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
  loader: async () => {
    const response = await fetch(SHOP_API_URL);

    if (!response) {
      throw new Error('Product not found!');
    }
    const result: ApiAllProducts = await response.json();
    return { products: result.data };
  },
  pendingComponent: () => <div>Loading product...</div>,
  errorComponent: ({ error }) => (
    <div>Feil: {error instanceof Error ? error.message : 'Unknown error'}</div>
  ),
  validateSearch: (searchParams) => {
    return {
      query: searchParams?.query ? String(searchParams.query) : undefined,
      page: Number(searchParams?.page) || 1,
    };
  },
});