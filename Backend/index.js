const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();

//Middlewear for dependencies
app.use(cors());

    //This replaces the code with bodyParser for json and allows me to use the body data
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

const series = require('./routes/api/series');

app.use('/api/series', series);

//Handle production
if(process.env.NODE_ENV === 'production') {
    //Set static folder to 'public
    app.use(express.static(__dirname + '/public'));
    //Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// When we deploy it check for an environment variable or run on 5000 (in deployment)
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log('Server started on port ' + PORT));




