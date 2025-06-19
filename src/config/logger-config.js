const fs = require("fs");
const path = require("path");

const LOG_FILE_LOCATION = path.join(__dirname, "../logs/app-log.json");

const customTimestamp = () => {
    const now = new Date();
    const pad = (n) => (n < 10 ? "0" + n : n);

    const day = pad(now.getDate());
    const month = pad(now.getMonth() + 1);
    const year = now.getFullYear();
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());

    return `,"time":"${day}-${month}-${year}:${hours}:${minutes}:${seconds}"`;
};

module.exports = {
    Logger: require("pino-http")(
        {
            customLogLevel: function (_, res, err) {
                if (res.statusCode >= 400 && res.statusCode < 500) {
                    return "warn";
                } else if (res.statusCode >= 500 || err) {
                    return "error";
                } else if (res.statusCode >= 300 && res.statusCode < 400) {
                    return "silent";
                }
                return "info";
            },
            timestamp: customTimestamp,
        },
        fs.createWriteStream(LOG_FILE_LOCATION, { flags: "a" })
    ),
    log: require("pino")({
        timestamp: customTimestamp,
        base: null,
        transport: {
            target: "pino-pretty",
            options: {
                colorize: true,
                translateTime: false,
            },
        },
    }),
};
