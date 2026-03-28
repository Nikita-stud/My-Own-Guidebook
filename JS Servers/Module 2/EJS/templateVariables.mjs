//we can use JS too, like loops
<ul>
    <%users.forEach(function(user){ %>
      <li>Hello <%- user %></li>
    <% }); %>
</ul>

//You can also parse in data
<%- include('../partial/helloList.ejs', {users: ["John Doe", "Mark White", "Barbara Smith"]}) %>

//You can also add stuff based on param
router.get('/:newUser', function (req, res, next) {
  res.render('layout/index', { newUser: req.params.newUser });
});
<%- include('./partials/helloList.ejs', {users: ["John Doe", "Mark White", "Barbara Smith", newUser]}) %>


//GLOBAL VARIABLES:
//.locals = global for that route
//.siteName = can be any name that you will use later on
app.locals.siteName = "Roblox"
 //now you can use it anywhere in whole app
<%= siteName %>

//FETCH DATA: to save fetched data and use 
app.use(async (res,res, next)=>{
  const speakers = await spears.getList()
  response.render("layout", {pageTitle: "Welcome", template: "index", speakers})
})

<% speakers.forEach((speaker) {%>
  <a href="/speakers/<%=speaker.name%>"><%=speaker.name%></a>
<%})%>