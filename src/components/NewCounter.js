import React, { useReducer } from "react";
import { Button, Container } from "react-bootstrap";

const initialState = {
  num1: 0,
  num2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Up":
      return { ...state, num1: state.num1 + action.amount };
    case "Down":
      return { ...state, num1: state.num1 - action.amount };
    case "Up2":
      return { ...state, num2: state.num2 + action.amount };
    case "Down2":
      return { ...state, num2: state.num2 - action.amount };
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
          <h1 className="text-center">{number.num1}</h1>
          <div className="d-flex justify-content-center">
            <Button
              className="mx-2"
              variant="info"
              onClick={() => dispatch({ type: "Up", amount: 1 })}
            >
              Up
            </Button>
            <Button
              className="mx-2"
              variant="warning"
              onClick={() => dispatch({ type: "Reset" })}
            >
              Reset
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              onClick={() => dispatch({ type: "Down", amount: 1 })}
            >
              Down
            </Button>
          </div>
        </div>
      </Container>
      <Container>
        <div>
          <h1 className="text-center">{number.num2}</h1>
          <div className="d-flex justify-content-center">
            <Button
              className="mx-2"
              variant="info"
              onClick={() => dispatch({ type: "Up2", amount: 2 })}
            >
              Up
            </Button>
            <Button
              className="mx-2"
              variant="warning"
              onClick={() => dispatch({ type: "Reset" })}
            >
              Reset
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              onClick={() => dispatch({ type: "Down2", amount: 2 })}
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
