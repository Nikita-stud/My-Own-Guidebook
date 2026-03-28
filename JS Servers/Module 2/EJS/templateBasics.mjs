//ESJ =  template engine lets you generate HTML dynamically — injecting data into your pages before sending them to the browser.
//https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/rendering-the-index-page-with-ejs?resume=false&u=43268076
//1.Install
npm install ejs@3.1.9

//2. .html files are now .ejs

//3. download extention EJS language support

//4.the index.ejs has now <%=Text%>
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
  </body>
</html>

//5.define title , it will be now Express
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//TAGS
<% //'Scriptlet' tag, for control-flow, no output
<%_ // ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%= //Outputs the value into the template (HTML escaped)
<%- //Outputs the unescaped value into the template
<%# //Comment tag, no execution, no output
<%% //Outputs a literal '<%'
%> //Plain ending tag
-%> // Trim-mode ('newline slurp') tag, trims following newline
_%> // ‘Whitespace Slurping’ ending tag, removes all whitespace after it
