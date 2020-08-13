var express = require("express");
var router = express.Router();

const AppointmentService = require('../service/AppointmentService');

router.get("/", AppointmentService.get);
router.get("/:id", AppointmentService.getById);
router.get("/doctor/:id", AppointmentService.getByDoctorId);
router.get("/patient/:id", AppointmentService.getByPatientId);
router.get("/doctor/confirmed/:id", AppointmentService.getConfirmed);
router.get("/doctor/unconfirmed/:id", AppointmentService.getUnConfirmed);

router.post("/post", AppointmentService.post);
router.delete("/:id", AppointmentService.remove);
router.put("/:id", AppointmentService.update);

module.exports = router;