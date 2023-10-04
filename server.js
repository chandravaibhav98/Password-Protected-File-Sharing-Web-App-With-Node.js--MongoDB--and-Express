require('dotenv').config();

const multer = require('multer');
const upload = multer({ dest: 'uploads' });

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

app.post('/upload', upload.single('file'), (req, res) => {
	res.send('Upload Successful');
});

app.listen(process.env.PORT || 3000);
