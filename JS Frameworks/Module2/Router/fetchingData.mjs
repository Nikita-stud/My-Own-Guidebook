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

const { product } = productDetailRoute.useLoaderData();
