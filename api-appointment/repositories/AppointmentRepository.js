var Appointment = require ('../models/Appointment');
var Repository = require('./Repository');

class AppointmentRepository extends Repository {
    constructor(model) {
        super(model);
    }

    async findByDoctorId(doctorId) {
        return await this.model.find({ doctor: doctorId }).exec();
    }

    async findByPatientId(patientId) {
        return await this.model.find({ patient: patientId }).exec();
    }

    async update(id, appParam){
        const appointment = await this.model.findById(id);

        //validate
        if(!appointment) throw new Error("Appointment not found!");

        Object.assign(appointment, appParam);

        const app = await appointment.save();
        return app;
    }

    
    async confirmedAppointment(doctorId){
        return await this.model.find({ doctor: doctorId, confirmed: true}).exec();
    }

    async unconfirmedAppointment(doctorId){
        return await this.model.find({ doctor: doctorId, confirmed: false}).exec();
    }
}

var appointmentRepository = new AppointmentRepository(Appointment);

module.exports = appointmentRepository;