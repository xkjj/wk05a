const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    //res.send("<h1> Is this working </h1> <a href = '/about'>go to about</a> ");
    res.render('index');

});

app.get('/about', (req, res)=>{

    res.send("<h2>About us <h2> <a href = '/'>go back</a>");

});

app.listen(PORT, () => {
    console.log(`App running on localhost: ${PORT}`);
});
