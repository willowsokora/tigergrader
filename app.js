'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const Zip = require('adm-zip');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

app.post('/grade', upload.single('submissions'), (req, res) => {
	var submissionsZip = new Zip(req.file.buffer);
	var submissions = submissionsZip.getEntries();
	submissions.forEach((submission) => {
		
	});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);

module.exports = app;