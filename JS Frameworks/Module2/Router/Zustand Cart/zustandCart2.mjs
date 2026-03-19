//NOW we need to display the cart and interact with it and calculate stuff

//1. Show cart items
import useCartStore from '../stores/cartStore'; // Import the store hook

function CartDisplay() {
  const items = useCartStore((s) => s.items); //    // Select the items array - this component needs it for calculation

  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.productId}>
          {item.productId} × {item.quantity}
          <button
            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
          >
            -
          </button>
          <button
            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
          >
            +
          </button>
          <button onClick={() => removeItem(item.productId)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

//2.Total items
function CartSummary() {
  const items = useCartStore((s) => s.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return <p>Total: {totalItems}</p>;
}

//3.Add items, you can add removeItem , etc
function ProductAdder() {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <button onClick={() => addItem({ productId: 'prod101', name: 'Apple' })}>
      Add Apple
    </button>
  );
}
