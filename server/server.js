//get access to express and the path
const express = require("express");
const app = express();
//connecting to local host 3000
const path = require("path");
const port = 3000;

//importing middleware functions
const restaurantController = require("./controllers/restaurantController");

//to connect to database / import mongoose
const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/Restaurants";
//connect your database
mongoose.connect(mongoURI);

//anything that comes into express, unpackage it
app.use(express.json());
//don't break my API connection
app.use(express.urlencoded());

//all get requests/ post / update
app.get("/", (req, res) => {
  res.send("Express is working:D");
});

app.post("/addRestaurant", restaurantController.addRestaurant, (req, res) => {
  console.log("hi");
  res.sendStatus(200);
  //.status().json()
});

// get request and then in middleware find 
app.get('/displayRestaurants', restaurantController.displayRestaurants, (req, res) => {
  console.log('this is running, youve displayed the restaurant')
  res.send(res.locals)
})

//update the restaurants with a review using a patch request
// app.patch('/updateRestaurants', restaurantController.updateRestaurants, (req, res) => {
//   console.log('has been updated with a review')
//   res.sendStatus(200)
// })

// statically serve everything in the build folder on the route '/dist'
app.use("/build", express.static(path.join(__dirname, "../dist")));

// add error handeling!

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
