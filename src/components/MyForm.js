import React, { useState } from "react";
import { Container, Form, Badge } from "react-bootstrap";

const MyForm = () => {
  const [Data, setData] = useState({
    name: "",
    age: "",
  });
  return (
    <div>
      <Container>
        <Form>
          <Form.Control
            type="text"
            placeholder="Enter Text"
            className="my-3"
            value={Data.name}
            onChange={(event) => setData({ ...Data, name: event.target.value })}
          />
          {console.log(Data.name)}
          <Form.Control
            type="text"
            placeholder="Enter Text"
            className="my-3"
            value={Data.age}
            onChange={(event) => setData({ ...Data, age: event.target.value })}
          />
          {console.log(Data.age)}
        </Form>
        <h4>
          <Badge bg="info">{JSON.stringify(Data)}</Badge>
        </h4>
        ...Data,
      </Container>
    </div>
  );
};

export default MyForm;
