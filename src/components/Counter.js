import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <Container>
        <h1>{number}</h1>
        <Button variant="info" onClick={() => setNumber(number + 1)}>
          UP ONE
        </Button>
      </Container>
    </div>
  );
};

export default Counter;
