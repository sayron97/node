
process.env.NODE_ENV = 'development';

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

const host = '127.0.0.1';
const port = 7000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    if(req.query.name === undefined){
        return res.status(401).send({
            error: 'Need a name'
        })
    } else {
        next();
    }
});

app.route('/api/users')
    .get((req, res) => {
        return res.status(200).send({data: 'Hello, my dear ' + req.query.name});
});

app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`));