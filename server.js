const express = require('express');
const bodyparser = require('body-parser');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyparser.json());

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
