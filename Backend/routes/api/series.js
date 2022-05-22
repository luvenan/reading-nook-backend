const express = require('express');
const router = express.Router();
const { getSeries, addSeries, deleteSeries } = require('../../controllers/seriesController.js')



//Get series - request - returns data to be used by the frontend
router.get('/', getSeries);

//Add series
router.post('/', addSeries);

//Delete series
router.delete('/:id', deleteSeries);


module.exports = router;