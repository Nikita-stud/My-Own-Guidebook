//Instead of clicking, when the user scrolls to the en d, additional data is being fetched and added
//AJAX request to serve to fetch new set of data
//scroll detection and trigger point, are core concepts

//Lifehack is to also add content on top for faster load, but it is harder
//disantvantage: not reaching foooter, lose of scroll position if click to go to top.
//too much data, virutal scroll is the way, seo challenges, accessibility issues

//WE NEED:
//fetch, items array to hold loaded items, page offset, hasMore true or false to see if more data available, isLoadin true to show loading indicator
//scroll listener effect and scroll position check

//FOR ENDLESS DOCUMENT SCROLL
window.innerHeight; // height if browser
window.scrollY; // px scrolled vertivally
document.documentElement.scrollHeight; // height of HTML doc
//window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - BUFFER

//FOR ENDLESS TRIGGER ON SPECIFIC ELEMENT
element.clientHeight; //innerheight of element
element.scrollTop; //pixels the element’s content is scrolled vertically
element.scrollHeight; //total heigh of scrollable element
//element.clientHeight + element.scrollTop >= element.scrollHeight - BUFFER

// Ref for the scrollable container or observer target
const observer = useRef();
const lastItemRef = useCallback(
  (node) => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      // entries[0] is the observed element (our lastItemRef)
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (node) observer.current.observe(node); 
  [isLoading, hasMore],
);

  // Simulate fetching data
  const loadMoreItems = useCallback(() => {
    if (!hasMore) return;
    setIsLoading(true);
    console.log(`Loading page ${page}`);
    // Simulate API call delay
    setTimeout(() => {
      const newItems = allSimulatedItems.slice(
        (page - 1) * ITEMS_PER_LOAD,
        page * ITEMS_PER_LOAD,
      );
      setItems((prevItems) => [...prevItems, ...newItems]);
      setHasMore(allSimulatedItems.length > page * ITEMS_PER_LOAD);
      setIsLoading(false);
    }, 1000);
  }, [page, hasMore]);


  useEffect(() => {
    loadMoreItems();
  }, [loadMoreItems]); // Initial load and when page changes due to intersection

