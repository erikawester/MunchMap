const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  restaurant: { type: String, require: true },
  review: {type: String, require: true}
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
