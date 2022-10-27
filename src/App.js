import AddNumber from "./Numbers/AddNumbers";
import NumbersList from "./Numbers/NumbersList";
import React, { useState } from "react";

function App() {
  const [numberList, setNumberList] = useState([]);
  const addNumberHandler = (uNumber) => {
    console.log(uNumber)
    setNumberList((prevNumberList) => {
      return [
        ...prevNumberList,
        { number: uNumber, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddNumber onAddNumber={addNumberHandler}></AddNumber>
      <NumbersList numbers={numberList} />
    </>
  );
}

export default App;
