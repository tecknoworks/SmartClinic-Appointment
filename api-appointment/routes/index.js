var express = require('express');
var router = express.Router();

const appointmentRouter = require('./appointment');
const analyzesRouter = require('./analyzes');

router.use('/appointment', appointmentRouter);
router.use('/analyzes', analyzesRouter);

module.exports = router;
