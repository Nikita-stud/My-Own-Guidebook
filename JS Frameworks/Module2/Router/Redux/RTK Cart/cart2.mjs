//1.Add reducer to store
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

//2. Selectors (add to bottom of cartSlice.js)
import { createSlice, createSelector } from '@reduxjs/toolkit';

// ... slice code ...

const selectItemsMap = (state) => state.cart.items;

export const selectItemsArray = createSelector([selectItemsMap], (itemsMap) =>
  Object.values(itemsMap),
);

export const selectTotalQuantity = createSelector([selectItemsArray], (items) =>
  items.reduce((sum, item) => sum + item.quantity, 0),
);

//3Display cart
function CartDisplay() {
  const items = useSelector(selectItemsArray); // already an array
  const dispatch = useDispatch();

  return (
    <ul>
      {items.map((item) => (
        <li key={item.productId}>
          {item.productId} × {item.quantity}
          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  productId: item.productId,
                  quantity: item.quantity - 1,
                }),
              )
            }
          >
            -
          </button>
          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  productId: item.productId,
                  quantity: item.quantity + 1,
                }),
              )
            }
          >
            +
          </button>
          <button onClick={() => dispatch(removeItem(item.productId))}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}
//4.Summary
function CartSummary() {
  const totalItems = useSelector(selectTotalQuantity);
  return <p>Total: {totalItems}</p>;
}
//5.Add items
function ProductAdder() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(addItem({ productId: 'prod101', name: 'Apple' }))}
    >
      Add Apple
    </button>
  );
}
