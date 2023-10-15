import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "../styles/Quizzes.css";

const Quizzes = () => {
  return (
    <Container>
      <Row className="pt-5">
        <h1 className="text-center quizzes-heading">
          Test Your Investing Knowledge
        </h1>
        <h2 className="text-center quizzes-text">Your Tests</h2>
      </Row>
      <Row className="pt-3">
        <Button
          id="buttonTest1"
          className="pt-2 btn btn-primary"
          onClick={console.log("click 1")}
        >
          Test 1{" "}
        </Button>
        <Button
          id="buttonTest2"
          className="pt-2 btn btn-secondary"
          onClick={console.log("click 2")}
        >
          Test 2{" "}
        </Button>
      </Row>
    </Container>
  );
};

export default Quizzes;
