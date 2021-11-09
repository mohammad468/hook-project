import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Spinner, Badge } from "react-bootstrap";
import "../App.css";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data));
  }, []);
  return (
    <div>
      {data.length ? (
        data.map((item) => (
          <Container>
            {" "}
            <h3 key={item.id}>
              {" "}
              <Badge bg="info">{item.title}</Badge>{" "}
            </h3>{" "}
          </Container>
        ))
      ) : (
        <div className="d-flex justify-content-center align-items-center my-spinner">
          <Spinner animation="grow" variant="info" role="status" />
        </div>
      )}
    </div>
  );
};

export default Data;
