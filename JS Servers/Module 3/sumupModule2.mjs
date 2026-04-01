//express.static sends js, images and styles as is  from public folder /stylesheets/style.css
app.use(express.static(path.join(__dirname, 'public')));

// tells Express where to find pages that get processed first:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//TOGETHER: express finds views/memes.ejs, processes it and sends the result to the browser
app.get('/memes', function (req, res) {
  res.render('memes', { memes: memesData });
});


//RESPONSES
res.write('<h1>Hello</h1>'); //Node way 
res.end(); //to finish response in Express only when sending status aand write data in pieces
res.send({ name: 'Doge', id: 123 }); //response send as text, html or object
res.json({ memes: memesData }); //response send as JSON
res.render('memes', { memes: memesData, searchQuery: query }); //Express finds views/memes.ejs and sends memesData and query to it, then sends the result to the browser
res.redirect('/memes'); //sends to a different URL
res.status(200).send('Everything is fine'); //send http status code with response


//FOLDERS
bin/ // for server files that run on the backend and listen to requests
data/ // for data files like JSON, images, etc that run from backend
public/ // for static files like CSS, JavaScript, and images that are served frontend
views/ // for EJS page files and partials that get processed and sent to the browser
routes/ // for route files that define endpoints and logic for handling requests

//Array joining 
const original = [1, 2, 3];
const newArray = original.concat([4]);

//ExpressJS = 