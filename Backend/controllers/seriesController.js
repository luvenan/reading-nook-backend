const mongoose = require('mongoose');

//Uses mongoose to connect to the database on atlas

mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("Database connection successful"))
.catch((err)=> console.error(err));


const seriesSchema = {
    title: String,
    author: String,
    query: String,
    genre: String,
    volumes: Number
}

const Series = mongoose.model('Series', seriesSchema, 'series');

//Get Series - GET
const getSeries = async (req, res) => {
    res.status(200).send(await Series.find({}));
}

//Add Series - POST
const addSeries = async (req, res) => {
    console.log(req.body);
    await Series.create({
        title: req.body.title,
        author: req.body.author,
        query: req.body.query,
        genre: req.body.genre,
        volumes: req.body.volumes
    });
    res.status(201).send();
};


//Delete series - DELETE
const deleteSeries = async (req, res) => {
    if(req.params.id) {
        await Series.deleteOne({_id: req.params.id});
        res.status(200).json({ message: 'Delete series ' + req.params.id});
    }
};

module.exports = {
    getSeries,
    addSeries,
    deleteSeries
}