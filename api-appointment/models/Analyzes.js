var mongoose = require('mongoose');

const analyzesSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true
        },
        results: {
            type: String,
            required: true
        },
        appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
    }
);

const Analyzes = mongoose.model('Analyzes', analyzesSchema);

module.exports = Analyzes;