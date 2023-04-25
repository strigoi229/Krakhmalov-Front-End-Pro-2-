import "./App.css";
import React, { useState } from "react";
import smile_1 from "./img/smile_1.png";
import smile_2 from "./img/smile_2.png";
import smile_3 from "./img/smile_3.png";
import Smile from "./components/Smile";
import Result from "./components/result";

function App() {
  let [smiles, setSmiles] = useState([
    { id: "image-0", name: smile_1, votes: 0 },
    { id: "image-1", name: smile_2, votes: 0 },
    { id: "image-2", name: smile_3, votes: 0 },
  ]);

  let [repository, setRepository] = useState([]);

  //Функція що додає голоси, при голосуванні за смайл, передана у компонент Smile
  function countVotes(id) {
    const updatedVotes = smiles.map((smile) => {
      if (id === smile.id) {
        return { ...smile, votes: ++smile.votes };
      } else {
        return smile;
      }
    });
    setSmiles(updatedVotes);
  }

  // функція викликається кнопкою Show Result
  // тут змінюю стан smile, виводить або смайл з найбільшою кікькістю голосів або список усіх смайлів
  function showResult() {
    let winner;
    if (smiles.length > 1) {
      winner = smiles.reduce((acc, curr) =>
        acc.votes > curr.votes ? acc : curr
      );
      setRepository(smiles);
      setSmiles([winner]);
    } else {
      setSmiles(repository);
    }
  }

  // формує початковий список смайлів, передає параметри у компонент Smile
  const smileList = smiles.map((smile) => (
    <Smile
      id={smile.id}
      name={smile.name}
      votes={smile.votes}
      key={smile.id}
      countVotes={countVotes}
      smiles={smiles}
    />
  ));

  return (
    <div className="wrapper">
      <ul className="item-list">{smileList}</ul>
      <Result smiles={smiles} showResult={showResult}></Result>
    </div>
  );
}

export default App;
