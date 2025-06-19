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
    const airplanes = generateRandomAirplanes(50);

    await AirPlaneModel.deleteMany();
    await AirPlaneModel.insertMany(airplanes);

    console.log("✅ 50 random airplanes seeded!");
}

module.exports = {
    seedAirplanes,
};
