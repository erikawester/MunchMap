import React from "react";
import { useNavigate } from "react-router-dom";

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
      body: JSON.stringify({ restaurant: document.getElementById('restaurant').value }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Would You Like To Add A Restaurant?</h1>
      <form>
        <input id='restaurant'/>
        <br />
        <button onClick={onButtonClick}>Add Here!</button>
      </form>
    </>
  );
};

export default Home;
