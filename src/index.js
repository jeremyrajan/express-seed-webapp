const express = require('express');
const app = express();
const routes = require('./routes').init(express, app);
const path = require('path');

app.use(express.static('public'));
app.set('view engine', 'jade'); // F*&k pug, i am not changing name to .pug
app.set('views', path.join(__dirname, 'views'));

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
