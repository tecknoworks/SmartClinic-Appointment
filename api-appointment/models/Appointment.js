var mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
    {
        date: {
            type: Date,   //"2016-05-18T16:00:00Z"
            required: true
        },
        description: {
            type: String,
            required: true
        },
        doctor :{
            type: String,
            required: true
        },
        patient: {
            type: String,
            required: true
        },
        confirmed:{
            type: Boolean,
            default: false
        }
    }
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;