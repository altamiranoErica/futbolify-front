const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 4200;
app.use(express.static(__dirname + '/dist/futbolify-front'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/futbolify-front/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
