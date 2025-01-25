import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./components/CardComp";
import CustomBtn from "./components/CustomBtn";

export default function App() {
  const [joke, setJoke] = useState("loading ...");

  function b1Handler(){
    alert("this is b1")
  }
  
  function b2Handler() {
    alert("this is b2");
  }

  useEffect(() => {
    async function Handler() {
      const response = await axios.get(
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist&type=single"
      );

      if (!response) {
        alert("err");
      } else {
        console.log(response);
        setJoke(response.data.joke);
      }
    }

    Handler();
  }, []);
  return (
    <div className="min-h-screen flex flex-col space-y-2 items-center justify-center">
      <Card name={joke} />
      <Card
        name={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quasi."
        }
      />
      <CustomBtn label={"B1"} CustomClick={b1Handler} />
      <CustomBtn label={"B2"} CustomClick={b2Handler} />
    </div>
  );
}



