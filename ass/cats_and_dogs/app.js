const express = require('express');
const app = express();
const port = 7077;

app.get('/', (req, res) => {
    res.sendFile('', { root: __dirname });
});

app.get('/cars', (req, res) => {
    res.sendFile('views/cars.html', { root: __dirname });
});

app.get('/dogs', (req, res) => {
    res.sendFile('views/dogs.html', { root: __dirname });
});

app.use(function(req, res) {
    res.send("URL requested is not available");
})

app.listen(port, () => console.log(`listening on port ${port}!`));