const router = require("express").Router();
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");

router.post("/", AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane);
router.get("/", AirplaneController.getAirplanes);

module.exports = router;
