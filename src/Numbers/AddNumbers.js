import React, { useRef, useState } from "react";
import classes from "./AddNumbers.module.scss";
import Card from "../Components/UI/Card";
import Button from "../Components/UI/Button";
import Wrapper from "../Components/Helpers/Wrapper";
import ErrorModal from "../Components/UI/ErrorModal";

const AddNumber = (props) => {
  const numberInputRef = useRef();

  const [error, setError] = useState();
  const [ numberExample, setNumberExample] = useState(3)
  const addNumbersHandler = (event) => {
    event.preventDefault();
    const enteredNumber = numberInputRef.current.value;
    if (!enteredNumber) {
        console.log('Invalid Number')
      setError({
        title: "Invalid Input",
        message: "Please enter a valid number",
      });
      return;
    }

    props.onAddNumber(enteredNumber);
    numberInputRef.current.value = null;
  };

  const errorHandler = () => {
    setError(null);
  };
  const removeNumberExample = () => {
    setNumberExample('');
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card>
        <form onSubmit={addNumbersHandler} className={classes.form}>
          <label>Ingrese Número</label>
          <input type="number" ref={numberInputRef} onChange={removeNumberExample} defaultValue={numberExample}></input>
          <Button type="submit">Add Number</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddNumber;
