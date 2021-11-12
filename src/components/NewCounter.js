import React, { useReducer } from "react";
import { Button, Container } from "react-bootstrap";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Up":
      return state + 1;
    case "Down":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};
const NewCounter = () => {
  const [number, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Container>
        <div>
          <h1 className="text-center">{number}</h1>
          <div className="d-flex justify-content-center">
            <Button
              className="mx-2"
              variant="info"
              onClick={() => dispatch("Up")}
            >
              Up
            </Button>
            <Button
              className="mx-2"
              variant="warning"
              onClick={() => dispatch("Reset")}
            >
              Reset
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              onClick={() => dispatch("Down")}
            >
              Down
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewCounter;
