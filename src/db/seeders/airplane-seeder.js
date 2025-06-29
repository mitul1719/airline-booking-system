const { AirPlaneModel } = require("../models/index");

const airplaneModels = [
    "Boeing 737",
    "Airbus A320",
    "Boeing 777",
    "Airbus A380",
    "Embraer E190",
    "Bombardier CRJ900",
    "Concorde",
    "Cessna 172",
    "Lockheed Martin C-130",
    "Sukhoi Superjet 100",
    "McDonnell Douglas DC-10",
    "Antonov An-225",
    "Dassault Falcon 7X",
    "Learjet 75",
    "Beechcraft King Air",
];

function generateRandomAirplanes(count = 50) {
    const airplanes = [];

    for (let i = 0; i < count; i++) {
        const model = airplaneModels[Math.floor(Math.random() * airplaneModels.length)];
        const randomModelSuffix = Math.floor(Math.random() * 900 + 100); // random 3-digit suffix
        const modelNumber = `${model}-${randomModelSuffix}`;
        const capacity = Math.floor(Math.random() * (850 - 4 + 1)) + 4; // random capacity between 4 and 850

        airplanes.push({ modelNumber, capacity });
    }

    return airplanes;
}

async function seedAirplanes() {
    const airplanes = generateRandomAirplanes(500);

    console.time("Delete Operation");
    const deleted = await AirPlaneModel.deleteMany({}); // This will delete all documents
    console.timeEnd("Delete Operation");

    console.time("Insert Operation");
    const inserted = await AirPlaneModel.insertMany(airplanes);
    console.timeEnd("Insert Operation");

    console.log({
        deleted: deleted.deletedCount,
        inserted: inserted.length,
    });

    console.log("✅ 1000000 random airplanes seeded!");
}

module.exports = {
    seedAirplanes,
};
