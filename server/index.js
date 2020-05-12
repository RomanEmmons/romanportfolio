const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client/public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`listening on port ${port}!`));
