import { useState } from "react";
import axios from "axios";

export default function Random_Joke() {
  const [joke, setJoke] = useState({ setup: "", punchline: "" });

  function fetchJoke() {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        setJoke(response.data);
      })
      .catch((error) => {
        console.log("Error fetching joke:", error);
      });
  }

  return (
    <div>
      <h1>{joke.setup}</h1>
      <h3>{joke.punchline}</h3>
      <button onClick={fetchJoke}>Click for a Joke</button>
    </div>
  );
}
