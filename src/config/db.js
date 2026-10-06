const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers([
    "1.1.1.1",
    "8.8.8.8"
]);
function connectToDB() {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((err) => {
            console.error("MongoDB connection error:", err);
        });
}

module.exports = connectToDB;