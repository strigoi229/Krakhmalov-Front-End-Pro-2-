import "./App.css";
import React, { useEffect, useState } from "react";
import smile_1 from "./img/smile_1.png";
import smile_2 from "./img/smile_2.png";
import smile_3 from "./img/smile_3.png";

function App() {
  let [laughing_smile, setCountLaugh] = useState(0);
  let [sad_smile, setCountSad] = useState(0);
  let [evil_smile, setCountEvil] = useState(0);

  let [result, setResult] = useState(true);

  let [winner, setWinner] = useState("");

  let smiles = {
    // об'єкт де зберігається кількість голосів у кожного смайла
    laughing_smile: laughing_smile,
    sad_smile: sad_smile,
    evil_smile: evil_smile,
  };

  let img = {
    // об'єкт з ключами-назвами смайлів, та значеннями - назвою яку вказали для import
    laughing_smile: smile_1,
    sad_smile: smile_2,
    evil_smile: smile_3,
  };

  function showResult() {
    if (result) {
      const getMaxKey = () => {
        // Функція вираховує найбільше значення серед ключів об'єкта
        const maxValue = Math.max.apply(null, Object.values(smiles));
        setWinner(
          (winner = Object.keys(smiles).filter((k) => smiles[k] === maxValue))
        );
        for (let key in img) {
          // цикл допомогає витягти назву під якою у нас імпортується картинка, типу "smile_1".
          if (key === winner[0]) {
            setWinner((winner = img[key]));
          }
        }
      };
      getMaxKey();
    }

    setResult(!result);
  }
  if (result) {
    return (
      <div className="wrapper">
        <ul className="item-list">
          <li className="item">
            <img src={smile_1} alt="smile"></img>
            <button
              className="button"
              onClick={() => setCountLaugh(++laughing_smile)}
            >
              Vote (votes: {laughing_smile})
            </button>
          </li>
          <li className="item">
            <img src={smile_2} alt="smile"></img>
            <button className="button" onClick={() => setCountSad(++sad_smile)}>
              Vote (votes: {sad_smile})
            </button>
          </li>
          <li className="item">
            <img src={smile_3} alt="smile"></img>
            <button
              className="button"
              onClick={() => setCountEvil(++evil_smile)}
            >
              Vote (votes: {evil_smile})
            </button>
          </li>
        </ul>
        <div className="result">
          <button className="button__result" onClick={showResult}>
            {result ? "Show result" : "Back to smile"}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="wrapper">
        <ul className="item-list">
          <li className="item">
            <h2 className="item__title">Winner</h2>
            <img src={winner} alt="smile"></img>
          </li>
        </ul>
        <div className="result">
          <button className="button__result" onClick={showResult}>
            {result ? "Show results" : "Back to smiles"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
