const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const methodOverride = require('method-override');
const session = require('express-session');
const app = express();

const User = require('./models/User');
mongoose.connect('mongodb://localhost:27017/movie')
    .then(()=>{
        console.log("Db Connect");
    })
    .catch(()=>{
        console.log("Do not Connect");
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/auth', require('./routes/auth'));
app.use('/movies', require('./routes/movies'));

app.get('/', (req, res) => {
    res.render('home');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




