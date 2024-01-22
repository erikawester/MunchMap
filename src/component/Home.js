import React from "react";
import { useNavigate } from "react-router-dom";
import Restaurants from "./Restaurants";

const Home = (props) => {
  const onButtonClick = async (e) => {
    //doesn't allow the page to refresh when you don't want it to
    e.preventDefault();
    await fetch("/addRestaurant", {
      method: "POST",
      //reads headers and understands that it's JSON
      headers: {
        "content-type": "application/json",
      },
      //this is how you grab the text that's inputted and send it to the database
      body: JSON.stringify({
        restaurant: document.getElementById("restaurant").value,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1 style={{ fontFamily: "arial" }}>Where Are My Friends Eating?</h1>
      <h3>Are You Hungry? Don't know where to go to eat? </h3>
      <p>
        Check out where your friends are eating and what they have to say about
        these restaurants!
      </p>
      <Restaurants />
      <h3>Do you want to add a restaurant?</h3>
      <form>
        <input id="restaurant" />
        <br />
        <button onClick={onButtonClick}>Add Here!</button>
      </form>
    </>
  );
};

export default Home;
