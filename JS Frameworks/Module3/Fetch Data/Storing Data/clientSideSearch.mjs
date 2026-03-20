//search option for the user
//same as clientSideFilter.mjs. Fetch and store the full dataset.Maintain state for the search query.Apply search logic (string matching) to the dataset to produce a list of matching items.Render the matching items.
//Same pattern as filtering — just use .includes() on the text fields:

const results = useMemo(() => {
  if (!searchTerm.trim()) return allItems; // empty → show everything

  const term = searchTerm.toLowerCase();
  return allItems.filter(
    (item) =>
      item.title.toLowerCase().includes(term) || // search in title
      item.description?.toLowerCase().includes(term), // AND description
  );
}, [allItems, searchTerm]);
