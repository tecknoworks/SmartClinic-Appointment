var express = require("express");
var router = express.Router();

const AnalyzesService = require('../service/AnalyzesService');

router.get("/", AnalyzesService.get);
router.get("/:id", AnalyzesService.getById);
router.get("/appointment/:id", AnalyzesService.getByAppointment);

router.post("/post", AnalyzesService.post);
router.delete("/:id", AnalyzesService.remove);
router.put("/:id", AnalyzesService.update);

module.exports = router;