//JSX = Js XML is syntax we use to write HTML code in React
//All html in React is JSX, so not real HTML
//If no JSX, we would have to create each element like this in React
function App() {
  const product = React.createElement('div', {}, 'Milk: 19.99 NOK');
  return product;
}

//JSX with parsing code example, we use : to separate parsed code
//or {productPrice + 10}
function App() {
  const productTitle = 'Milk';
  const productPrice = 19.99;
  return (
    <div>
      {productTitle}: {productPrice}
      {productPrice > 20 ? 'Not for sale' : 'For sale'}
    </div>
  );
}
// to comment something out, {/*divs etc */}
//Components = way to create reusable code
