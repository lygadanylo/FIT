const mongoose = require("mongoose");
const configUrl = "mongodb://localhost:27017/gamedb";
mongoose.Promise = Promise;

mongoose.connection.openUri(
  configUrl,
  {
    useNewUrlParser: true
  },
  function(err, db) {
    if (err) {
      console.error(
        "Unable to connect to the server. Please start the server. Error: " +
          err
      );
    } else {
      console.log("Connected to DB successfully! URL: " + configUrl);
    }
  }
);
const db = mongoose.connection;

// CONNECTION EVENTS
// When successfully connected

db.on("connecting", () =>
  console.log("Mongoose connecting open to " + configUrl)
);

// If the connection throws an error
db.on("error", err => console.error("Mongoose connection error: " + err));

// When the connection is disconnected
db.on("disconnected", () => console.warn("Mongoose connection disconnected"));

process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.warn(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});

module.exports = mongoose;
