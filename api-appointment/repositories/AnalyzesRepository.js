var mongoose = require('mongoose');

var Analyzes = require('../models/Analyzes');
var Repository = require('./Repository');

class AnalyzesRepository extends Repository {
    constructor(model) {
        super(model);
    }

    async findByAppointment(appointmentId) {
        return await this.model.find({ appointment: appointmentId }).exec();
    }

    async update(id, anaParam){
        const analyzes = await this.model.findById(id);

        //validate
        if(!analyzes) throw new Error("Appointment not found!");

        Object.assign(analyzes, anaParam);

        const ana = await analyzes.save();
        return ana;
    }

}

var analyzesRepository = new AnalyzesRepository(Analyzes);

module.exports = analyzesRepository;