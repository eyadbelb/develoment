import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Buttonsa, Buttonsas, Buttonss, Home } from "./styles";

function App() {
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
  const [randomNumber, setRandomnumber] = useState(generateRandomNumber());
  const [userNumber, setUserNumber] = useState(0);
  const [message, setMessage] = useState("");
  const [attempt, setAttempt] = useState(0);
  const userInput = (event) => {
    console.log(event.target.value);
    setUserNumber(event.target.value);
  };

  const compare = () => {
    if (attempt < 10) {
      if (+userNumber > randomNumber) {
        setMessage(`Higher and you still have ${9 - attempt}`);
      }
      if (+userNumber < randomNumber) {
        setMessage(`Lower and you still have ${9 - attempt}`);
      }
      if (+userNumber === randomNumber) {
        setMessage("TRAAAAAAAAA!!! YOU WON");
      }
      setAttempt(attempt + 1);
    } else {
      setMessage("HAHA YOU LOST ");
    }
  };
  return (
    <Home>
      <h1>Guess The Number</h1>

      <Buttonsas placeholder="Type Something..." onChange={userInput} />
      <Buttonss onClick={compare}> CHECK </Buttonss>
      <h1> {message} </h1>
      <Buttonsa onClick={() => window.location.reload()}>Reload Game</Buttonsa>
    </Home>
  );
}

export default App;
