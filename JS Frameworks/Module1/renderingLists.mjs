//We use .map() on data to turn into jsx data, like list of item
const municipalities = [
  { id: 301, name: 'Oslo' },
  { id: 1103, name: 'Stavanger' },
];

function MunicipalityList() {
  const listItems = municipalities.map((municipality) => (
    <li key={municipality.id}>
      {' '}
      //This {} is bs that pops up when I write text for some reason //key is
      for React to track item for change //Keys must only be unique within the
      specific list being rendered //The key for a specific data item should not change between renders
      //While you can use the array index (map((item, index) => <li key={index}>...</li>)), it’s generally discouraged if the list order might change or if items can be added/removed from the middle
      {municipality.name} (ID: {municipality.id})
    </li>
  ));
}

//When returning use () instead of {} or return {} if really needed
  const productsItems = products.map((product) => (
    <li key={product.id}>
      (Product name: {product.name}) (ID: {product.id})
    </li>
  ));