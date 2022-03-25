const { response } = require('express');
const express = require('express');
const path = require('path')
const fs = require('fs')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'))

app.get('/api/notes', function (req,res) {
    // RETURN ALL THE NOTES!!!

    fs.readFile('./db/db.json', 'utf-8', function(err, data) {
        console.log('data!!!', JSON.parse(data))
        res.json(JSON.parse(data))

    })
})

app.post('/api/notes', function () {
    // ADD NEW NOTE TO THE array!!!
})

app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, './public', 'notes.html'));
})

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
