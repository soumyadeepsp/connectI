const express = require('express');
const port = 8000;
const app = express();

app.listen(port, function(err){
    if (err) {
        console.log("Error in runnin gthe server on port : "+port);
        return;
    }
    console.log("Server is running perfectly on port : "+port);
});