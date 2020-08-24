const AppointmentRepository = require('../repositories/AppointmentRepository');


let get = async (req, res) => {
    let app = await AppointmentRepository.get();
    res.json(app);
}

let getConfirmed = async( req,res) =>{
    const id = req.params.id;
    let app = await AppointmentRepository.confirmedAppointment(id);

    res.json(app);
}

let getUnConfirmed = async( req,res) =>{
    const id = req.params.id;
    let app = await AppointmentRepository.unconfirmedAppointment(id);

    res.json(app);
}

let getById = async (req, res) => {
    let id = req.params.id;
    let app = await AppointmentRepository.findById(id);

    console.log(app.date)

    res.json(app);
}

let getByDoctorId = async (req, res) => {
    let id = req.params.id;
    let app = await AppointmentRepository.findByDoctorId(id);

    res.json(app);
}

let getByPatientId = async (req, res) => {
    let id = req.params.id;
    let app = await AppointmentRepository.findByPatientId(id);
    
    res.json(app);
}

let post = async (req, res) => {
    let data = { ...req.body };

    let app = await AppointmentRepository.create(data);
    res.json(app);
}

let remove = async (req, res) => {
    let id = req.params.id;
    let app = await AppointmentRepository.remove(id);

    res.json(app);
}

let update = async (req,res) => {
    let id = req.params.id;
    let data = { ...req.body };

    let app = await AppointmentRepository.update(id,data);
    res.json(app);
}

module.exports = { get, getById, getByDoctorId, getByPatientId, getConfirmed, getUnConfirmed, post, remove, update };