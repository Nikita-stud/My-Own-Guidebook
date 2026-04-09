//for search from input form
//we need to filter same place we fetch all data
//save all data in a let variable that we then pass in as instead of whole meme object
<form action="/memes" method="GET">
  <input type="text" name="search" id="text" placeholder="Search here..." />{' '}
  //Browser goes to: /memes?search=cat
  <button type="submit" class="btn btn-primary">
    Search
  </button>
</form>;

//const memesData = []; //imagine we have all data in here

let filteredMemes = memesData; //memesData is the whole data, we will filter it down to this variable and pass it in instead of whole data
const searchText = req.query.search; //input is saved under search, would be "b" or "doge" or whatever you type in, we save it in searchText

if (searchText) {
  filteredMemes = memesData.filter(
    (meme) =>
      meme.name && meme.name.toLowerCase().includes(searchText.toLowerCase()),
  );
}

res.render('memes', {
  data: filteredMemes, //pass in filtered data instead of whole data
});
