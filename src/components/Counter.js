import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const upHandler = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <Container>
        <h1>{number}</h1>
        <Button variant="info" onClick={upHandler}>
          UP ONE
        </Button>
      </Container>
    </div>
  );
};

export default Counter;
