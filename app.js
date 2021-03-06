const express= require('express');
const app= express();
const path=require('path');
const { use } = require('./routers/main');
const mainRouter=require('./routers/main');

app.use(express.static('public'));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/', mainRouter);

app.listen(3000, () => {
    console.log(`Servidor corriendo en http://localhost:${3000}`);
})