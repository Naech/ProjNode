const express = require('express');
const app = express();
const port = 6789;

app.get('/', (req, res) => {
    res.sendFile('home.html', { root: __dirname });
});

app.get('/jessup', (req, res) => {
    res.sendFile('jessup.html', { root: __dirname });
});

app.get('/william/new', (req, res) => {
    res.sendFile('william.html', { root: __dirname });
});

app.use(function(req, res) {
    res.send("URL requested is not available");
})

app.listen(port, () => console.log(`listening on port ${port}!`));
