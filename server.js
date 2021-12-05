const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const app = express();
app.use(express.static('public'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));