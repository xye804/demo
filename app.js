const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.json({data:"index"});
})
app.get('/users', (req, res) => {
    res.json({data:[{name:"John", email:"john@gmail.com"}]});
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})