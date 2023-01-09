const app = require("./app");
// Database Lib Import
const mongoose = require("mongoose");

// Mongo DB Database Connection
let URI =
  "mongodb+srv://rifat:rifat12345@cluster0.ltldm.mongodb.net/inventory?retryWrites=true&w=majority";

//   let URI =
//   "mongodb+srv://<username>:<password>@cluster0.7uslu.mongodb.net/inventory?retryWrites=true&w=majority";

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
