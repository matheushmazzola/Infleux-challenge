const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./controllers/campaignsController')(app);
require('./controllers/fetchController')(app);


app.get('/', (request, response)=>{
    response.send("oi");
})

app.listen(port, (error)=>{
    
    if (error) {
        return console.log('Error', error)
      }

    console.log("server started");
})