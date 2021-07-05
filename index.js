const { join } =require("path");
const cors = require("cors");
const express = require("express");
const bp = require("body-parser");
const passport = require("passport");
const { mongoose } = require("mongoose");
const { success, error } = require("consola");

// Bring in the app constants
const { DB, PORT } = require("./config");

// Initialize the application
const app = express();

// Middlewares
app.use(cors());
app.use(bp.json());
app.use(passport.initialize());
app.use(express.static(join(__dirname, "./uploads")));
app.use(express.static(join(__dirname, "./documentaion")));

require("./middleware/passport")(passport);

// User Router Middleware
app.use("/", require("./routes/index"));

const startApp = async () => {
    try {
      // Connection With DB
     await mongoose.connect('mongodb+srv://BlogUser:Sifat15963740@cluster0.0igq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true });

  
      success({
        message: `Successfully connected with the Database \n${DB}`,
        badge: true
      });
  
      // Start Listenting for the server on PORT
      app.listen(PORT, () =>
        success({ message: `Server started on PORT ${PORT}`, badge: true })
      );
    } catch (err) {
      error({
        message: `Unable to connect with Database \n${err}`,
        badge: true
      });
      startApp();
    }
  };
  
  startApp();