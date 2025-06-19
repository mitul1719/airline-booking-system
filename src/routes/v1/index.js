const router = require("express").Router();
const { InfoController } = require("../../controllers");

const airplaneRoutes = require("./airplane.router");

router.use("/airplanes", airplaneRoutes);

router.get("/info", InfoController.info);

module.exports = router;
