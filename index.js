var http = require('http');
const express = require('express');
const app = express();
var path = require('path');
var sass = require('node-sass');
const axios = require('axios');
const search= require('./book');
const session= require('express-session');
const flash= require('connect-flash');
const admin = require('firebase-admin/app');
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

//admin.initializeApp();


app.set('views', path.join(__dirname, 'templates'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(session({
    secret:'flashblog',
    saveUninitialized: true,
    resave: true
}));
app.use(express.static('public'));
app.use(express.static('images'));
app.use(flash());

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');


db.serialize(() => {
    db.run("CREATE TABLE books (title TEXT)");

    const stmt = db.prepare("INSERT INTO books VALUES (?)");
    stmt.run("Look Again");
	stmt.run("Ministering Through Cliches Volume 1");
	stmt.run("Ministering Through Cliches Volume 2");
	stmt.run("Poems of Delight: Ministering to your Soul");
    stmt.finalize();

    db.each("SELECT rowid AS id, title FROM books", (err, row) => {
        console.log(row.id + ": " + row.title);
    });
});




app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'templates/index.html'));
});

app.get('/books', (req, res) => {
  const books = [];  
  const data = [];
  title= req.query.title;		
  if (title != undefined){
	   db.all("SELECT title FROM books WHERE title LIKE $title", {$title: '%' + title + '%'},
	   (err, rows) => {rows.forEach((row) =>{
		 
		   books.push(row.title);
	   })		      
  });
setTimeout(() => { 
if (books.length > 0){
 books.forEach((t) => {
	    data.push(search.findBook(t));
	 
  });
   res.render(path.join(__dirname, 'templates/book.html'), {books: JSON.stringify(data)});
}

else{
 req.flash('message',"No results found, press the back button to return to books page and try again");
 res.send(req.flash('message'));

}
 }, 5000);
 
 
  }
  else{
  res.render('book');
  }
});

app.get('/ministering', (req, res) => {
  res.render(path.join(__dirname, 'templates/cliches.html'));
});
//
 exports.cliches = onRequest(app);