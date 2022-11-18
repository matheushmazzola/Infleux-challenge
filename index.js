const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = __dirname + '/src/views/';
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./src/controllers/campaignsController')(app);
require('./src/controllers/fetchController')(app);

app.use(cors());
app.use(express.static(path));

app.get('/', (request, response)=>{
    response.sendFile(path + "index.html");
})

app.listen(process.env.PORT || 3001, (error)=>{
    
    if (error) {
        return console.log('Error', error)
      }

    console.log("server started");
})