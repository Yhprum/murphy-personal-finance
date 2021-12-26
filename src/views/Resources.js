import React from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from "react-bootstrap";

function Resources() {
  let navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col>
          <Card className="resource-card" onClick={() => navigate("retirement")}>
            Retirement Savings Plan
          </Card>
        </Col>
        <Col>
          <Card className="resource-card" onClick={() => navigate("loans")}>
            Loan Calculator
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Resources;