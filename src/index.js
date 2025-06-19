const { ServerConfig, LoggerConfig, DatabseConfig } = require("./config");
const express = require("express");
const apiRoutes = require("./routes");

const app = express();

const { Logger, log } = LoggerConfig;

app.use(Logger);
app.use(express.json());
app.use(express.urlencoded());

//Routes
app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
    DatabseConfig.connectDB(log).catch(() => {
        log.error("Failed to connect to the database. Shutting down the server.");
        process.exit(1);
    });
    log.info(`Server is running on port ${ServerConfig.PORT}`);
});
