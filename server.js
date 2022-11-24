const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    const index = path.join(__dirname, 'index.html');
    res.sendFile(index);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
