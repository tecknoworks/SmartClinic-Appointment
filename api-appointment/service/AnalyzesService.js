const AnalyzesRepository = require("../repositories/AnalyzesRepository");
const AppointmentRepository = require('../repositories/AppointmentRepository');

let get = async (req, res) => {
    let ana = await AnalyzesRepository.get();
    res.json(ana);
}

let getById = async (req, res) => {
    let id = req.params.id;
    let ana = await AnalyzesRepository.findById(id);

    res.json(ana);
}

let getByAppointment = async (req, res) => {
    let id = req.params.id;
    let ana = await AnalyzesRepository.findByAppointment(id);

    res.json(ana);
}

let post = async (req, res) => {
    let data = { ...req.body };
    let app = await AppointmentRepository.findById(data.appointment);

    if (app == null) {
        res.status(404).json({
            message: 'Appointment not found!'
        });

        return;
    }

    let ana = await AnalyzesRepository.create(data);
    res.json(ana);
}


let remove = async (req, res) => {
    let id = req.params.id;
    let ana = await AnalyzesRepository.remove(id);

    res.json(ana);
}

let update = async (req,res) => {
    let id = req.params.id;
    let data = { ...req.body };

    let ana = await AnalyzesRepository.update(id,data);
    res.json(ana);
}

module.exports = { get, getById, getByAppointment, post, remove, update };