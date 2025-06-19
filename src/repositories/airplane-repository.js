const CrudRepository = require("./crud-repository");
const { AirPlaneModel } = require("../db/models");

class AirplaneRepository extends CrudRepository {
    constructor() {
        super(AirPlaneModel);
    }
}

module.exports = AirplaneRepository;
