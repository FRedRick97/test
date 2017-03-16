var app = require('express')();

app.get('/', (req, res) => {
    res.status(200).send('<html><body><h1>Aanchal is a fool.</h1></body></html>')
});

var port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Server up on port ${port}`);
});