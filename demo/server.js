const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use('/jumping-letters', express.static(__dirname + '/build'));

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, './build/index.html'));
});

app.listen(port);
console.log("server started: http://localhost:" + port);
