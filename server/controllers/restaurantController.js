//for database only, variable will always expect a capitol letter
    //../ brings you out of ONE folder
const Restaurant = require('../model/database')

const restaurantController = {}

restaurantController.addRestaurant = (req, res, next) => {
    if ('restaurant' in req.body) {
        //if it exists, create it in our database
        Restaurant.create({restaurant: req.body.restaurant})
    } else {
        //otherwise we throw an error
    }
    next();
}

module.exports = restaurantController; 

