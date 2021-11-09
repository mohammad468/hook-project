import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("MOHAMMAD");
  const nameHandler = () => {
    setName("mohammad");
  };
  const upHandler = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <div>
      <Container>
        <h1>{name}</h1>
        <Button variant="info" onClick={nameHandler}>
          CHANGE
        </Button>
        <h1>{number}</h1>
        <Button variant="info" onClick={upHandler}>
          UP ONE
        </Button>
      </Container>
    </div>
  );
};

export default Counter;
