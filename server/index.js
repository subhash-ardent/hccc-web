const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const request = require('request');


// const health = require(__dirname + '/server/routes/health');
// const api = require(__dirname + '/server/routes/health');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.use('/yande/api', api);
// app.use('/yande/health', health);
app.get('/yande/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/youth-and-education/index.html'));
});
app.use('/yande/', express.static(path.join(__dirname, '../dist/youth-and-education')));

const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost: ${port}`));



