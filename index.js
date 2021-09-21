const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./router/indi')
const PORT = process.env.PORT || 3000;
app.set('view engine','ejs');

app.use(express.static('public'));
 app.use(mainRouter)
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});