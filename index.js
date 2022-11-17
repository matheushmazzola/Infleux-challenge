const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = __dirname + '/src/views/';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./src/controllers/campaignsController')(app);
require('./src/controllers/fetchController')(app);



app.use(express.static(path));

app.get('/', (request, response)=>{
    response.sendFile(path + "index.html");
})

app.listen(process.env.PORT || 3000, (error)=>{
    
    if (error) {
        return console.log('Error', error)
      }

    console.log("server started");
})