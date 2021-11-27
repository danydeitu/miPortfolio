
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('views'));


const port = 3000;
app.listen(port, () => console.log('Server running in port ' + port))


const mainRoute  = require('./routes/mainRoute');
const aboutRoute = require('./routes/aboutRoute')



app.use(mainRoute);
app.use(aboutRoute);