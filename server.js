const interceptor = require('./interceptor');
const cors = require('cors')
const express = require('express');
const app = express();

const port = '8000';
app.use(cors());
app.use(interceptor);

app.listen(port, error => {
    if(error){
        console.error('server.js error: ', error);
    }
    else{
        console.log('Started NodeJsApi on port '+port);
    }
});
