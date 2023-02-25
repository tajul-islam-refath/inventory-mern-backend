const app = require("./app");
// Database Lib Import
const mongoose = require("mongoose");

// Mongo DB Database Connection
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASS;
let URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ltldm.mongodb.net/inventory?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true,
};
const PORT = 5050;
mongoose.connect(URI, options, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Database Connection Success");
    app.listen(PORT, function () {
      console.log("App Running successfully into - ", PORT);
    });
  }
});
