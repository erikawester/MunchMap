//for database only, variable will always expect a capitol letter
//../ brings you out of ONE folder
const Restaurant = require("../model/database");

const restaurantController = {};

//add a restaurant to the page
restaurantController.addRestaurant = async (req, res, next) => {
  try {
    if ('restaurant' in req.body) {
      //if it exists, create it in our database
      Restaurant.create({ restaurant: req.body.restaurant });
    } else {
      throw new Error("You first need to provide a restaurant name");
    }
    next();
  } catch (error) {
    next(error);
  }
};

//display the restaurant that has been added onto the page
restaurantController.displayRestaurants = async (req, res, next) => {
  try {
    //use Restaurant.find to find all restaurants that have been added to database
    const restaurants = await Restaurant.find({});
    //this becomes the response
    res.json(restaurants);
  } catch (error) {
    next(error);
  }
};

//update the restuarant with a review
restaurantController.updateRestaurants = async (req, res, next) => {
  try {
    //here is where I want to access the restaurant, and enable
  } catch (error) {
    next(error);
  }
};

module.exports = restaurantController;
