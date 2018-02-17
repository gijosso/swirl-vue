const express = require('express');
const app = express();
const parser = require('body-parser');
const router = express.Router();
const routes = require('./api/routes');
const port = process.env.PORT || 8080;

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

routes(app, {});

app.listen(port, function () {
    console.log('Server running on port ' + port);
});
