import React, { useState, useEffect } from "react";

//functionality to display the restuarant on the page that I've added to the database

const Restaurants = (props) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    //i want to fetch the list of restaurants and display them. currently attempting to display
    //in the return statement of this component
    fetch("/displayRestaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.log(error));
  }, restaurantItems); // empty array to ensure this effect only runs once

  //   const newArr = [];

  //   for (let i = 0; i < restaurants.length; i++) {
  //     newArr.push(key={restaurant}, {restaurant})
  //   }

  const restaurantItems = restaurants.map((restaurant) => (
    <li key={restaurant._id}>
      {restaurant.restaurant}
      <br/>
      <button>Add A Review</button>
    </li>
  ));
  // restaurantItems.push(<button>Add a review</button>)
  return (
    <>
      <h2>Places To Eat</h2>
      <ul>{restaurantItems}</ul>
    </>
  );
};

export default Restaurants;
