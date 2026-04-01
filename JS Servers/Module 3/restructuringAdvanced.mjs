//when you send data read back to the file you should always loop though it in the file where you get it
//data.forEach
<% data.forEach(function(recommendation, index){ %>
  <div class="<%= index === 0 ? "carousel-item active": "carousel-item" %>">
    <img class="rounded-circle shadow-1-strong mb-4"
    src=<%='./img/avatar' + recommendation.avatar + '.jpg'%> alt="avatar"
    style="width: 150px;" />
  <div class="row d-flex justify-content-center">
    <div class="col-lg-8">
      <h5 class="mb-3"><%=recommendation.name%></h5>
      <p><%=recommendation.role%></p>
      <p class="text-muted">
        <i class="bi bi-quote pe-2"></i>
        <%=recommendation.description%>
        </p>
    </div>
  </div>
</div>
<% }); %>

//Also make the include link in your ejs page file receive the data since only the page is called 
//before it parses in the data to partials
<%- include('./partials/recommendations.ejs', {data: data}) %>


//CODE to check for duplicates on post
router.post('/', jsonParser, function(req, res, next) {
  let rawdata = fs.readFileSync(path.resolve(__dirname, "../data/recommendations.json"));
  let recommendationsArray = JSON.parse(rawdata);
  if(recommendationsArray.filter(x => x.name === req.body.name).length == 0) { //this checks
    const newArray = recommendationsArray.concat([req.body])
    fs.writeFileSync(path.resolve(__dirname, "../data/recommendations.json"), JSON.stringify(newArray));
  }
  res.end();
});
//CODE to check for delete
router.delete('/', jsonParser, function(req, res, next) {
  let rawdata = fs.readFileSync(path.resolve(__dirname, "../data/recommendations.json"));
  let recommendationsArray = JSON.parse(rawdata);
  const newArray = recommendationsArray.filter(x => x.name !== req.body.name)
  if (newArray.length !== recommendationsArray.length ) {
    fs.writeFileSync(path.resolve(__dirname, "../data/recommendations.json"), JSON.stringify(newArray));
  }
  res.end();
});
/**DELETE REQUEST
{
    "name": "Barbara Stones"
}
 */

//READ JSON FILE and parse in data of IMG... IT has always 4 parts. 
//THIS ARE IMG STORED ON BACKEND, THUS WE CAN CREATE A 2 SERVER WITH DIFFERENT PORT IN THE BIN
//1.the JSON saved, 
//2.route to read JSON and send to ejs,  
//3.views where ejs takes in and passed the data to partials, 
//4.views/partials where we loop through data 
//5. if you add in /bin a js file it will be a server (add a new port there and )
router.get('/', function(req, res, next) {
  let data = fs.readFileSync(path.resolve(__dirname, "../data/portfolio.json"));
  res.render('portfolio', { cakes: JSON.parse(data)});
});

<% cakes.forEach(function(cake){ %>
  <div class="hide col-lg-4 col-md-6 col-sm-12 <%=cake.category%>">
    <div class="text-center">
      <img class="mb-3" src="./img/wedding_cake.jpg" alt="<%=cake.alt%>" style="width:100%">
      <h4><%=cake.header%></h4>
      <p><%=cake.description%></p>
    </div>
  </div>
<% });%>

<%- include('./partials/portfolio.ejs', {cakes: cakes}) %>

//5. EXamplebin/imagesServer.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;
app.use('/images', express.static(path.join(__dirname, '../data/img'))); //http://localhost:8080/images/wedding_cake.jpg

app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`);
})

//5.5 change the link to img so it goes to another port
<img class="mb-3" src="http://localhost:8080/images/<%=cake.name%>" alt="<%=cake.alt%>" style="width:100%">
