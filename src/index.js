const { ServerConfig, LoggerConfig } = require("./config");
const express = require("express");
const apiRoutes = require("./routes");

const app = express();

const { Logger } = LoggerConfig;

app.use(Logger);

//Routes
app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log("Server is running on port", ServerConfig.PORT);
});
